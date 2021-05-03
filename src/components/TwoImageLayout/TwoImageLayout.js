import { extractMediaAssetSrc } from "contentful/utils";

const block = "two-image-layout";
const TwoImageLayout = ({ content }) => {
  const { fields } = content;

  return (
    <div className={`two-images ${fields.bottomSpace ? 'two-images--space' : ''}`}>
      <div className="two-images__col">
        <img src={extractMediaAssetSrc(fields.imageA)} alt={fields.imageAAlt} />
      </div>
      <div className="two-images__col">
        <img src={extractMediaAssetSrc(fields.imageB)} alt={fields.imageBAlt} />
      </div>
    </div>
  )
}

export default TwoImageLayout;