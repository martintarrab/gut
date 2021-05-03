import { extractMediaAssetSrc } from "contentful/utils";

const Member = ({ content }) => {
  const { name, rol, description, image } = content;

  return (
    
    <article className="member">
      <div className="member__wrapper">
        <div className="member__wrapper-image">
          {image && <img src={extractMediaAssetSrc(image)} alt="" />}
        </div>
        <div className="member__wrapper-data">
          {name && <h2>{name}</h2>}
          <span>{rol}</span>
          {description && <p>{description}</p>}
        </div>
      </div>
    </article>
  )
}

export default Member;