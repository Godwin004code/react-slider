import React, { useState } from 'react'
import SliderContainer from './components/SliderContainer'
import SlidesArrow from './components/SlidesArrow'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div>
      
      <SliderContainer />
    </div>
  )
}

export default App
