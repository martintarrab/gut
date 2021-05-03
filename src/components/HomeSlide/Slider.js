

export const ArrowLeft = (props) => {
  const disabled = props.disabled ? " arrow--disabled" : "";

  const arrowLeft = (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.32128 -1.28325e-06L7.86805e-07 9L8.32127 18L10.1187 16.3667L4.29378 10.1667L23 10.1667L23 7.83333L4.29378 7.83333L10.1187 1.63333L8.32128 -1.28325e-06Z" fill="white" />
    </svg>
  )

  return (
    <div
      onClick={props.onClick}
      className={"arrow arrow--left" + disabled}
    >
      {arrowLeft}
    </div>
  );
}

export const ArrowRight = (props) => {
  const disabled = props.disabled ? " arrow--disabled" : "";

  const arrowRight = (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6787 18L23 9L14.6787 0L12.8813 1.63333L18.7062 7.83333H0V10.1667H18.7062L12.8813 16.3667L14.6787 18Z" fill="white" />
    </svg>
  )

  return (
    <div
      onClick={props.onClick}
      className={"arrow arrow--right" + disabled}
    >
      {arrowRight}
    </div>
  );
}
