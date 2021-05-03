import { useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Tab = ({ content }) => {
  const { fields } = content;
  const [toogle, setToogle] = useState(false);

  const toogleTab = () => {
    setToogle(!toogle);
  }

  return (
    <section className={`tab ${toogle ? 'tab--show' : ''}`}>
      <div className="tab__wrapper">
        <a onClick={toogleTab} className="tab__wrapper-title">
          <h1 className="tab__wrapper-title-text">{fields.title}</h1>
          <div className="tab__wrapper-title-icon">
            <img src={`/assets/images/${toogle ? '-' : '+'}.svg`} alt="Toogle tab" />
          </div>
        </a>
        <div className="tab__wrapper-content">
          <div className="tab__wrapper-content-text">
            {documentToReactComponents(fields.description)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tab;
