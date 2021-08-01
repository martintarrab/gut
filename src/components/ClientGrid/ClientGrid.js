import { extractMediaAssetSrc } from "contentful/utils";
import { Visible } from 'react-grid-system';

const ClientGrid = ({ officeClients, path }) => {
  let articleNumber = 0;

  return (
    <div className="client-grid">
      <div className="client-grid__wrapper">
        { officeClients.map(client => {
          articleNumber++;
          articleNumber == 5 ? articleNumber = 1 : articleNumber;

          return (
            <div className={'client-grid-article client-grid-article--' + articleNumber} key={client.fields.slug}>
              <Visible xs sm>
                <img src={extractMediaAssetSrc(client.fields.mainImageMobile)} />
              </Visible>
              <Visible md lg xl xxl>
                <img src={extractMediaAssetSrc(client.fields.mainImageDesktop)} />
              </Visible>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientGrid;
