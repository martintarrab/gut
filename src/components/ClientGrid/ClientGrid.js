import { extractMediaAssetSrc } from "contentful/utils";
import Link from 'next/link';

const ClientGrid = ({ officeClients, path }) => {
  let articleNumber = 0;

  return (
    <div className="client-grid">
      { officeClients.map(client => {
        articleNumber++;
        articleNumber == 5 ? articleNumber = 1 : articleNumber;

        return (
          <div className={'client-grid-article client-grid-article--' + articleNumber} key={client.fields.slug}>
            <Link href={`/${path}/${client.fields.slug}`}>
              <img src={extractMediaAssetSrc(client.fields.mainImageDesktop)} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ClientGrid;