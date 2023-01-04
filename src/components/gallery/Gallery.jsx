import React from 'react'
import './gallery.css'
import { GalleryItems } from './../GalleryItems'


function Gallery() {
  return (
    <div class='section-wrap'>
      <section>
        <h2>Galeria</h2>

        <div className='youtube-video'> 
          <iframe 
            src="https://www.youtube.com/embed/uXkbAQr98zU" 
            width="560" 
            height="315" 
            title="YouTube video player" 
            allowFullScreen
          />
        </div>

        <div className='gallery-items'>
          {
            GalleryItems.map((item, index) => {
              return (
                <img key={index} src={item.src} alt={item.alt}/>
              )  
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Gallery