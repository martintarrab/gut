import { useInView } from 'react-intersection-observer';
import { extractMediaAssetSrc } from "contentful/utils";

const HeroMeet = ({ content }) => {
  const { fields } = content;

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="keen-slider__slide">
      <div className={`hero-meet ${inView ? 'hero-meet--load' : ''}`}>
        <div className="hero-meet__wrapper" ref={ref}>
          <div className="hero-meet__wrapper-eyebrow">
            <div className="hero-meet__wrapper-eyebrow-content">
              {fields.eyebrow && <span>{fields.eyebrow}</span>}
            </div>
          </div>
          <div className="hero-meet__wrapper-meet">
            <h1>{fields.meet}</h1>
          </div>
          <div className="hero-meet__wrapper-content">
            <h1 className="hero-meet__wrapper-content-title">{fields.name}</h1>
            <div className="hero-meet__wrapper-content-extra">
              <p>{fields.rol}</p>
              <span>{fields.office}</span>
            </div>
          </div>
          <div className="hero-meet__wrapper-icon">
            <img src="/assets/images/meet.png" alt="" />
          </div>
        </div>
        <div className="hero-meet__image">
          <img src={extractMediaAssetSrc(fields.image)} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroMeet;