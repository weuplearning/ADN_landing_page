import React, { useState } from 'react';
import '../../styles/main.css'
import Thumbnail from './Thumbnail';
import data from '../../data/thumbnailList.json'
import Footer from './Footer'




// TODO https://www.delftstack.com/fr/howto/javascript/convert-string-to-date-in-javascript/ date.Parse for ordering format YYYY-MM-DD
// TODO in the json data, set 2 distincts keys : category and subcategory
// faire remonter tous les états des categories et contenus et type
//renommer dans le JSON, category et sub et type en camelCase comme dans le state

  function Main() {

  const [count, setCount] = useState(9);

	return <div className='adn-main-and-footer'>
            <div className='adn-main'>
              <div className='adn-main-box'>
                  {data.map(({ id, type, title, image }, index) => 
                    index < count ? (
                          <Thumbnail
                            id={id}
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