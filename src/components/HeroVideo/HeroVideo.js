
import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from 'react-intersection-observer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { useSelector } from "react-redux";
import { selectActiveHomeSlide, selectHomeSlideAutoPlay } from "redux/app/selectors";
import { Actions as AppActions } from "redux/app/actions";
import { selectDeviceInfo } from "redux/system/selectors";
import { extractMediaAssetSrc } from "contentful/utils";
import { config } from "static/config";

const HeroVideo = ({ content, className, slideIdx, isSlide = false, nextSlide = () => { } }) => {
  const playerRef = useRef(null);
  const activeHomeSlide = useSelector(selectActiveHomeSlide);
  const deviceInfo = useSelector(selectDeviceInfo);
  const [isPlaying, setIsPlaying] = useState(false);

  const { fields } = content;

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const fetchVideoSrc = useCallback(
    () => {
      const isMobile = deviceInfo.layout === config.breakpoints.mobile.key;

      if (!fields.videoUrlDesktop) {
        const assetField = isMobile ? fields.videoMobile : fields.videoDesktop;
        return extractMediaAssetSrc(assetField);
      }
      if (fields.videoUrlDesktop) {
        const assetField = isMobile ? fields.videoUrlMobile : fields.videoUrlDesktop;
        return assetField;
      }
      console.log("Missing video asset / url");
      return "";
    },
    [deviceInfo],
  )

  const onPlayerReady = () => {
    setIsPlaying(true);
  }

  const onVideoEnded = () => {
    nextSlide();
  }

  useEffect(() => {
    const shouldPlay = slideIdx === activeHomeSlide ? true : false;
    if (shouldPlay !== isPlaying) {
      setIsPlaying(shouldPlay);
    }

  }, [slideIdx, activeHomeSlide])



  return (
    <div className="keen-slider__slide">
      <Link href={`/work/${fields.slug}`}>
        <div className={`hero-video ${inView ? 'hero-video--load' : ''}`}>
          <div className="hero-video__wrapper" ref={ref}>
            <div className="hero-video__wrapper-eyebrow">
              <div className="hero-video__wrapper-eyebrow-content">
                {fields.eyebrow && <span>{fields.eyebrow}</span>}
              </div>
            </div>
            {fields.subtitle &&
              <div className="hero-video__wrapper-title">
                {documentToReactComponents(fields.subtitle)}
              </div>
            }
            <div className="hero-video__wrapper-image">
              <ReactPlayer
                ref={playerRef}
                className='react-player'
                url={fetchVideoSrc()}
                width='100%'
                height='100%'
                muted
                loop={false}
                playsinline={true}
                onReady={onPlayerReady}
                onEnded={onVideoEnded}
                playing={isPlaying}
              />
              <div className="hero-video__wrapper-image-col hero-video__wrapper-image-col--1"></div>
              <div className="hero-video__wrapper-image-col hero-video__wrapper-image-col--2"></div>
              <div className="hero-video__wrapper-image-col hero-video__wrapper-image-col--3"></div>
            </div>
            <div className="hero-video__wrapper-extra">
              {fields.brands && fields.brands.length &&
                <div className="hero-video__wrapper-extra-brands">
                  {fields.brands.map((img, index) =>
                    <img key={index} src={img.fields.file.url} alt="" />
                  )}
                </div>
              }
              {fields.office &&
                <div className="hero-video__wrapper-extra-office">
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

export default HeroVideo;
