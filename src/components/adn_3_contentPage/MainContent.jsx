import React, { useState } from 'react';
import '../../styles/main.css'
import Thumbnail from './Thumbnail';
import contentData from '../../data/thumbnailList.json'
import Footer from './Footer'




// TODO ordering data array at begining https://www.delftstack.com/fr/howto/javascript/convert-string-to-date-in-javascript/ date.Parse for ordering format YYYY-MM-DD
//renommer dans le JSON, category et sub et type en camelCase comme dans le state
// if type in selectedCat or cat in selected or subcat in selectedcat

  function Main(props) {

    // const {
    //   startingABusiness, 
    //   setStartingABusiness,
    //   businessPlanning, 
    //   setBusinessPlanning,
    //   growth, 
    //   setGrowth,
    //   brand, 
    //   setBrand,
    //   socialNetwork, 
    //   setSocialNetwork,
    //   finance, 
    //   setFinance,
    //   legal, 
    //   setLegal,
    //   hiring, 
    //   setHiring,
    //   management, 
    //   setManagement,
    //   processes, 
    //   setProcesses,
    //   shipping, 
    //   setShipping,
    //   exporting, 
    //   setExporting,
    //   sellingAProduct, 
    //   setSellingAProduct,
    //   salesSub, 
    //   setSalesSub,
    //   salesOps, 
    //   setSalesOps,
    //   website, 
    //   setWebsite,
    //   data, 
    //   setData,
    //   amazon, 
    //   setAmazon
    // } = props
    console.log(props)
    // const selectedCategoriesAndContent = Object.keys(props).filter(key => props[key] === true);
    // console.log(selectedCategoriesAndContent)
    // TODO gérer les sous catégories


    const [count, setCount] = useState(9);


    return <div className='adn-main-and-footer'>
                    <div className='adn-main'>
                <div className='adn-main-box'>
                    {contentData.map(({type, category, subCategory, title, image }, index) => 
                      index < count ? (
                        props[type]
                        || props[category] ? (
                        // || selectedCategoriesAndContent.includes(subCategory)  ? (
                          <Thumbnail
                            key={type + index}
                            type={type}
                            title={title}
                            image={image}
                          />
                          ) : null

                        ) : null
                      )}
                    </div>
                  </div>
                <Footer
                  count={count}
                  setCount={setCount}
                />
              </div>
              {/* <div className='adn-main'>
                <div className='adn-main-box'>
                    {contentData.map(({type, category, subCategory, title, image }, index) => 
                      index < count ? (
                        selectedCategoriesAndContent.includes(type) 
                        || selectedCategoriesAndContent.includes(category) ? (
                        // || selectedCategoriesAndContent.includes(subCategory)  ? (
                          <Thumbnail
                            key={type + index}
                            type={type}
                            title={title}
                            image={image}
                          />
                          ) : null

                        ) : null
                      )}
                    </div>
                  </div>
                <Footer
                  count={count}
                  setCount={setCount}
                />
              </div> */}
}

export default Main