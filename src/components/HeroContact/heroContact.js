import { extractMediaAssetSrc } from "contentful/utils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroContact = ({ content }) => {
  const { fields } = content;

  return (
    <section className="hero-contact">
      <div className="hero-contact__wrapper">
        <div className="hero-contact__wrapper-eyebrow">
          <div className="hero-contact__wrapper-eyebrow-content">
            <span>{fields.eyebrow}</span>
          </div>
        </div>
        <div className="hero-contact__wrapper-content">
          {documentToReactComponents(fields.description)}
        </div>
      </div>
      <div className="hero-contact__offices">
        {fields.offices.map((office, idx) =>
          <div key={idx} className="hero-contact__offices-wrapper">
            <div className="hero-contact__offices-wrapper-title">
              <h2>{office.fields.officeName}</h2>
            </div>
            <div className="hero-contact__offices-wrapper-list">
              {office.fields.officeContacts.map((contact, idx) =>
                <div key={idx} className="hero-contact__offices-wrapper-list-card">
                  <h3>{contact.fields.name}</h3>
                  <p>{contact.fields.rol}</p>
                  <p><a href={`mailto:${contact.fields.email}`}>{contact.fields.email}</a></p>
                  <p><a href={`tel:${contact.fields.phone}`}>{contact.fields.phone}</a></p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="hero-contact__image">
        <img src={extractMediaAssetSrc(fields.image)} alt="" className="lg" />
        <img src={extractMediaAssetSrc(fields.imageSmall)} alt="" className="sm" />
      </div>
    </section>
  )
}

export default HeroContact;