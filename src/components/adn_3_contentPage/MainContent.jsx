import React, { useState } from 'react';
import '../../styles/main.css'
import Thumbnail from './Thumbnail';
import data from '../../data/thumbnailList.json'
import Footer from './Footer'




// TODO ordering data array at begining https://www.delftstack.com/fr/howto/javascript/convert-string-to-date-in-javascript/ date.Parse for ordering format YYYY-MM-DD
// TODO in the json data, set 2 distincts keys : category and subcategory
// faire remonter tous les états des categories et contenus et type // distinguer sales cat et subcat
//renommer dans le JSON, category et sub et type en camelCase comme dans le state

  function Main(props) {
    console.log(props)
    const selectedCategoriesAndContent = Object.keys(props).find(key => props[key] === true);
    console.log(selectedCategoriesAndContent)


  const [count, setCount] = useState(9);


	return <div className='adn-main-and-footer'>
            <div className='adn-main'>
              <div className='adn-main-box'>
                  {data.map(({type, title, image }, index) => 
                    index < count ? (
                          <Thumbnail
                            key={type + index}
                            type={type}
                            title={title}
                            image={image}
                          />
                        ) : null
                    )}
                  </div>
                </div>
              <Footer
                count={count}
                setCount={setCount}
              />
            </div>
}

export default Main