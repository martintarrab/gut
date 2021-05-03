import { extractMediaAssetSrc } from "contentful/utils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroAbout = ({ content }) => {
  const { fields } = content;

  return (
    <section className="hero-about">
      <div className="hero-about__wrapper">
        <div className="hero-about__wrapper-eyebrow">
          <div className="hero-about__wrapper-eyebrow-content">
            <span>{fields.eyebrow}</span>
          </div>
        </div>
        <div className="hero-about__wrapper-content">
          {documentToReactComponents(fields.description)}
        </div>
      </div>
      <div className="hero-about__image">
        <img src={extractMediaAssetSrc(fields.image)} alt="" className="lg" />
        <img src={extractMediaAssetSrc(fields.imageSmall)} alt="" className="sm" />
      </div>
    </section>
  )
}

export default HeroAbout;