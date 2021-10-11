import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchContentByField, getOfficeClients, getNavMenus, getGlobal, getFooter } from "contentful/api";
import { filterContentsByOffice } from "contentful/utils";
import { selectCurrentOffice } from "redux/app/selectors";
import { getCopy } from "static/copy";

import Layout from "components/Layout";
import ClientHero from "components/ClientHero";
import ClientGrid from "components/ClientGrid";
import Seo from "components/Seo";

const Portfolio = ({ content, clients, locale, navMenus, global, footer }) => {
  const router = useRouter();
  const currentOffice = useSelector(selectCurrentOffice);
  const [officeClients, setOfficeClients] = useState([]);
  const [pageContent, setPageContent] = useState({});
  const localizedCopy = getCopy(locale);

  const storePageContent = () => {
    if (!content) return;
    if (content.items.length === 0) {
      //page slug was not found
      router.push('/404');
      return;
    }
    setPageContent(content.items[0].fields);
  }

  useEffect(() => {
    storePageContent();

    const filtered = filterContentsByOffice(clients, currentOffice);
    setOfficeClients(filtered);
  }, [content, clients, currentOffice])

  return (
    <>
      <Seo title={pageContent?.ogTitle} description={pageContent?.ogDescription} image={pageContent?.ogImage} />
      <Layout title={`GUT | ${localizedCopy.portfolio}`} navMenus={navMenus} locale={locale} global={global} footer={footer}>
        <ClientHero eyebrow={localizedCopy.portfolioEyebrow} />
        <ClientGrid officeClients={officeClients} path="clients" />
      </Layout>
    </>
  );
};

export async function getStaticProps({ preview = false, locale }) {
  const singlePageSlug = 'clients';
  const content = await fetchContentByField(preview, 'singlePage', 'slug', singlePageSlug, locale);
  const clients = await getOfficeClients(preview, locale);
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);

  return {
    props: { content, clients, navMenus, locale, global, footer },
    revalidate: 1
  };
}

export default Portfolio;
