import Button from '@mui/material/Button';
import '../../styles/main.css'
import simulateur from '../../assets/simulateur_img.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


// TODO https://www.delftstack.com/fr/howto/javascript/convert-string-to-date-in-javascript/ date.Parse for ordering format YYYY-MM-DD
// TODO in the json data, set 2 distincts keys : category and subcategory
// faire remonter tous les états des categories et contenus et type
//renommer dans le JSON, category et sub et type en camelCase comme dans le state

function main() {
	return <div className='adn-main'>
          <div className='adn-main-box'>
              <div className='adn-main-thumbnail-box'>
                <div className='adn-main-thumbnail'>
                    <p className='adn-main-thumbnail-category'>cours</p>
                    <div className='adn-main-thumbnail-flex_container'>
                        <img src={simulateur} className='adn-main-image' alt='thumbnail'></img>
                        <h3 className='adn-main-thumbnail-title'>
                          Titre de la vidéo
                        </h3>
                        <ThemeProvider theme={theme}>
                            <Button style={buttonStyle} variant="contained" color="primary">
                                Découvrir
                            </Button>
                        </ThemeProvider>
                    </div>
                  </div>
                </div>
                <div className='adn-main-thumbnail-box'>
                <div className='adn-main-thumbnail'>
                    <p className='adn-main-thumbnail-category'>cours</p>
                    <div className='adn-main-thumbnail-flex_container'>
                        <img src={simulateur} className='adn-main-image' alt='thumbnail'></img>
                        <h3 className='adn-main-thumbnail-title'>
                          Titre de la vidéo
                        </h3>
                        <ThemeProvider theme={theme}>
                            <Button style={buttonStyle} variant="contained" color="primary">
                                Découvrir
                            </Button>
                        </ThemeProvider>
                    </div>
                  </div>
                </div>
                <div className='adn-main-thumbnail-box'>
                <div className='adn-main-thumbnail'>
                    <p className='adn-main-thumbnail-category'>cours</p>
                    <div className='adn-main-thumbnail-flex_container'>
                        <img src={simulateur} className='adn-main-image' alt='thumbnail'></img>
                        <h3 className='adn-main-thumbnail-title'>
                          Titre de la vidéo
                        </h3>
                        <ThemeProvider theme={theme}>
                            <Button style={buttonStyle} variant="contained" color="primary">
                                Découvrir
                            </Button>
                        </ThemeProvider>
                    </div>
                  </div>
                </div>
                <div className='adn-main-thumbnail-box'>
                <div className='adn-main-thumbnail'>
                    <p className='adn-main-thumbnail-category'>cours</p>
                    <div className='adn-main-thumbnail-flex_container'>
                        <img src={simulateur} className='adn-main-image' alt='thumbnail'></img>
                        <h3 className='adn-main-thumbnail-title'>
                          Titre de la vidéo
                        </h3>
                        <ThemeProvider theme={theme}>
                            <Button style={buttonStyle} variant="contained" color="primary">
                                Découvrir
                            </Button>
                        </ThemeProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
}

export default main