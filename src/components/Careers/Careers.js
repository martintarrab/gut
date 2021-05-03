import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Careers = ({ content }) => {
  const { fields } = content;

  return (
    <section className="careers">
      <div className="careers__wrapper">
        <h2 className="careers__wrapper-title">{fields.title}</h2>
        <div className="careers__wrapper-description">
          {documentToReactComponents(fields.description)}
        </div>
        <div className="careers__wrapper-offices">
          {fields.offices.map((office, idx) =>
            <div key={idx} className="careers__wrapper-offices-item">
              <h3>{office.fields.officeName}</h3>
              <p><a href={`mailto:${office.fields.careerContact}`}>{office.fields.careerContact}</a></p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Careers;