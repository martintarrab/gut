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

  /**
   * Merges all client projects of current office into pageModules.
   * @param {Client} client 
   */
  const parseClientContent = (client) => {
    const fullClientPage = { ...client, pageModules: [] };
    if (!Array.isArray(client.projects)) {
      // There are no defined projects for the client
      console.error(`Client: ${client.slug} has no defined projects in contentful.`);
      return fullClientPage;
    }
    client.projects.forEach(p => {
      if (isContentFromCurrentOffice(p.fields, currentOffice)) {
        fullClientPage.pageModules.push(...p.fields.pageModules.filter(m => m.fields))
      }
    });
    return fullClientPage;
  }

  const storeClientInfo = () => {
    if (!client || !currentOffice) return;
    if (client.items.length === 0) {
      //Client slug was not found
      router.push('/404');
      return;
    }
    if (!isContentFromCurrentOffice(client.items[0].fields, currentOffice)) {
      // Client exists, but is not enabled for this office.
      router.push('/404');
      return;
    }
    const clientContent = parseClientContent(client.items[0].fields);
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
  const clientContent = await fetchContentByField(preview, 'client', 'slug', client, locale);
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
