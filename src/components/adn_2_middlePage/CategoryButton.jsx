import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Subcategory from './SubCategoryButton';
import '../../styles/category.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


// TODO condition for button colors
function Category() {

    const [strategy, setStrategy] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [corporate, setCorporate] = useState(false);
    const [operations, setOperations] = useState(false);
    const [sales, setSales] = useState(false);
    const [tech, setTech] = useState(false);
    const [marketplace, setMarketplace] = useState(false);

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
        border:'3px solid #ff9900',
        margin: '1em'
    };

	return <div className='adn-category'>
                <p className='adn-category-banner'>Définissez le type de catégorie qui vous intéresse</p>
                <div className='adn-category-button_box'>
                    <ThemeProvider theme={theme}>
                        <Button style={buttonStyle} 
                        variant={strategy ? "contained" : "outlined"} 
                        color="primary" onClick={() => setStrategy(!strategy)}>
                            Strategy
                        </Button>
                        <Button style={buttonStyle} 
                        variant={marketing ? "contained" : "outlined"}  
                        color="primary" onClick={() => setMarketing(!marketing)}>
                            Marketing
                        </Button>
                        <Button style={buttonStyle} 
                        variant={corporate ? "contained" : "outlined"}  
                        color="primary" onClick={() => setCorporate(!corporate)}>
                            Corporate
                        </Button>
                        <Button style={buttonStyle} 
                        variant={operations ? "contained" : "outlined"}  
                        color="primary" onClick={() => setOperations(!operations)}>
                            Operations
                        </Button>
                        <Button style={buttonStyle} 
                        variant={sales ? "contained" : "outlined"}  
                        color="primary" onClick={() => setSales(!sales)}>
                            Sales
                        </Button>
                        <Button style={buttonStyle} 
                        variant={tech ? "contained" : "outlined"}  
                        color="primary" onClick={() => setTech(!tech)}>
                            Tech
                        </Button>
                        <Button style={buttonStyle} 
                        variant={marketplace ? "contained" : "outlined"}  
                        color="primary" onClick={() => setMarketplace(!marketplace)}>
                            Marketplace
                        </Button>
                    </ThemeProvider>
                </div>
                <Subcategory
                strategy={strategy}
                marketing={marketing}
                corporate={corporate}
                operations={operations}
                sales={sales}
                tech={tech}
                marketplace={marketplace}
                />
            </div>
}

export default Category