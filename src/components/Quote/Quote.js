const block = "quote";

const Quote = ({ content }) => {
  const { fields } = content;

  return (
    <section className="quote">
      <p className="quote__description">{fields.quote}</p>
      <div className="quote__author">
        <div className="quote__author-image">
          <img src="/assets/images/quote.svg" />
        </div>
        <div className="quote__author-data">
          <p className="quote__author-name">{fields.author}</p>
          <span className="quote__author-role">{fields.authorRole}</span>
        </div>
      </div>
    </section>
  )
}

export default Quote;