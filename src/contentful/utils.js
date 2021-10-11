export const filterContentsByOffice = (content, officeId) => {
  if (content && content.items) {
    return content.items.filter(entry => {
      const offices = entry.fields.activeOffices.map(office => office.fields.id);
      return offices.includes(officeId);
    });
  } else {
    return null;
  }
}

export const isContentFromCurrentOffice = (content, officeId) => {
  if (content.activeOffices && content.activeOffices.length > 0) {
    const hasOffice = content.activeOffices.filter(ao => ao.fields.id === officeId);
    let result = false;
    if (hasOffice.length > 0) {
      result = true;
    }
    return result;
  } else {
    return false;
  }
}

export const extractMediaAssetSrc = (imgField) => {
  return imgField?.fields?.file.url;
}


export const parseNavMenus = (navMenus) => {
  if (!navMenus.items || navMenus.items.length === 0) {
    return [];
  }
  const parsedMenu = navMenus.items.reduce((acc, navMenu) => {
    const newItem = {};
    newItem.label = navMenu.fields.label;
    if (navMenu.fields.singleLinkTarget) {
      newItem.target = navMenu.fields.singleLinkTarget.fields.slug
    } else {
      if (Array.isArray(navMenu.fields.subMenuLinks) && navMenu.fields.subMenuLinks.length > 0) {
        newItem.subMenu = [];
        navMenu.fields.subMenuLinks.forEach(item => {
          const submenu = {
            label: item.fields.label,
            target: item.fields.target.fields.slug
          }
          newItem.subMenu.push(submenu);
        });
      }
    }
    acc.push(newItem);
    return acc;
  }, [])

  return parsedMenu;
}
