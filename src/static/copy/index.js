export const copy = {
  textLabel: {
    'en-US': "English version",
    es: "Version en Espanol",
    pt: "Version en Portugues",
  },
  otherLabel: {
    'en-US': "English version",
    es: "Version en Espanol",
    pt: "Version en Portugues",
  },
  privacy: {
    'en-US': "Privacy Policy",
    es: "Política de privacidad",
    pt: "Política de Privacidade",
  },
  rights: {
    'en-US': "All rights reserved",
    es: "Todos los derechos reservados",
    pt: "Todos os direitos reservados",
  },
  initiatives: {
    'en-US': "initiatives",
    es: "iniciativas",
    pt: "iniciativas",
  },
  works: {
    'en-US': "work",
    es: "trabajos",
    pt: "trabalho",
  },
  worksEyebrow: {
    'en-US': "What We Do",
    es: "Con quien trabajamos",
    pt: "Com quem trabalhamos",
  },
  portfolio: {
    'en-US': "Clients",
    es: "Clientes",
    pt: "Clientes",
  },
  portfolioEyebrow: {
    'en-US': "Who we work with",
    es: "Con quien trabajamos",
    pt: "Com quem trabalhamos",
  },
  office: {
    'en-US': "Office",
    es: "Oficina",
    pt: "Escritório",
  },
  lang: {
    'en-US': "Language",
    es: "Idioma",
    pt: "Língua",
  }
}

export const getCopy = (lang) => {
  const localizedCopy = Object.keys(copy).reduce((acc, key) => {
    acc[key] = copy[key][lang];
    return acc;
  }, {});
  return localizedCopy;
}