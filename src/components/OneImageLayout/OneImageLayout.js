import { extractMediaAssetSrc } from "contentful/utils";

const block = "two-image-layout";
const OneImageLayout = ({ content }) => {
  const { fields } = content;

  return (
    <div className="one-images">
      <div className="two-images__col">
        <img src={extractMediaAssetSrc(fields.imageA)} alt={fields.imageAAlt} />
      </div>
    </div>
  )
}

export default OneImageLayout;