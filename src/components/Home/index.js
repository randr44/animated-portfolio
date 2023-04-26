import React, { useState, useEffect } from 'react'
import LetterR from '../../assets/images/LetterR.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [timeoutId, setTimeoutId] = useState(null)
  const nameArray = [ 'i', 'c', 'h', 'a', 'r', 'd']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  
  useEffect(() => {
    setTimeoutId(setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000))
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass} >H</span>
              <span className={`${letterClass} _12`} >i,</span>
              <br />
              <span className={`${letterClass} _13`} >I</span>
              <span className={`${letterClass} _14`} >'m</span>
              <img src={LetterR} alt='developer' />
                <AnimatedLetters letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={21}
                  />
            </h1>
            <h2>FullStack Dev / JavaScript Hero / Life Learner</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
        </div>
        <Logo />
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home
