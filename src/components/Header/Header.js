import { useMemo, useState } from "react";
import Link from "next/link";
import Nav from 'components/Nav/Nav';
import Clock from "components/Clock";
import Menu from "components/Menu";

const Header = ({ navMenus, locale, global }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const hamb = (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3568 16.5484V30H16.6432V16.5484H30V13.4516H16.6432V0H13.3568V13.4516H0V16.5484H13.3568Z" fill="white" />
    </svg>
  )

  const marquee = useMemo(() => {
    const data = global.items[0].fields.marquee;

    return (
      <div className="hd__bar">
        <marquee className="hd__bar-text" width="100%" direction="left" scrollamount="5" dangerouslySetInnerHTML={{ __html: data }}></marquee>
      </div>
    )
  })

  return (
    <>
      <header className="hd">
        {marquee}
        <div className="hd__content">
          <div className="hd__content-lg">
            <Link href="/">
              <a aria-label="Gut">
                <img src="/assets/images/lg.svg" alt="" className="lg" />
                <img src="/assets/images/lg-small.svg" alt="" className="sm" />
              </a>
            </Link>
          </div>
          <div className="hd__content-offices">
            <Clock />
          </div>
          <Nav navMenus={navMenus} locale={locale} />
          <div className={`hd__content-hamb ${modalOpen ? 'hd__content-hamb--open' : ''}`}>
            <a aria-label="Open menu" onClick={() => setModalOpen(!modalOpen)}>
              {hamb}
            </a>
          </div>
        </div>
      </header>
      <Menu navMenus={navMenus} locale={locale} isModalOpen={modalOpen} />
    </>
  );
};

export default Header;
