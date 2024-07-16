import React from 'react'
import '../About/About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div> 
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>  
        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed, fuga excepturi ipsum exercitationem ipsam. Voluptatum eveniet qui error quam voluptates. Adipisci nesciunt veritatis consequuntur, laudantium in explicabo vel et!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus officia accusamus quaerat reiciendis ullam quas odit praesentium dolores repellat eum. Labore, esse aperiam. Nisi laboriosam officiis dolorem, esse natus nulla!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>GIT & GITHUB</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default About
