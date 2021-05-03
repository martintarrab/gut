import Layout from "components/Layout";
import PageModule from "components/PageModule";

const PageModulesRenderer = ({ data, navMenus, locale, global, footer }) => {
  const renderPageModules = () => {
    if (!data || !data.pageModules) return <></>;
    return data.pageModules.map((m, idx) => {
      const moduleId = m.sys.contentType.sys.id;
      return <PageModule moduleId={moduleId} content={m} key={`${m.sys.id}-${idx}`} locale={locale} />
    })
  }

  return (
    <Layout title={data.title && `Gut | ${data.title}`} navMenus={navMenus} locale={locale} global={global} footer={footer}>
      {renderPageModules()}
    </Layout>
  )
}

export default PageModulesRenderer;