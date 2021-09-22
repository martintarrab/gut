import { memo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseNavMenus } from "contentful/utils";
import NavItem from "components/NavItem";
import NavLang from "components/NavLang";
import { useSelector, useDispatch } from "react-redux";
import { Actions as AppActions } from "redux/app/actions";
import { selectCurrentOffice } from "redux/app/selectors";
import { getCopy } from "static/copy";
import { useCookies } from "react-cookie";

const Nav = ({ navMenus, locale }) => {
  const dispatch = useDispatch();
  const currentOffice = useSelector(selectCurrentOffice);
  const [cookies, setCookie] = useCookies(["office"]);
  const parsedMenuItems = parseNavMenus(navMenus);
  const router = useRouter();
  const localizedCopy = getCopy(locale);
  const [showItems, setShowItems] = useState();

  const setOffice = (officeId) => {
    dispatch(AppActions.setCurrentOffice(officeId));
    setCookie("office", officeId, { path: "/" });
  }

  const mapOffice = {
    BA: 'Buenos Aires',
    SP: 'Sao Paulo',
    MIA: 'Miami',
    TOR: 'Toronto',
    MEX: 'Mexico',
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
          <NavItem subItems={subItems} label={item.label} key={`${item.label}-${idx}`} />
        )
      } else {
        return generateLinkElement(item, `${item.label}-${idx}`, locale)
      }
    })
  }

  return (
    <div className="hd__content-nav">
      <div className="hd__content-nav-list" onMouseEnter={() => setShowItems(true)} onMouseLeave={() => setShowItems(false)}>
        <div className="hd__content-nav-list-title"><a>{localizedCopy.office}</a></div>
        <div className={`hd__content-nav-list-item ${showItems ? 'hd__content-nav-list-item--show' : ''}`}>
          <a className={currentOffice == 'ba' ? 'active' : ''} onClick={() => { setOffice('ba'); router.push('/'); }}><span>{mapOffice['BA']}</span></a>
          <a className={currentOffice == 'sp' ? 'active' : ''} onClick={() => { setOffice('sp'); router.push('/'); }}><span>{mapOffice['SP']}</span></a>
          <a className={currentOffice == 'mia' ? 'active' : ''} onClick={() => { setOffice('mia'); router.push('/'); }}><span>{mapOffice['MIA']}</span></a>
          <a className={currentOffice == 'tor' ? 'active' : ''} onClick={() => { setOffice('tor'); router.push('/'); }}><span>{mapOffice['TOR']}</span></a>
          <a className={currentOffice == 'mx' ? 'active' : ''} onClick={() => { setOffice('mx'); router.push('/'); }}><span>{mapOffice['MEX']}</span></a>
        </div>
      </div>
      {renderMenuItems(parsedMenuItems)}
      <NavLang locale={locale} />
    </div>
  );
};

export default memo(Nav);

