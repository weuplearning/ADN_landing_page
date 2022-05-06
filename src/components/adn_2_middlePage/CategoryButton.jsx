import Button from '@mui/material/Button';
import '../../styles/category.css'
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


function category() {
	return <div className='adn-category'>
                <div className='adn-category-banner'>
                    <p>Définissez le type de catégorie qui vous intéresse</p>
                </div>
                <div className='adn-category-button_box'>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary">
                            Strategy
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Marketing
                        </Button>
                        <Button variant="outlined" color="inactiveButton">
                            Corporate
                        </Button>
                        <Button variant="contained" color="primary">
                            Operations
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Sales
                        </Button>
                        <Button variant="outlined" color="inactiveButton">
                            Tech
                        </Button>
                        <Button variant="outlined" color="inactiveButton">
                            Marketplace
                        </Button>
                    </ThemeProvider>
                </div>
                {/* TODO insert condition here */}
                <div className='adn-subcategory-button_box'>

                </div>
            </div>
}

export default category