import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Text = ({ content }) => {
  const { fields } = content;

  return (
    <section className="text">
      <div className="text__wrapper">
        <div className="text__wrapper-title">
          {documentToReactComponents(fields.title)}
        </div>
        <div className="text__wrapper-description">
          {documentToReactComponents(fields.description)}
        </div>
      </div>
    </section>
  )
}

export default Text;