import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroLegal = ({ content }) => {
  const { fields } = content;

  return (
    <section className="legal-hero">
      <div className="legal-hero__wrapper">
        <div className="legal-hero__who">
          <p>{fields.eyebrow}</p>
        </div>
        <div className="legal-hero__title">
          <h1>{documentToReactComponents(fields.subtitle)}</h1>
        </div>
      </div>
      <div className={`legal-hero__description ${fields.descriptionLarge ? 'legal-hero__description--large' : ''}`}>
        {documentToReactComponents(fields.description)}
      </div>
    </section>
  )
}

export default HeroLegal;