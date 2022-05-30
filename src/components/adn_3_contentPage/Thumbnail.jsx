import '../../styles/main.css'

function Thumbnail({type, title, image, url}) {

  return <div className='adn-main-thumbnail-box'>
          <div className='adn-main-thumbnail'>
            <p className='adn-main-thumbnail-category'>{type}</p>
            <div className='adn-main-thumbnail-flex_container'>
                <img src={image} className='adn-main-image' alt='thumbnail'></img>
                <h3 className='adn-main-thumbnail-title'>
                  {title}
                </h3>
                    <div
                    className='adn-main-thumbnail-button'
                     >
                       <a 
                       href={url}
                       className='adn-main-thumbnail-button-link'
                       >
                        Découvrir
                      </a>
                    </div>
            </div>
          </div>
        </div>
     
}

export default Thumbnail