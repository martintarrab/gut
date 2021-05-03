import { useState } from "react";

const NavItem = ({ subItems, label }) => {
  const [showItems, setShowItems] = useState();

  return (
    <div className="hd__content-nav-list" onMouseEnter={() => setShowItems(true)} onMouseLeave={() => setShowItems(false)}>
      <div className="hd__content-nav-list-title"><a href="#">{label}</a></div>
      <div className={`hd__content-nav-list-item ${showItems ? 'hd__content-nav-list-item--show' : ''}`}>
        {subItems}
      </div>
    </div>
  )
}

export default NavItem;