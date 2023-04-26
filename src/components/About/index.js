import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJsSquare, faReact, faNodeJs, faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        setTimeoutId(setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000))
        return () => {
          clearTimeout(timeoutId)
        }
      }, [])
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a full stack web developer with a passion for learning and creating.
                    I have a mechanical background and experience with mechanical, electrical, and information
                    based systems, that brings insight into the needs of a variety of industries. I enjoy
                    building solutions, so I am excited to put my creativity and problem solving skills to good use.
                </p>
                <p>
                    I am a San Diego, C.A native, and I love to spend my free time exploring Big Sky and the
                    beautiful Northwest. I also enjoy reading, and spending time with my
                    family and friends.
                </p>
                <p>
                    I am a graduate of the College of Technology Montana State University Billings,
                    I am quick to learn and adapt to new technologies, and I am excited to bring my talents to a team and make a positive impact.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNodeJs} color='#04F404'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithub} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faWordpress} color='#21759b'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About