// import banner from '../../assets/banner_header.png'
import '../../styles/banner.css'

function Banner() {
	return <div className='adn-banner'>
		{/* <img className='adn-banner_img' src={banner} alt='banner'></img> */}
		<img className='adn-banner_img' src={window.props.images.bannerHeader} alt='banner'></img>
		</div>
}

export default Banner