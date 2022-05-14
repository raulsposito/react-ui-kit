import Pagination from '@components/pagination'
import React, { useState } from 'react'

const randomColor = () => `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`

const style = {
  width: '100%',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const slides = n => [...new Array(n)].map(() => {
  const color = randomColor()
  return (
    <div style={{ ...style, backgroundColor: color }}>
      {color}
    </div>
  )
})

const PaginationContainer = () => {
  const [content] = useState(slides(13))
  const [slide, setSlide] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '0.5em', width: '100%' }}>
          {content[slide]}
          <Pagination
            pages={content.length}
            goToPage={setSlide}
            selected={slide}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '0.5em', width: '100%' }}>
          {content[slide]}
          <Pagination
            pages={content.length}
            goToPage={setSlide}
            selected={slide}
            size='small'
            color='secondary'
            showStartAndEnd={false}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '0.5em', width: '100%' }}>
          {content[slide]}
          <Pagination
            pages={content.length}
            goToPage={setSlide}
            selected={slide}
            size='large'
            disabled
          />
        </div>
      </div>
    </>
  )
}

export default PaginationContainer
