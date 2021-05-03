import { createClient } from "contentful";

/**
 * Contentful API methods.
 * docs: https://www.contentful.com/developers/docs/references/content-delivery-api/
 */

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});

const getContentfulClient = (preview) => (preview ? previewClient : client);

export async function getHomeSlides(preview, locale) {
  const client = getContentfulClient(preview);
  const entries = await client.getEntries({
    content_type: "homeSlide",
    order: 'fields.order',
    locale: locale || 'en-US',
  });
  return entries;
}

export async function fetchContentByField(preview, contentType, fieldId, query, locale) {
  const client = getContentfulClient(preview);

  // const q = {
  //   content_type: contentType,
  //   order: 'sys.createdAt',
  //   locale: locale || 'en-US',
  //   [`fields.${fieldId}[match]`]: query,
  // };

  const entries = await client.getEntries({
    content_type: contentType,
    order: 'sys.createdAt',
    locale: locale || 'en-US',
    resolveLinks: true,
    include: 3,
    [`fields.${fieldId}[match]`]: query,
  });
  return entries;
}

export async function getOfficeClients(preview, locale) {
  const client = getContentfulClient(preview);

  const entries = await client.getEntries({
    content_type: "client",
    order: 'fields.order',
    locale: locale || 'en-US'
  });
  return entries;
}

export async function getWorks(preview, locale) {
  const client = getContentfulClient(preview);

  const entries = await client.getEntries({
    content_type: "project",
    order: 'fields.order',
    locale: locale || 'en-US'
  });
  return entries;
}

export async function getNavMenus(preview, locale) {
  const client = getContentfulClient(preview);

  const entries = await client.getEntries({
    content_type: "navMenu",
    order: 'fields.order',
    locale: locale || 'en-US',
    resolveLinks: true,
    include: 2,
  });
  return entries;
}

export async function getGlobal(preview, locale) {
  const client = getContentfulClient(preview);

  const entries = await client.getEntries({
    content_type: "global",
    order: 'sys.createdAt',
    locale: locale || 'en-US',
    resolveLinks: true,
    include: 2,
  });
  return entries;
}

export async function getFooter(preview, locale) {
  const client = getContentfulClient(preview);

  const entries = await client.getEntries({
    content_type: "footer",
    order: 'sys.createdAt',
    locale: locale || 'en-US',
    resolveLinks: true,
  });
  return entries;
}

// export async function getAboutPageContent(preview, locale) {
//   const client = getContentfulClient(preview);
//   const entries = await client.getEntries({
//     content_type: "homeSlide", // REPLACE WITH PROPER CONTENT TYPE
//     order: 'fields.order',
//     locale: locale || 'en-US',
//   });
//   return entries;
// }

// export async function getCulturePageContent(preview, locale) {
//   const client = getContentfulClient(preview);
//   const entries = await client.getEntries({
//     content_type: "homeSlide", // REPLACE WITH PROPER CONTENT TYPE
//     order: 'fields.order',
//     locale: locale || 'en-US',
//   });
//   return entries;
// }

// export async function getContactUsPageContent(preview, locale) {
//   const client = getContentfulClient(preview);
//   const entries = await client.getEntries({
//     content_type: "homeSlide", // REPLACE WITH PROPER CONTENT TYPE
//     order: 'fields.order',
//     locale: locale || 'en-US',
//   });
//   return entries;
// }

// export async function getPrivacyPolicyPageContent(preview, locale) {
//   const client = getContentfulClient(preview);
//   const entries = await client.getEntries({
//     content_type: "homeSlide", // REPLACE WITH PROPER CONTENT TYPE
//     order: 'fields.order',
//     locale: locale || 'en-US',
//   });
//   return entries;
// }

export async function getCurrentOfficeId() {
  const client = getContentfulClient(preview);
  const entries = await client.getEntries({
    content_type: "office",
  });
  return entries;
}

export async function getLocales(preview) {
  const client = getContentfulClient(preview);
  const locales = await client.getLocales();
  return locales.items.map(l => ({ 'code': l.code }));
}