import React from 'react'
import LetterR from '../../assets/images/LetterR.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm
            <img src={LetterR} alt='developer' />
            ichard
            <br />
            web developer
            </h1>
            <h2>FullStack Dev / JavaScript Hero / Life Learner</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
        </div>
    </div>
  )
}

export default Home
