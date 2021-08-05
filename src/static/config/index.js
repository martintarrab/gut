const config = {
  version: "0.1.0",
  assetsBaseUrl: "https://s3.bucketUrl",
  defaultOffices: {
    es: 'ba',
    pt: 'sp',
    'en-US': 'mia',
  },
  pageModules: {
    heroAbout: "heroAbout",
    heroDetail: "heroDetail",
    heroImage: "heroImage",
    heroVideo: "heroVideo",
    heroQuote: "heroQuote",
    heroMeet: "heroMeet",
    heroCulture: "heroCulture",
    heroLegal: "heroLegal",
    heroContact: "heroContact",
    quote: "quote",
    people: "people",
    office: "office",
    team: "team",
    text: "text",
    tab: "tab",
    initiative: "initiative",
    careers: "careers",
    oneImageLayout: "oneImageLayout",
    twoImageLayout: "twoImageLayout",
    threeImageLayout: "threeImageLayout",
    xRay: "xRay",
    press: "press",
    offices: "offices"
  },
  breakpoints: {
    mobile: {
      width: 768,
      key: 'mobile'
    },
    desktop: {
      width: 'full',
      key: 'desktop'
    }
  },
  homeSlide: {
    autoPlay: 10000,
  }
};

export { config };
