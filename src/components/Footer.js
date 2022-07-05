import React from 'react'

//import footer img
import img_twitterIcon from '../images/TwitterIcon.png'
import img_facebookIcon from '../images/FacebookIcon.png'
import img_instagramIcon from '../images/InstagramIcon.png'
import img_linkedinIcon from '../images/LinkedinIcon.png'
import img_githubIcon from '../images/GitHubIcon.png'

export default function Footer() {
  return(
    <footer>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" className="imgButton">
        <img src={img_twitterIcon} alt=""/>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" className="imgButton">
        <img src={img_facebookIcon} alt=""/>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="imgButton">
        <img src={img_instagramIcon} alt=""/>
      </a>
      <a href="https://www.linkedin.com/in/mamantotony/" target="_blank" rel="noreferrer noopener" className="imgButton">
        <img src={img_linkedinIcon} alt=""/>
      </a>
      <a href="https://github.com/tonyma163" target="_blank" rel="noreferrer noopener" className="imgButton">
        <img src={img_githubIcon} alt=""/>
      </a>
    </footer>
  )
}
