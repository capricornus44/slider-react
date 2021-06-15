import React from "react"
import SliderData from "./SliderData"

const Slider = () => {
  return (
    <>
      {SliderData.map((obj, index) => (
        <div key={obj.id}>
          <img src={obj.image} alt="beautiful nature" />
        </div>
      ))}
    </>
  )
}

export default Slider
