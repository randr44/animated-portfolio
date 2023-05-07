import './index.scss';
import { useState } from 'react'
import LogoName from '../../assets/images/Rich.png';
import LetterR from '../../assets/images/LetterR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser, faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <div className='nav-bar'>
        <Link className='logo'
            to='/'>
            <img src={LetterR} alt='logo' />
            <img className='sub-logo' src={LogoName} alt='richard' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active' className='portfolio-link' to='/portfolio' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active' className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rlandrews44/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className='anchor-icon'/>
                </a>
            </li>   
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/randr44'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='anchor-icon'/>
                </a>
            </li>   
            <li>
                <a target='_blank' rel='noreferrer' href='skype:live:richard.andrews1981'>
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e' className='anchor-icon'/>
                </a>
            </li>   
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
    )
}

export default Sidebar

