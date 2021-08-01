import Link from "next/link";
import { useRouter } from "next/router";
import { parseNavMenus } from "contentful/utils";
import { useSelector, useDispatch } from "react-redux";
import { Actions as AppActions } from "redux/app/actions";
import { selectCurrentOffice } from "redux/app/selectors";
import { getCopy } from "static/copy";
import { useCookies } from "react-cookie";

const Menu = ({ navMenus, locale, isModalOpen }) => {
  const dispatch = useDispatch();
  const currentOffice = useSelector(selectCurrentOffice);
  const [cookies, setCookie] = useCookies(["office"]);

  const localizedCopy = getCopy(locale);

  const parsedMenuItems = parseNavMenus(navMenus);
  const router = useRouter();

  const setOffice = (officeId) => {
    dispatch(AppActions.setCurrentOffice(officeId));
    setCookie("office", officeId, { path: "/" });
  }

  const generateLinkElement = (item, key, locale) => (
    <Link href={`/${item.target}`} key={key} locale={locale}>
      <a className={router.pathname == '/' + item.target ? 'active' : ''}>{item.label}</a>
    </Link>
  )

  const renderMenuItems = (items) => {
    return items.map((item, idx) => {
      if (Array.isArray(item.subMenu)) {
        const subItems = item.subMenu.map((subItem, subIdx) => generateLinkElement(subItem, `${subItem.label}-${subIdx}`, locale))

        return (
          <div className="menu-list" key={`${item.label}-${idx}`}>
            <div className="menu-list-title"><a href="#">{item.label}</a></div>
            <div className="menu-list-item">
              {subItems}
            </div>
          </div>
        )
      } else {
        return generateLinkElement(item, `${item.label}-${idx}`, locale)
      }
    })
  }

  return (
    <section className={`menu ${isModalOpen ? 'menu--open' : ''}`}>
      <div className="menu__wrapper">
        <div className="menu__wrapper__offices">
          <h3 className="menu__wrapper__offices__title">{localizedCopy.office}</h3>
          <div className="menu__wrapper__offices__list">
            <a className={currentOffice == 'ba' ? 'active' : ''} onClick={() => { setOffice('ba') }}><span>BA</span></a><span>/</span>
            <a className={currentOffice == 'sp' ? 'active' : ''} onClick={() => { setOffice('sp') }}><span>SP</span></a><span>/</span>
            <a className={currentOffice == 'mia' ? 'active' : ''} onClick={() => { setOffice('mia') }}><span>MIA</span></a><span>/</span>
            <a className={currentOffice == 'tor' ? 'active' : ''} onClick={() => { setOffice('tor') }}><span>TOR</span></a><span>/</span>
            <a className={currentOffice == 'mx' ? 'active' : ''} onClick={() => { setOffice('mx') }}><span>MEX</span></a>
          </div>
        </div>
        {renderMenuItems(parsedMenuItems)}
        <div className="menu__wrapper__offices">
          <h3 className="menu__wrapper__offices__title">{localizedCopy.lang}</h3>
          <div className="menu__wrapper__offices__list">
            <a href="/" className={locale == 'en-US' ? 'active' : ''}><span>EN</span></a><span>/</span>
            <a href="/es" className={locale == 'es' ? 'active' : ''}><span>ES</span></a><span>/</span>
            <a href="/pt" className={locale == 'pt' ? 'active' : ''}><span>PT</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu;
