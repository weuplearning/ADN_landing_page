import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../../styles/category.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Subcategory(props) {

    const [startingABusiness, setStartingABusiness] = useState(false);
    const [businessPlanning, setBusinessPlanning] = useState(false);
    const [growth, setGrowth] = useState(false);
    const [brand, setBrand] = useState(false);
    const [socialNetwork, setSocialNetwork] = useState(false);
    const [finance, setFinance] = useState(false);
    const [legal, setLegal] = useState(false);
    const [hiring, setHiring] = useState(false);
    const [management, setManagement] = useState(false);
    const [processes, setProcesses] = useState(false);
    const [shipping, setShipping] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [sellingAProduct, setSellingAProduct] = useState(false);
    const [sales, setSales] = useState(false);
    const [salesOps, setSalesOps] = useState(false);
    const [website, setWebsite] = useState(false);
    const [data, setData] = useState(false);
    const [amazon, setAmazon] = useState(false);

    const theme = createTheme({
        palette: {
          subCategory: {
            main: '#2E3946'
          },
          primary: {
            main: '#2E3946'
          },
        },
      });
    
    const buttonStyleSubCat = {
        maxWidth: '350px',
        maxHeight: '60px',
        minWidth: '350px',
        minHeight: '60px',
        fontSize: '1.2em',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        borderRadius: "15px",
        border:'3px solid #2E3946',
        margin: '1em'
    };



	return  <div className='adn-subcategory-button_box'>
                <ThemeProvider theme={theme}>
                    {props.strategy && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={startingABusiness ? "contained" : "outlined"} 
                            color="primary" onClick={() => setStartingABusiness(!startingABusiness)}>
                                Starting a business
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={businessPlanning ? "contained" : "outlined"} 
                            color="primary" onClick={() => setBusinessPlanning(!businessPlanning)}>
                                Business planning
                            </Button>
                        </>
                    }
                    {props.marketing && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={growth ? "contained" : "outlined"} 
                            color="primary" onClick={() => setGrowth(!growth)}>
                                Growth
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={brand ? "contained" : "outlined"} 
                            color="primary" onClick={() => setBrand(!brand)}>
                                Brand
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={socialNetwork ? "contained" : "outlined"} 
                            color="primary" onClick={() => setSocialNetwork(!socialNetwork)}>
                                Social networks
                            </Button>
                        </>
                    }
                    {props.corporate && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={finance ? "contained" : "outlined"} 
                            color="primary" onClick={() => setFinance(!finance)}>
                                Finance
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={legal ? "contained" : "outlined"} 
                            color="primary" onClick={() => setLegal(!legal)}>
                                Legal
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={hiring ? "contained" : "outlined"} 
                            color="primary" onClick={() => setHiring(!hiring)}>
                                Hiring
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={management ? "contained" : "outlined"} 
                            color="primary" onClick={() => setManagement(!management)}>
                                Management
                            </Button>
                        </>
                    }
                    {props.operations && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={processes ? "contained" : "outlined"} 
                            color="primary" onClick={() => setProcesses(!processes)}>
                                Processes
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={shipping ? "contained" : "outlined"} 
                            color="primary" onClick={() => setShipping(!shipping)}>
                                Shipping
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={exporting ? "contained" : "outlined"} 
                            color="primary" onClick={() => setExporting(!exporting)}>
                                Exporting
                            </Button>
                        </>
                    }
                    {props.sales && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={sellingAProduct ? "contained" : "outlined"} 
                            color="primary" onClick={() => setSellingAProduct(!sellingAProduct)}>
                                Selling a product
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={sales ? "contained" : "outlined"} 
                            color="primary" onClick={() => setSales(!sales)}>
                                Sales
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={salesOps ? "contained" : "outlined"} 
                            color="primary" onClick={() => setSalesOps(!salesOps)}>
                            Sales Ops
                            </Button>
                        </>
                    }
                    {props.tech && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={website ? "contained" : "outlined"} 
                            color="primary" onClick={() => setWebsite(!website)}>
                                Website
                            </Button>
                            <Button style={buttonStyleSubCat} 
                            variant={data ? "contained" : "outlined"} 
                            color="primary" onClick={() => setData(!data)}>
                                Data
                            </Button>   
                        </>
                    }
                    {props.marketplace && 
                        <>
                            <Button style={buttonStyleSubCat} 
                            variant={amazon ? "contained" : "outlined"} 
                            color="primary" onClick={() => setAmazon(!amazon)}>
                                Amazon
                            </Button>    
                        </>
                    }
                    </ThemeProvider>
                </div>
}

export default Subcategory