import banner from '../../assets/banner_header.png'
import '../../styles/banner.css'

function Banner() {

	let imgSource = banner
	if (process.env.NODE_ENV !== 'development') {
		imgSource = window.props.images.bannerHeader
	}

	return <div className='adn-banner'>
		<img className='adn-banner_img' src={imgSource} alt='banner'></img>
		</div>
}

export default Banner