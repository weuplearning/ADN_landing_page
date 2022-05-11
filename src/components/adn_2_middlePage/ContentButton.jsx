import Button from '@mui/material/Button';
import '../../styles/content.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Content(props) {
  const {
    course,
    setCourse,
    webinaire,
    setWebinaire,
    video,
    setVideo
  } = props

  const theme = createTheme({
    palette: {
      primary: {
        main: '#bb4926'
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
    border:'3px solid #bb4926',
    margin: '1em'
  };

	return <div className='adn-content'>
        <p className='adn-content-banner'>Définissez le type de contenu que vous souhaitez découvrir</p>
        <div className='adn-content-button_box'>
            <ThemeProvider theme={theme}>
                  <Button
                    style={buttonStyle} 
                    variant={course ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => setCourse(!course)}
                  >
                      Cours
                  </Button>
                  <Button
                    style={buttonStyle} 
                    variant={video ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => setVideo(!video)}
                  >
                      Vidéos
                  </Button>
                  <Button
                    style={buttonStyle} 
                    variant={webinaire ? "contained" : "outlined"} 
                    color="primary"
                    onClick={() => setWebinaire(!webinaire)}
                  >
                      Webinaires
                  </Button>
            </ThemeProvider>
        </div>
    </div>
}

export default Content