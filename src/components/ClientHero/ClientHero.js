const ClientHero = ({ eyebrow, title }) => {
  const arrowDown = (
    <svg width="48" height="60" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M2.14089e-06 38.2923L24 60L48 38.2923L43.6444 33.6035L27.1111 48.7988L27.1111 -9.13082e-07L20.8889 -1.18506e-06L20.8889 48.7988L4.35556 33.6035L2.14089e-06 38.2923Z" fill="white" />
    </svg>
  )

  return (
    <section className="client-hero">
      <div className="client-hero__wrapper">
        <div className="client-hero__who">
          <p>{eyebrow}</p>
        </div>
        <div className="client-hero-content">
          {/* {documentToReactComponents(fields.description)} */}
          <p>GUT is an independent creative agency founded by Anselmo Ramos and Gaston Bigio in 2018, with offices in Miami, São Paulo and Buenos Aires.</p>
        </div>
      </div>
    </section>
  )
}

export default ClientHero;
