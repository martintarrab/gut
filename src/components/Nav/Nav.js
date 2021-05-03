import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseNavMenus } from "contentful/utils";
import NavItem from "components/NavItem";
import NavLang from "components/NavLang";

const Nav = ({ navMenus, locale }) => {
  const parsedMenuItems = parseNavMenus(navMenus);
  const router = useRouter();

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
      {renderMenuItems(parsedMenuItems)}
      <NavLang locale={locale} />
    </div>
  );
};

export default memo(Nav);

