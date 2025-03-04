import React, { useState } from 'react'
import Close from '../assets/close.svg'

const PortfolioItem = ({img, title, details}) => {

  const [modal, setModal]  = useState(false)

  const toggleModal = ()=>{
    setModal(!modal)
  }

  const handlePreviewClick = (url) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      console.error('Invalid URL:', url);
      // Optionally display an error message to the user
      alert('The preview link is invalid.'); // Or a more sophisticated UI approach.
    }
    
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt={title} className='portfolio__img' />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img src={Close} alt="Close Modal" className="modal__close" onClick={toggleModal} />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map((detail, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className='item__icon'>{detail.icon}</span>
                    <div>
                      <span className="item__title">{detail.title}</span>
                      {detail.title === "Preview : " ? (
                        <span className="item__details" style={{cursor: 'pointer', color:'blue'}} onClick={() => handlePreviewClick(detail.desc)}>
                          {detail.desc}
                        </span>
                      ) : (
                        <span className="item__details">{detail.desc}</span>
                      )}
                      
                    </div>
                  </li>
                )
              })}
            </ul>

            <img src={img} alt={title} className="modal__img" />
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioItem