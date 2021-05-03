import { getNavMenus, getGlobal, getFooter } from "contentful/api";
import Link from 'next/link';

import Layout from "components/Layout";

const Custom404 = ({ locale, navMenus, global, footer }) => {
  return (
    <Layout title="Gut | 404" navMenus={navMenus} locale={locale} global={global} footer={footer}>
      <div className="error">
        <div className="error__wrapper">
          <div className="error__wrapper-eyebrow">
            <div className="error__wrapper-eyebrow-content">
              <span>page not found</span>
            </div>
          </div>
          <div className="error__wrapper-content">
            <p>The page you're looking for does not exist.</p>
            <div className="error__wrapper-content-back">
              <Link href="/">
                <div>
                  <img src="/assets/images/back.svg" alt="" />
                  <span>Homepage</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="error__wrapper-image">
            <img src="/assets/images/404.svg" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false, locale }) => {
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);

  return {
    props: { navMenus, locale, global, footer },
    revalidate: 1
  };
};

export default Custom404;
