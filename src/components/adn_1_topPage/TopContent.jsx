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
            <h1 className='adn-top_content-top-title'>Titre en lorem ipsum</h1>
            <p className='adn-top_content-top-textcontent'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
            </p>
        </div>
        <div className='adn-top_content-bottom' style={{ backgroundImage: `url(${imgSourceBGB})` }}>
            <h2 className='adn-top_content-bottom-title'>Titre en lorem ipsum</h2>
                <img className='adn-top_content-bottom-image-image' src={imgSourceS}  alt='simulateur'></img>
        </div>
    </div>
}

export default TopContent