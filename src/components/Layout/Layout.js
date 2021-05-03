import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ title, navMenus, locale, children, global, footer }) => {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="favicon.ico" />
        <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport" />
      </Head>
      <section className="layout">
        <Header navMenus={navMenus} locale={locale} global={global} />
        <main className="main">
          {children}
        </main>
        {footer.items.map((content, index) =>
          <Footer key={index} locale={locale} content={content} global={global} />
        )}
      </section>
    </section>
  )
}

export default Layout;