import '../../styles/category.css'

function Subcategory(props) {

    const {
        strategy, 
        marketing,
        corporate,
        operations, 
        sales, 
        tech, 
        marketplace, 
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

	return  <div className='adn-subcategory-button_box'>
                    {strategy && 
                        <>
                            <div 
                            className={startingABusiness ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setStartingABusiness(!startingABusiness)}>
                                Starting a business
                            </div>
                            <div 
                            className={businessPlanning ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setBusinessPlanning(!businessPlanning)}>
                                Business planning
                            </div>
                        </>
                    }
                    {marketing && 
                        <>
                            <div 
                            className={growth ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setGrowth(!growth)}>
                                Growth
                            </div>
                            <div 
                            className={brand ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setBrand(!brand)}>
                                Brand
                            </div>
                            <div 
                            className={socialNetwork ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setSocialNetwork(!socialNetwork)}>
                                Social networks
                            </div>
                        </>
                    }
                    {corporate && 
                        <>
                            <div 
                            className={finance ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setFinance(!finance)}>
                                Finance
                            </div>
                            <div 
                            className={legal ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setLegal(!legal)}>
                                Legal
                            </div>
                            <div 
                            className={hiring ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setHiring(!hiring)}>
                                Hiring
                            </div>
                            <div 
                            className={management ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setManagement(!management)}>
                                Management
                            </div>
                        </>
                    }
                    {operations && 
                        <>
                            <div 
                            className={processes ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setProcesses(!processes)}>
                                Processes
                            </div>
                            <div 
                            className={shipping ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setShipping(!shipping)}>
                                Shipping
                            </div>
                            <div 
                            className={exporting ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setExporting(!exporting)}>
                                Exporting
                            </div>
                        </>
                    }
                    {sales && 
                        <>
                            <div 
                            className={sellingAProduct ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setSellingAProduct(!sellingAProduct)}>
                                Selling a product
                            </div>
                            <div 
                            className={salesSub ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setSalesSub(!salesSub)}>
                                Sales
                            </div>
                            <div 
                            className={salesOps ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setSalesOps(!salesOps)}>
                            Sales Ops
                            </div>
                        </>
                    }
                    {tech && 
                        <>
                            <div 
                            className={website ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setWebsite(!website)}>
                                Website
                            </div>
                            <div 
                            className={data ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setData(!data)}>
                                Data
                            </div>   
                        </>
                    }
                    {marketplace && 
                        <>
                            <div 
                            className={amazon ? "adn-subcategory-button_box-button active-sub-button" : "adn-subcategory-button_box-button"} 
                            onClick={() => setAmazon(!amazon)}>
                                Amazon
                            </div>    
                        </>
                    }
                </div>
}

export default Subcategory