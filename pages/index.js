import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterContentsByOffice } from "contentful/utils";
import { selectCurrentOffice } from "redux/app/selectors";
import Layout from "components/Layout";
import HomeSlide from "components/HomeSlide";
import { getGlobal, getHomeSlides, getNavMenus, getFooter } from "contentful/api";
import { getCopy } from "static/copy";

const block = "home";

export default function Home({ homeSlides, preview, locale, navMenus, global, footer }) {
  const currentOffice = useSelector(selectCurrentOffice);
  const [officeHomeSlides, setOfficeHomeSlides] = useState(null);
  const localizedCopy = getCopy(locale);

  useEffect(() => {
    const filtered = filterContentsByOffice(homeSlides, currentOffice);
    setOfficeHomeSlides(filtered);
  }, [homeSlides, currentOffice])

  return (
    <>
      <Layout title="Gut" navMenus={navMenus} locale={locale} global={global} footer={footer}>
        <HomeSlide data={officeHomeSlides} />
      </Layout>
    </>

  );
}

export async function getStaticProps({ preview = false, locale }) {
  const homeSlides = await getHomeSlides(preview, locale);
  const navMenus = await getNavMenus(preview, locale);
  const global = await getGlobal(preview, locale);
  const footer = await getFooter(preview, locale);

  return {
    props: { preview, homeSlides, navMenus, locale, global, footer },
    revalidate: 1
  };
}
