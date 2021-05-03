import { extractMediaAssetSrc } from "contentful/utils";

const HeroCulture = ({ content }) => {
  const { fields } = content;

  const arrowDown = (
    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M2.14089e-06 38.2923L24 60L48 38.2923L43.6444 33.6035L27.1111 48.7988L27.1111 -9.13082e-07L20.8889 -1.18506e-06L20.8889 48.7988L4.35556 33.6035L2.14089e-06 38.2923Z" fill="white" />
    </svg>
  )

  return (
    <section className="culture-hero">
      <div className="culture-hero__wrapper">
        <div className="culture-hero__who">
          <p>{fields.eyebrow}</p>
          {arrowDown}
        </div>
        <div className="culture-hero__title">
          <h1><span>GUTSY</span><span>— {fields.title}</span></h1>
        </div>
      </div>
      <div className="culture-hero__image">
        <img src={extractMediaAssetSrc(fields.image)} alt="" className="lg" />
        <img src={extractMediaAssetSrc(fields.imageSmall)} alt="" className="sm" />
      </div>
    </section>
  )
}

export default HeroCulture;