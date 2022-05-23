import Button from '@mui/material/Button';
import Subcategory from './SubCategoryButton';
import '../../styles/category.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO condition for button colors
function Category(props) {

    const {
        strategy, 
        setStrategy,
        marketing,
        setMarketing,
        corporate,
        setCorporate,
        operations, 
        setOperations,
        sales, 
        setSales,
        tech, 
        setTech,
        marketplace, 
        setMarketplace,
        startingABusiness, 
        setStartingABusiness,
        businessPlanning, 
        setBusinessPlanning,
        growth, 
        setGrowth,
        brand, 
        setBrand,
        socialNetwork, 
        setSocialNetwork,
        finance, 
        setFinance,
        legal, 
        setLegal,
        hiring, 
        setHiring,
        management, 
        setManagement,
        processes, 
        setProcesses,
        shipping, 
        setShipping,
        exporting, 
        setExporting,
        sellingAProduct, 
        setSellingAProduct,
        salesSub, 
        setSalesSub,
        salesOps, 
        setSalesOps,
        website, 
        setWebsite,
        data, 
        setData,
        amazon, 
        setAmazon
    } = props

    const connexionTableCategory = {
        strategy : setStrategy,
        marketing : setMarketing,
        corporate : setCorporate,
        operations : setOperations,
        sales : setSales,
        tech : setTech,
        marketplace : setMarketplace,
        startingABusiness : setStartingABusiness,
        businessPlanning : setBusinessPlanning,
        growth : setGrowth,
        brand : setBrand,
        socialNetwork : setSocialNetwork,
        finance : setFinance,
        legal : setLegal,
        hiring : setHiring,
        management : setManagement,
        processes : setProcesses,
        shipping : setShipping,
        exporting : setExporting,
        sellingAProduct : setSellingAProduct,
        salesSub : setSalesSub,
        salesOps : setSalesOps,
        website : setWebsite,
        data : setData,
        amazon : setAmazon
    }

    const resetButtonsState = (data, setData) => {
        const categoryFilter = Object.keys(props).filter(key => props[key] === true);
        categoryFilter.forEach( category => {
            const functionSetData = connexionTableCategory[category]
            functionSetData(false)
        })
        if (!categoryFilter.includes(data)) {
            setData(true)
        }
    }


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
                        color="primary" onClick={() => resetButtonsState("strategy", setStrategy)}>
                            Strategy
                        </Button>
                        <Button style={buttonStyle} 
                        variant={marketing ? "contained" : "outlined"}  
                        color="primary" onClick={() => resetButtonsState("marketing", setMarketing)}>
                            Marketing
                        </Button>
                        <Button style={buttonStyle} 
                        variant={corporate ? "contained" : "outlined"}  
                        color="primary" onClick={() => resetButtonsState("corporate", setCorporate)}>
                            Corporate
                        </Button>
                        <Button style={buttonStyle} 
                        variant={operations ? "contained" : "outlined"}  
                        color="primary" onClick={() => resetButtonsState("operations", setOperations)}>
                            Operations
                        </Button>
                        <Button style={buttonStyle} 
                        variant={sales ? "contained" : "outlined"}  
                        color="primary" onClick={() => resetButtonsState("sales", setSales)}>
                            Sales
                        </Button>
                        <Button style={buttonStyle} 
                        variant={tech ? "contained" : "outlined"}  
                        color="primary" onClick={() => resetButtonsState("tech", setTech)}>
                            Tech
                        </Button>
                        <Button style={buttonStyle} 
                        variant={marketplace ? "contained" : "outlined"}  
                        color="primary" onClick={() => resetButtonsState("marketplace", setMarketplace)}>
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
                startingABusiness={startingABusiness}
                setStartingABusiness={setStartingABusiness}
                businessPlanning={businessPlanning} 
                setBusinessPlanning={setBusinessPlanning}
                growth={growth} 
                setGrowth={setGrowth}
                brand={brand} 
                setBrand={setBrand}
                socialNetwork={socialNetwork} 
                setSocialNetwork={setSocialNetwork}
                finance={finance} 
                setFinance={setFinance}
                legal={legal} 
                setLegal={setLegal}
                hiring={hiring} 
                setHiring={setHiring}
                management={management} 
                setManagement={setManagement}
                processes={processes} 
                setProcesses={setProcesses}
                shipping={shipping} 
                setShipping={setShipping}
                exporting={exporting} 
                setExporting={setExporting}
                sellingAProduct={sellingAProduct} 
                setSellingAProduct={setSellingAProduct}
                salesSub={salesSub} 
                setSalesSub={setSalesSub}
                salesOps={salesOps} 
                setSalesOps={setSalesOps}
                website={website} 
                setWebsite={setWebsite}
                data={data} 
                setData={setData}
                amazon={amazon}
                setAmazon={setAmazon}
                />
            </div>
}

export default Category