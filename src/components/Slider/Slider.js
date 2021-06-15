import React from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"

import SliderData from "./SliderData"
import SliderButton from "./SliderButton"

const Slider = () => {
  const nextSlide = () => {}
  const prevSlide = () => {}

  return (
    <>
      {SliderData.map((obj, index) => (
        <div key={obj.id}>
          <img src={obj.image} alt="beautiful nature" />
        </div>
      ))}

      <SliderButton Icon={MdKeyboardArrowRight} moveSlide={nextSlide} />
      <SliderButton Icon={MdKeyboardArrowLeft} moveSlide={prevSlide} />
    </>
  )
}

export default Slider
