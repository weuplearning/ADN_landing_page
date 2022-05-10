import Button from '@mui/material/Button';
import '../../styles/main.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Thumbnail({type, title, image}) {

    const theme = createTheme({
      palette: {
        primary: {
          main: '#ff9900'
        },
      },
    });

  const buttonStyle = {
      maxWidth: '250px',
      maxHeight: '60px',
      minWidth: '250px',
      minHeight: '60px',
      fontSize: '1.2em',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      borderRadius: "15px",
      margin: '1em',
  };
	return <div className='adn-main-thumbnail-box'>
                 <div className='adn-main-thumbnail'>
                    <p className='adn-main-thumbnail-category'>{type}</p>
                    <div className='adn-main-thumbnail-flex_container'>
                        <img src={image} className='adn-main-image' alt='thumbnail'></img>
                        <h3 className='adn-main-thumbnail-title'>
                          {title}
                        </h3>
                        <ThemeProvider theme={theme}>
                            <Button style={buttonStyle} variant="contained" color="primary">
                                Découvrir
                            </Button>
                        </ThemeProvider>
                    </div>
                  </div>
                </div>
     
}

export default Thumbnail