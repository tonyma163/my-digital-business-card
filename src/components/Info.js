import React from 'react'

//import images
import mypic from '../images/mypic.png'
import img_emailButton from '../images/EmailButton.png'
import img_linkedinButton from '../images/LinkedinButton.png'

export default function Info() {

  return(
    <main>
      <img src={mypic} alt="Tony Ma Pic"/>
      <p className="nameText">Tony Ma</p>
      <p className="positionText">Student, Game, Mobile App, Web3 Developer</p>
      <p className="descriptionText">Hello mate!</p>

      <div className="ButtonGroup">
        <a href="mailto:mamanto163@gmail.com" className="imgButton">
          <img src={img_emailButton} alt=""/>
        </a>
        <a href="https://www.linkedin.com/in/mamantotony/" target="_blank" rel="noreferrer noopener" className="imgButton">
          <img src={img_linkedinButton} alt=""/>
        </a>
      </div>

    </main>
  )
}
