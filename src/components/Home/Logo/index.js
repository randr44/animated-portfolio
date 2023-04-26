// import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import LogoR from '../../../assets/images/LetterR.png'
// import { useRef } from 'react'

const Logo = () => {
    // const bgRef = useRef()
    // const outlinerLogoRef = useRef()
    // const solidLogoRef = useRef()

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoR} alt='R'/>
            <svg
                width='559pt'
                height='897pt'
                version='1.0'
                viewBox='0 0 559 89'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g
                    className='svg-container'
                    transform='translate(0 -457) scale(.1 -.1)'
                    fill='none'>   
                    <path d="C:\Users\randrews_reciprocity\Desktop\Portfolio Pics\drawing-1.svg"
                    />
                </g>
              </svg>
        </div>
    )
}

export default Logo
