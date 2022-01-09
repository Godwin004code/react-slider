import React from 'react'
import './SlidesArrow.css'

const SlidesArrow = ({next, prev}) => {
    return (
        <div className="btns">
            <button className="prev" onClick={prev}>
                &#10094;
            </button>
            <button className="next" onClick={next}>
                &#10095;
            </button>
        </div>
    )
}

export default SlidesArrow
