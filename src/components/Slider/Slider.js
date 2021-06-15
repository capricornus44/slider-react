import React, { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"

import SliderData from "./SliderData"
import SliderButton from "./SliderButton"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = SliderData.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      {SliderData.map((obj, index) => (
        <div key={obj.id} className={index === currentSlide ? "slide active" : "slide"}>
          {index === currentSlide && <img src={obj.image} alt="beautiful nature" className="image" />}
        </div>
      ))}

      <SliderButton Icon={MdKeyboardArrowRight} moveSlide={nextSlide} direction="next" />
      <SliderButton Icon={MdKeyboardArrowLeft} moveSlide={prevSlide} direction="prev" />
    </section>
  )
}

export default Slider
