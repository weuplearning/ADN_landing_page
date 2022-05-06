import Button from '@mui/material/Button';
import '../../styles/main.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#000'
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      activeButton: {
        // This is green.A700 as hex.
        main: '#f00',
      },
      inactiveButton: {
        // This is green.A700 as hex.
        main: '#f00',
      },
    },
  });


function main() {
	return <div className='adn-main'>
            <div className='adn-main-thumbnail'>
                <div className='adn-main-thumbnail-category'>cours</div>
                <div className='adn-main-thumbnail-flex_container'>
                    <img src='' className='adn-main-image' alt='thumbnail'></img>
                    <h3 className='adn-main-thumbnail-title'>
                      Titre de la vidéo
                    </h3>
                    <ThemeProvider theme={theme}>
                        <Button className='adn-main-thumbnail-button' variant="contained" color="primary">
                            Découvrir
                        </Button>
                    </ThemeProvider>
                </div>
              </div>
            </div>
}

export default main