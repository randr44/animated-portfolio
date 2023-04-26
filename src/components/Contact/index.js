import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [timeoutId, setTimeoutId] = useState(null)
    const refForm = useRef()

    useEffect(() => {
        setTimeoutId(setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000))
        return () => {
          clearTimeout(timeoutId)
        }
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_0mtlx9c', 'template_bdrr66m', refForm.current, 'Rdd6n0MxXSx7p5-5w' )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

      return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input placeholder="Name" type="text" name="name" required />
                    </li>
                    <li className="half">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input type="submit" className="flat-button" value="SEND" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="info-map">
              Richard Andrews,
              <br />
              United States,
              <br />
              Billings, MT 59101 <br />
              <br />
              <span>richintellect999@gmail.com</span>
            </div>
            <div className="map-wrap">
              <MapContainer center={[45.787636, -108.489304]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[45.787636, -108.489304]}>
                  <Popup>Rich lives in Billings... If your'e ever near come over for a cup of coffee :)</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <Loader type="pacman" />
        </>
    )
}

export default Contact;
