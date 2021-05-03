import { useState } from "react";

const NavLang = ({ locale }) => {
  const [showItems, setShowItems] = useState();

  return (
    <div className="hd__content-nav-list hd__content-nav-list--lang" onMouseEnter={() => setShowItems(true)} onMouseLeave={() => setShowItems(false)}>
      <div className="hd__content-nav-list-title"><a href="#">{locale == 'en-US' ? 'en' : locale}</a></div>
      <div className={`hd__content-nav-list-item ${showItems ? 'hd__content-nav-list-item--show' : ''}`}>
        <a href="/" className={locale == 'en-US' ? 'active' : ''}>EN</a>
        <a href="/es" className={locale == 'es' ? 'active' : ''}>ES</a>
        <a href="/pt" className={locale == 'pt' ? 'active' : ''}>PT</a>
      </div>
    </div>
  )
}

export default NavLang;