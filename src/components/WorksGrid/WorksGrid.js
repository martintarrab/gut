import { extractMediaAssetSrc } from "contentful/utils";
import Link from 'next/link';

const WorksGrid = ({ officeClients, path }) => {
  let articleNumber = 0;

  return (
    <div className="works-grid">
      { officeClients.map(client => {
        articleNumber++;
        articleNumber == 5 ? articleNumber = 1 : articleNumber;

        return (
          <div className={'works-grid-article works-grid-article--' + articleNumber} key={client.fields.slug}>
            <Link href={`/${path}/${client.fields.slug}`}>
              <img src={extractMediaAssetSrc(client.fields.mainImageDesktop)} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default WorksGrid;
