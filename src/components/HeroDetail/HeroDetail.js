import { useRef, useState } from "react";
import { extractMediaAssetSrc } from "contentful/utils";
import ReactPlayer from 'react-player';
import Link from "next/link";
import { useRouter } from 'next/router'

const HeroDetail = ({ content }) => {
  const { fields } = content;
  const router = useRouter()
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayerReady = () => {
    setIsPlaying(false);
  }

  const onVideoEnded = () => {
    //setIsPlaying(false);
  }

  const playVideo = () => {
    setIsPlaying(true);
  }

  const back = (
    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.42943 11C3.72873 9.72992 3.03804 8.6752 2.35736 7.83584C1.66667 7.00753 0.880881 6.24548 -4.77194e-07 5.5497L-4.68504e-07 5.4503C0.880881 4.75452 1.66667 3.98695 2.35736 3.14759C3.03804 2.31928 3.72873 1.27008 4.42943 4.6668e-07L5.37538 0.861447C4.24424 2.75 3.14314 4.11948 2.07207 4.96988C2.97297 4.88153 3.83884 4.83735 4.66967 4.83735L10 4.83735L10 6.16265L4.66967 6.16265C3.83884 6.16265 2.97297 6.11847 2.07207 6.03012C3.14314 6.88052 4.24424 8.25 5.37537 10.1386L4.42943 11Z" fill="white" />
    </svg>
  )

  return (
    <section className="hero-detail">
      <div className="hero-detail__header">
        <div className="hero-detail__header-wrapper">
          <Link href="/work">
            <a className="hero-detail__header-back">{back} Work</a>
          </Link>
          <h1 className="hero-detail__header-title">{fields.title}</h1>
        </div>
      </div>
      {!fields.video && <div className="hero-detail__image">
        <img src={extractMediaAssetSrc(fields.imageDesktop)} alt="" className="lg" />
        <img src={extractMediaAssetSrc(fields.imageMobile)} alt="" className="sm" />
      </div>}
      {fields.video &&
        <div className={`hero-detail__video ${isPlaying ? 'hero-detail__video--show' : ''}`}>
          <div className="hero-detail__video-image" onClick={() => playVideo()}>
            <div className="hero-detail__video-image-icon">
              <div className="hero-detail__video-image-icon-image">
                <img src="/assets/images/play.svg" alt="Play video" />
              </div>
              <div className="hero-detail__video-image-icon-text">
                <span>Play<br />video</span>
              </div>
            </div>
            <img src={extractMediaAssetSrc(fields.imageDesktop)} alt="" className="lg" />
            <img src={extractMediaAssetSrc(fields.imageMobile)} alt="" className="sm" />
          </div>
          <div className="hero-detail__video-player">
            <ReactPlayer
              ref={playerRef}
              className='react-player'
              url={fields.video.fields.file.url}
              width='100%'
              height='100%'
              muted
              loop={false}
              playsinline={true}
              onReady={onPlayerReady}
              onEnded={onVideoEnded}
              playing={isPlaying}
              controls={true}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            />
          </div>
        </div>
      }
      <div className="hero-detail__data">
        <div className="hero-detail__data-title">
          {fields.subtitle.map((subtitle, index) =>
            <h2 key={index}>{subtitle}</h2>
          )}
        </div>
        <div className="hero-detail__data-description">
          <p>{fields.description}</p>
        </div>
        <div className="hero-detail__data-link">
          {fields.linkToWebsite && <a href={fields.linkToWebsite} target="_blank" rel="noreferrer">Link to site</a>}
        </div>
        <div className="hero-detail__data-tags">
          {fields.tags.map((tag, index) =>
            <span key={index}>{tag}</span>
          )}
        </div>
        <div className="hero-detail__data-brands">
          <h3>Brand / Partners</h3>
          {fields.brands.map((img, index) =>
            <img key={index} src={img.fields.file.url} alt="" />
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroDetail;
