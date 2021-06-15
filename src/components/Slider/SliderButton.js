import React from "react"

const SliderButton = ({ moveSlide, Icon, direction }) => {
  return (
    <div onClick={moveSlide}>
      <Icon className={direction === "next" ? "arrow-right" : "arrow-left"} />
    </div>
  )
}

export default SliderButton
