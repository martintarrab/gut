import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroQuote = ({ content }) => {
  const { fields: { eyebrow, description, author, office} } = content;

  return (
    <div className="keen-slider__slide">
      <div className="hero-quote">
        <div className="hero-quote__wrapper">
          <div className="hero-quote__wrapper-eyebrow">
            <div className="hero-quote__wrapper-eyebrow-content">
              {eyebrow && <span>{eyebrow}</span>}
            </div>
          </div>
          <div className="hero-quote__wrapper-description">
            {documentToReactComponents(description)}
          </div>
          <div className="hero-quote__wrapper-extra">
            {author && <p>{author}</p>}
            {office && <span>{office}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroQuote;
