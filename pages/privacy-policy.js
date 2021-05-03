import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchContentByField, getNavMenus, getGlobal, getFooter } from "contentful/api";
import PageModulesRenderer from "components/PageModulesRenderer";
import Seo from "components/Seo";

const PrivacyPolicy = ({ content, locale, navMenus, global, footer }) => {
  const router = useRouter();
  const [pageContent, setPageContent] = useState({});

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
  }, [content])


  return (
    <>
      <Seo title={pageContent?.ogTitle} description={pageContent?.ogDescription} image={pageContent?.ogImage} />
      <PageModulesRenderer data={pageContent} navMenus={navMenus} locale={locale} global={global} footer={footer} />
    </>
  );
};

export default PrivacyPolicy;

export const getStaticProps = async ({ preview = false, locale }) => {
  const singlePageSlug = 'privacy-policy';
  const content = await fetchContentByField(preview, 'singlePage', 'slug', singlePageSlug, locale);
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);
  return {
    props: { content, navMenus, locale, global, footer },
    revalidate: 1
  };
};

