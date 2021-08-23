import { useInView } from 'react-intersection-observer';
import { extractMediaAssetSrc } from "contentful/utils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

const HeroImage = ({ content }) => {
  const { fields } = content;

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="keen-slider__slide">
      <Link href={`/work/${fields.slug}`}>
        <div className={`hero-image ${inView ? 'hero-image--load' : ''}`}>
          <div className="hero-image__wrapper" ref={ref}>
            <div className="hero-image__wrapper-eyebrow">
              <div className="hero-image__wrapper-eyebrow-content">
                {fields.eyebrow && <span>{fields.eyebrow}</span>}
              </div>
            </div>
            {fields.subtitle &&
              <div className="hero-image__wrapper-title">
                {documentToReactComponents(fields.subtitle)}
              </div>
            }
            <div className="hero-image__wrapper-image">
              <img src={extractMediaAssetSrc(fields.imageDesktop)} alt={fields.imageAlt} />
              <div className="hero-image__wrapper-image-col hero-image__wrapper-image-col--1"></div>
              <div className="hero-image__wrapper-image-col hero-image__wrapper-image-col--2"></div>
              <div className="hero-image__wrapper-image-col hero-image__wrapper-image-col--3"></div>
            </div>
            <div className="hero-image__wrapper-extra">
              {fields.brands && fields.brands.length &&
                <div className="hero-image__wrapper-extra-brands">
                  {fields.brands.map((img, index) =>
                    <img key={index} src={img.fields.file.url} alt="" />
                  )}
                </div>
              }
              {fields.office &&
                <div className="hero-image__wrapper-extra-office">
                  <span>{fields.office}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HeroImage;
