import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoLastName from '../../assets/images/Rich.png';
import LogoA from '../../assets/images/LetterR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoA} alt='logo' />
            <img className='sub-logo' src={LogoLastName} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
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
  )
}

export default Sidebar
