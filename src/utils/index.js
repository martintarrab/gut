import moment from 'moment-timezone';

const isClientSide = () => {
  return typeof window !== "undefined";
};

function debounce(fn, interval, { leading } = {}) {
  let timeout;
  let leadExecuted = false;
  const timer = typeof interval === "number" ? interval : 200;
  const lead = typeof leading === "boolean" ? leading : false;
  return (...args) => {
    const context = this;
    const postponed = () => {
      timeout = null;
      if (lead) {
        leadExecuted = false;
      } else {
        fn.apply(context, args);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(postponed, timer);
    if (lead && !leadExecuted) {
      leadExecuted = true;
      fn.apply(context, args);
    }
  };
}

const disableScroll = () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
  // TODO: Browser / device detection.
  // Safari Mobile works better this way:
  // document.body.style.position = "absolute";
  // document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  // TODO: Browser / device detection.
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  // Safari Mobile works better this way:
  // document.body.style.overflow = "";
};

const clock = (timezone) => {
  return moment.tz(timezone).format('HH:mm:ss');
}

export { isClientSide, enableScroll, disableScroll, debounce, clock };
