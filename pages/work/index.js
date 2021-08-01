import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchContentByField, getWorks, getNavMenus, getGlobal, getFooter, getOfficeClients } from "contentful/api";
import { filterContentsByOffice } from "contentful/utils";
import { selectCurrentOffice } from "redux/app/selectors";
import { getCopy } from "static/copy";

import Layout from "components/Layout";
import WorksHero from "components/WorksHero";
import WorksGrid from "components/WorksGrid";
import Seo from "components/Seo";
import Filter from "components/Filter";

const Work = ({ content, works, locale, navMenus, global, footer, clients }) => {
  const router = useRouter();
  const currentOffice = useSelector(selectCurrentOffice);
  const [pageContent, setPageContent] = useState({});
  const [currentFilter, setCurrentFilter] = useState('');
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

  const handleFilterChange = (value) => {
    setCurrentFilter(value);
  }

  const getWorks = () => {
    if (!currentFilter) return filterContentsByOffice(works, currentOffice);
    const projects = clients.find((clients) => clients.fields.slug === currentFilter).fields.projects;
    if ('fields' in projects[0]) return projects;
    return [];
  }
  
  const getOptions = () => clients
    .map((client) => ({ label: client.fields.title, value: client.fields.slug }))
    .filter((client) => !client.title)

  useEffect(() => {
    storePageContent();
  }, [content, works, currentOffice])

  return (
    <>
      <Seo title={pageContent?.ogTitle} description={pageContent?.ogDescription} image={pageContent?.ogImage} />
      <Layout title={`Gut | ${localizedCopy.works}`} navMenus={navMenus} locale={locale} global={global} footer={footer}>
        <WorksHero eyebrow={localizedCopy.worksEyebrow} title={localizedCopy.works} />
        <div className="work-filter">
          <Filter options={getOptions()} onChange={handleFilterChange}/>
        </div>
        <WorksGrid officeClients={getWorks()} path="works" />
      </Layout>
    </>
  );
};

export async function getStaticProps({ preview = false, locale }) {
  const singlePageSlug = 'work';
  const content = await fetchContentByField(preview, 'singlePage', 'slug', singlePageSlug, locale);
  const works = await getWorks(preview, locale);
  const clients = await getOfficeClients(preview, locale);
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);

  return {
    props: { content, works, navMenus, locale, global, footer, clients: clients.items },
    revalidate: 1
  };
}

export default Work;
