import Head from 'next/head';
import { useRouter } from 'next/router'

const Seo = ({ title, description, image }) => {
  const router = useRouter()
  let imageUrl = image?.fields.file.url;

  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:site_name" content="GUT" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | GUT`} />
      <meta property="og:url" content={`//gut.agency${router.pathname}`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:title" content={`${title} | GUT`} />
      <meta name="twitter:url" content={`//gut.agency${router.pathname}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  )
}

export default Seo;