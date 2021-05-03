import { extractMediaAssetSrc } from "contentful/utils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Initiative = ({ content }) => {
  const { fields } = content;

  return (
    <section className="initiative">
      <div className="initiative__wrapper">
        <div className="initiative__wrapper-image">
          <div className="initiative__wrapper-eyebrow">
            <span>{fields.eyebrow}</span>
          </div>
          <div className="initiative__wrapper-image-element">
            <img src={extractMediaAssetSrc(fields.image)} alt="" />
          </div>
        </div>
        <div className="initiative__wrapper-data">
          <div className="initiative__wrapper-eyebrow">
            <span>{fields.eyebrow}</span>
          </div>
          <h1 className="initiative__wrapper-data-title">
            {documentToReactComponents(fields.title)}
          </h1>
          <div className="initiative__wrapper-data-description">
            {documentToReactComponents(fields.description)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Initiative;