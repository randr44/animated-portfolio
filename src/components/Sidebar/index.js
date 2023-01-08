import './index.scss';
import LogoName from '../../assets/images/Rich.png';
import LetterR from '../../assets/images/LetterR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';


export default function Sidebar () {
  return <>
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LetterR} alt='logo' />
            <img className='sub-logo' src={LogoName} alt='richard' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rlandrews44/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>   
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/randr44'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>   
            <li>
                <a target='_blank' rel='noreferrer' href='skype:live:richard.andrews1981'>
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
                </a>
            </li>   
        </ul>
    </div>
    </>
}

