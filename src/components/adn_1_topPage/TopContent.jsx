import backgroundTop from '../../assets/bg_top.png'
import backgroundBottom from '../../assets/bg_bottom.png'
import simulateur from '../../assets/simulateur_img.png'
import '../../styles/topcontent.css'

function TopContent() {

    let imgSourceBGT = backgroundTop
    let imgSourceBGB = backgroundBottom
    let imgSourceS = simulateur
	if (process.env.NODE_ENV !== 'development') {
		imgSourceBGT = window.props.images.bgTop
        imgSourceBGB = window.props.images.bgBottom
        imgSourceS = window.props.images.simulateur
	}
	return <div className='adn-top_content' >
        <div className='adn-top_content-top' style={{ backgroundImage: `url(${imgSourceBGT})` }}>
            <h1 className='adn-top_content-top-title'>Rejoignez gratuitement notre programme de formation !</h1>
            <p className='adn-top_content-top-textcontent'>
            L’Accélérateur du Numérique vous accompagne dans le lancement ou le développement de votre activité en ligne ! 
            Le programme couvre un panel de sujet toujours plus varié : le business planning, le marketing, la logistique, la vente et bien d’autres modules.
            </p>
            <p className='adn-top_content-top-textcontent'>
            Retrouvez tous nos webinaires, nos vidéos de e-learning, et nos programmes de formation approfondie (Bootcamp et Coaching) pour lancer avec succès votre e-commerce !
            </p>
        </div>
        <div className='adn-top_content-bottom' style={{ backgroundImage: `url(${imgSourceBGB})` }}>
            <h2 className='adn-top_content-bottom-title'>Testez notre simulateur pour avoir des recommandations personnalisées !</h2>
                {/* <img className='adn-top_content-bottom-image-image' src={imgSourceS}  alt='simulateur'></img> */}
                <iframe class="scorm_object" src="/media/microsites/amazon/simulateur/story.html" width="100%" height="450" data-dashlane-frameid="600"></iframe>
        </div>
    </div>
}

export default TopContent