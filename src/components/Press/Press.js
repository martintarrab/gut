import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Press = ({ content }) => {
  const { fields } = content;

  return (
    <>
      {!fields.hideHeader &&
        <section className="press-hero">
          <div className="press-hero__wrapper">
            <div className="press-hero__who">
              <p>{fields.eyebrow}</p>
            </div>
            <div className="press-hero__title">
              <h1>{fields.title}</h1>
            </div>
          </div>
        </section>
      }
      <section className={`press-grid ${fields.hideHeader ? 'press-grid--hidden' : ''}`}>
        {fields.articles.map((article, idx) =>
          <article key={idx} className="press-article">
            <a href={article.fields.ctaUrl} target="_blank" role="no-refer">
              <h2 className="press-article__title">{article.fields.title}</h2>
              <div className="press-article__description">
                {documentToReactComponents(article.fields.description)}
              </div>
              <div className="press-article__link">
                <span>{article.fields.ctaText}</span>
              </div>
            </a>
          </article>
        )}
      </section>
    </>
  )
}

export default Press;