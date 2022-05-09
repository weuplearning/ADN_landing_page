import Button from '@mui/material/Button';
import '../../styles/category.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff9900'
      },
      subCategory: {
        main: '#2E3946'
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
    border:'3px solid #ff9900',
    margin: '1em'
};

const buttonStyleSubCat = {
  border:'3px solid #2E3946',
  maxWidth: '350px',
  minWidth: '350px',
};


// TODO condition for button colors
function category() {
	return <div className='adn-category'>
                <p className='adn-category-banner'>Définissez le type de catégorie qui vous intéresse</p>
                <div className='adn-category-button_box'>
                    <ThemeProvider theme={theme}>
                        <Button style={buttonStyle} variant="contained" color="primary">
                            Strategy
                        </Button>
                        <Button style={buttonStyle} variant="outlined" color="primary">
                            Marketing
                        </Button>
                        <Button style={buttonStyle} variant="outlined" color="primary">
                            Corporate
                        </Button>
                        <Button style={buttonStyle} variant="outlined" color="primary">
                            Operations
                        </Button>
                        <Button style={buttonStyle} variant="outlined" color="primary">
                            Sales
                        </Button>
                        <Button style={buttonStyle} variant="outlined" color="primary">
                            Tech
                        </Button>
                        <Button style={buttonStyle} variant="outlined" color="primary">
                            Marketplace
                        </Button>
                    </ThemeProvider>
                </div>
                {/* TODO insert condition here to display subcategories / in another component  */}
                <div className='adn-subcategory-button_box'>
                <ThemeProvider theme={theme}>
                        <Button style={{...buttonStyle, ...buttonStyleSubCat}} variant="contained" color="subCategory">
                            Starting a business
                        </Button>
                        <Button style={{...buttonStyle, ...buttonStyleSubCat}} variant="outlined" color="subCategory">
                            Business planning
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
}

export default category