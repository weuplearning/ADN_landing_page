import Button from '@mui/material/Button';
import '../../styles/content.css'
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


console.log(theme.palette.neutral)

function content() {
	return <div className='adn-content'>
        <div className='adn-content-banner'>
            <p>Définissez le type de contenu que vous souhaitez découvrir</p>
        </div>
        <div className='adn-content-button_box'>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">
                {/* <Button variant="contained" color={theme.palette.primary.main}> */}
                    Cours
                </Button>
                <Button variant="outlined" color="secondary">
                    Vidéos
                </Button>
                <Button variant="outlined" color="inactiveButton">
                    Webinaires
                </Button>
            </ThemeProvider>
        </div>
    </div>
}

export default content