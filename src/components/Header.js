import React from 'react'
import TrollFace from '../images/TrollFace.svg'

function Header() {
  return (
    <header className='header'>
        <div className='header-icon'>
            <img src={TrollFace} alt="MemeIcon" className='tf-icon'/>
            <h2>Meme Generator</h2>
        </div>
        <div>React Course - Project 3</div>
    </header>
  )
}

export default Header