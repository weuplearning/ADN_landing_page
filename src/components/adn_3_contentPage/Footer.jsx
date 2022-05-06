import Button from '@mui/material/Button';
import '../../styles/footer.css'
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


function footer() {
	return <div className='adn-footer'>
                    <ThemeProvider theme={theme}>
                        <Button className='adn-footerl-button' variant="contained" color="primary">
                            Voir plus
                        </Button>
                    </ThemeProvider>
            </div>
}

export default footer