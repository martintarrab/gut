import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { isContentFromCurrentOffice } from "contentful/utils";
import { selectCurrentOffice } from "redux/app/selectors";
import { fetchContentByField, getNavMenus, getGlobal, getFooter } from "contentful/api";
import PageModulesRenderer from "components/PageModulesRenderer";

const Client = ({ client, locale, navMenus, global, footer }) => {
  const router = useRouter();
  const [clientContent, setClientContent] = useState({});
  const currentOffice = useSelector(selectCurrentOffice);

  const storeClientInfo = () => {
    if (!client || !currentOffice) return;
    if (client.items.length === 0) {
      //Client slug was not found
      router.replace('/404');
      return;
    }
    if (!isContentFromCurrentOffice(client.items[0].fields, currentOffice)) {
      // Client exists, but is not enabled for this office.
      router.replace('/404');
      return;
    }
    const clientContent = client.items[0].fields;
    setClientContent(clientContent);
  }

  useEffect(() => {
    storeClientInfo();
  }, [client, currentOffice])


  return (
    <>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
          <>
            <PageModulesRenderer data={clientContent} navMenus={navMenus} locale={locale} global={global} footer={footer} />
          </>
        )}
    </>
  );
};

export default Client;

export const getStaticProps = async ({ preview = false, locale, params }) => {
  const { client } = params;
  const clientContent = await fetchContentByField(preview, 'project', 'slug', client, locale);
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);

  return {
    props: { client: clientContent, navMenus, locale, global, footer },
    revalidate: 1
  };
};

export const getStaticPaths = async () => {
  // builds: localhost:3000/portfolio/popeye and localhost:3000/portfolio/other
  // fallback: true, means it'll dynamically generate non explicit paths and store them locally.
  // fallback: false, means it'll only generate explicit paths. All others go to 404.
  return {
    paths: [
      { params: { client: "popeye" }, locale: 'en-US' },
      { params: { client: "popeye" }, locale: 'es' },
      { params: { client: "popeye" }, locale: 'pt' },
      { params: { client: "other" } }],
    fallback: true,
  };
};
