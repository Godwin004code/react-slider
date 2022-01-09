import React, { useState } from 'react'
import SlidesArrow from './SlidesArrow'
import Data from './SlidesData'
import SlidesDot from './SlidesDot'
import './SliderContainer.css'

const SliderContainer = () => {

    
    const [active, setActive] = useState(0)

    const { text, img} = Data[active]

    

    const nextSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex > Data.length - 1) {
                return 0
            }  else if(newIndex < 0) {
                return Data.length - 1
            }

            return newIndex
        })
    }

    setTimeout(nextSlide, 5000)

    const prevSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex < 0) {
                return Data.length - 1
            } else if(newIndex > Data.length - 1) {
                return 0
            }

            return newIndex
        })
    }

    

    return (
        
        <div className="body">
            
                
                <div className="slide-img">
                <img src={img} alt="image" />     
                </div>
                <div className="header">
                    <h2>{text}</h2>
                    
                   
                </div>
                <SlidesArrow next={nextSlide} prev={prevSlide} />
                <SlidesDot active={active} switchSlide={(active) => setActive(active)} />
        </div>
    )
}

export default SliderContainer
