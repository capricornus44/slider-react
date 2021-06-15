import React from "react"

const SliderButton = ({ moveSlide, Icon }) => {
  return (
    <div onClick={moveSlide}>
      <Icon style={{ fontSize: 32 }} />
    </div>
  )
}

export default SliderButton
