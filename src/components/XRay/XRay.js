import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const XRay = ({ content }) => {
  const { fields } = content;

  return (
    <section className="xray-hero">
      <div className="xray-hero__icon">
        <img src="/assets/images/x-ray.svg" alt="" />
      </div>
      <div className="xray-hero__wrapper">
        <div className="xray-hero__who">
          <p>{fields.eyebrow}</p>
        </div>
        <div className="xray-hero__title">
          <h1>GUT<br /><span>{fields.title}</span></h1>
        </div>
      </div>
      <div className="xray-hero__content">
        {documentToReactComponents(fields.description)}
        <div className="xray-hero__content-download">
          <a href={fields.downloadLink} target="_blank">{fields.downloadCta}</a>
        </div>
      </div>
    </section >
  )
}

export default XRay;