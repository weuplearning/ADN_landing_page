import '../../styles/content.css'

function Content(props) {
  const {
    cours,
    setCours,
    webinaire,
    setWebinaire,
    video,
    setVideo,
  } = props

	return <div className='adn-content'>
        <p className='adn-content-banner'>Définissez le type de contenu que vous souhaitez découvrir</p>
        <div className='adn-content-button_box'>
                  <div 
                    className={cours ? 'adn-content-button_box-button content-button-active' : 'adn-content-button_box-button'}  
                    onClick={() => setCours(!cours)}
                  >
                      Cours
                  </div>
                  <div 
                    className={video ? 'adn-content-button_box-button content-button-active' : 'adn-content-button_box-button'} 
                    onClick={() => setVideo(!video)}
                  >
                      Vidéos
                  </div>
                  <div 
                    className={webinaire ? 'adn-content-button_box-button content-button-active' : 'adn-content-button_box-button'} 
                    onClick={() => setWebinaire(!webinaire)}
                  >
                      Webinaires
                  </div>
        </div>
    </div>
}

export default Content