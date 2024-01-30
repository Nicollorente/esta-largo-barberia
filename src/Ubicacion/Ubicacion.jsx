import React from 'react'
import './Ubicacion.css'
const Ubicacion = () => {
  return (
    <div className='map'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4336581960365!2d-58.56594192479702!3d-34.643749559612594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e5cebdabe3%3A0x6fd208a9c783e068!2sEsta%20Largo%20peluqueria!5e0!3m2!1ses-419!2sar!4v1697505908733!5m2!1ses-419!2sar" width="800" height="600"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Ubicacion