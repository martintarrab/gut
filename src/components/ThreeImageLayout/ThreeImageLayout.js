import { extractMediaAssetSrc } from "contentful/utils";

const block = "three-image-layout";
const ThreeImageLayout = ({ content }) => {
  const { fields } = content;

  return (
    <section className="three-images">
      <div className="three-images__col">
        <img src={extractMediaAssetSrc(fields.imageA)} alt={fields.imageAAlt} />
      </div>
      <div className="three-images__col">
        <img src={extractMediaAssetSrc(fields.imageB)} alt={fields.imageBAlt} />
      </div>
      <div className="three-images__col">
        <img src={extractMediaAssetSrc(fields.imageC)} alt={fields.imageCAlt} />
      </div>
    </section>
  )
}

export default ThreeImageLayout;