import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchContentByField, getWorks, getNavMenus, getGlobal, getFooter } from "contentful/api";
import { filterContentsByOffice } from "contentful/utils";
import { selectCurrentOffice } from "redux/app/selectors";
import { getCopy } from "static/copy";

import Layout from "components/Layout";
import ClientHero from "components/ClientHero";
import ClientGrid from "components/ClientGrid";
import Seo from "components/Seo";

const Works = ({ content, works, locale, navMenus, global, footer }) => {
  const currentOffice = useSelector(selectCurrentOffice);
  const [officeClients, setOfficeClients] = useState([]);
  const [pageContent, setPageContent] = useState({});
  const localizedCopy = getCopy(locale);

  const storePageContent = () => {
    if (!content) return;
    if (content.items.length === 0) {
      //page slug was not found
      router.replace('/404');
      return;
    }
    setPageContent(content.items[0].fields);
  }

  useEffect(() => {
    storePageContent();

    const filtered = filterContentsByOffice(works, currentOffice);
    setOfficeClients(filtered);
  }, [content, works, currentOffice])

  return (
    <>
      <Seo title={pageContent?.ogTitle} description={pageContent?.ogDescription} image={pageContent?.ogImage} />
      <Layout title={`Gut | ${localizedCopy.works}`} navMenus={navMenus} locale={locale} global={global} footer={footer}>
        <ClientHero eyebrow={localizedCopy.worksEyebrow} title={localizedCopy.works} />
        <ClientGrid officeClients={officeClients} path="works" />
      </Layout>
    </>
  );
};

export async function getStaticProps({ preview = false, locale }) {
  const singlePageSlug = 'works';
  const content = await fetchContentByField(preview, 'singlePage', 'slug', singlePageSlug, locale);
  const works = await getWorks(preview, locale);
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);

  return {
    props: { content, works, navMenus, locale, global, footer },
    revalidate: 1
  };
}

export default Works;