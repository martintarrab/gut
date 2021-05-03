import { extractMediaAssetSrc } from "contentful/utils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const People = ({ content }) => {
  const { fields } = content;

  return (
    <section className="people">
      <div className="people__wrapper">
        <div className="people__wrapper-image">
          <img src={extractMediaAssetSrc(fields.image)} alt="" />
        </div>
        <div className="people__wrapper-text">
          {documentToReactComponents(fields.description)}
        </div>
      </div>

    </section>
  )
}

export default People;