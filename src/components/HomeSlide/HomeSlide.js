import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useKeenSlider } from "keen-slider/react";
import { Watchdog } from "meeseeks-js";
import PageModule from "components/PageModule";
import { selectActiveHomeSlide } from "redux/app/selectors";
import { Actions as AppActions } from "redux/app/actions";
import { config } from "static/config";
import { ArrowLeft, ArrowRight } from "./Slider";

import "keen-slider/keen-slider.min.css";
import { isClientSide } from "utils";

const HomeSlide = ({ data }) => {
  const timer = useRef(null);
  const slideMap = useRef(null);

  const sliderComponent = useRef(null);

  const nextSlide = () => {
    if (sliderComponent.current) {
      sliderComponent.current.next();
    }
  };

  const cancelTimer = () => {
    if (timer.current) {
      timer.current.cancel();
    }
  };

  const renderHomeSlides = () => {
    if (!data || data.length === 0) return <></>;
    slideMap.current = data.map((slide) => {
      const moduleContent = slide.fields.pageModule;
      const moduleId = moduleContent.sys.contentType.sys.id;
      return moduleId;
    });
    return data.map((slide, idx) => {
      const moduleContent = slide.fields.pageModule;
      const moduleId = moduleContent.sys.contentType.sys.id;
      return (
        <PageModule
          className="keen-slider__slide"
          moduleId={moduleId}
          content={moduleContent}
          key={slide.sys.id}
          slideIdx={idx}
          isSlide={true}
          nextSlide={nextSlide}
        />
      );
    });
  };

  const Slider = () => {
    const appDispatch = useDispatch();
    const activeSlide = useSelector(selectActiveHomeSlide);

    const shouldAutoPlaySlide = (activeSlide) => {
      // delegate autoplay control to heroVideo
      return slideMap.current[activeSlide] !== "heroVideo";
    };

    const onSlideChange = (s) => {
      const nextActiveSlide = s.details().relativeSlide;
      if (Number.isInteger(nextActiveSlide)) {
        appDispatch(AppActions.setActiveHomeSlide(nextActiveSlide));
        cancelTimer();
        if (shouldAutoPlaySlide(nextActiveSlide)) {
          timer.current = new Watchdog(config.homeSlide.autoPlay, nextSlide, {
            once: true,
          });
          timer.current.start();
        }
      }
    };

    const onSliderMounted = (s) => {
      if (Number.isInteger(activeSlide)) {
        s.moveToSlideRelative(activeSlide);
      }
    };

    const [sliderRef, slider] = useKeenSlider({
      loop: true,
      slideChanged: (s) => {
        onSlideChange(s);
      },
      mounted: (s) => {
        onSliderMounted(s);
      },
    });

    sliderComponent.current = slider;
    // if(isClientSide()){
    //   window.s = slider;
    // }

    useEffect(() => {
      return () => {
        // this resets slide on unmount
        // appDispatch(AppActions.setActiveHomeSlide(0));
      };
    }, []);

    return (
      <>
        <div ref={sliderRef} className="home-slide__wrapper keen-slider">
          {renderHomeSlides()}
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={activeSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={activeSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="home-slide">
      <Slider />
    </div>
  );
};

export default HomeSlide;
