import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroQuote = ({ content }) => {
  const { fields } = content;

  return (
    <div className="keen-slider__slide">
      <div className="hero-quote">
        <div className="hero-quote__wrapper">
          <div className="hero-quote__wrapper-eyebrow">
            <div className="hero-quote__wrapper-eyebrow-content">
              {fields.eyebrow && <span>{fields.eyebrow}</span>}
            </div>
          </div>
          <div className="hero-quote__wrapper-description">
            {documentToReactComponents(fields.description)}
          </div>
          <div className="hero-quote__wrapper-extra">
            <p>{fields.author}</p>
            {fields.office && <span>{fields.office}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroQuote;