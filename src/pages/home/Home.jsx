import React from 'react'
import Profile from "../../assets/home.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./Home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Manjil Budhathoki.</span> Web Developer
          </h1>

          <p className="home_description">
          I am a passionate Data Scientist and AI enthusiast with experience in Python, machine learning
          web development, and UI/UX design. This portfolio highlights my journey, showcasing various 
          projects that reflect my skills in artificial intelligence, face recognition systems, smart 
          lighting innovations, and much more.
          </p>

          <Link to='/about' className='button'>
          More About Me <span className='button__icon'><FaArrowRight  /></span>
          </Link>
        </div>
      </div>

      <div className="color__block">

      </div>
    </section>
  )
}

export default Home