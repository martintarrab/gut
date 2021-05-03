module.exports = {
    i18n: {
      locales: ['en-US', 'es', 'pt'],
      defaultLocale: 'en-US',
      localeDetection: false,
      domains: [
        {
          domain: 'gut.com',
          defaultLocale: 'en-US',
        },
        {
          domain: 'ba.gut.com',
          defaultLocale: 'es',
        },
        {
          domain: 'sp.gut.com',
          defaultLocale: 'pt',
        },
      ],
    }
}