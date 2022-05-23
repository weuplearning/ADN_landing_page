import React, { useState } from 'react';
import '../../styles/main.css'
import Thumbnail from './Thumbnail';
import contentData from '../../data/thumbnailList.json'
import Footer from './Footer'
import {connexionTable} from '../../data/connexionTable'

  function Main(props) {

    //quickFix to remove '0000' nodes
    const thumbnailNodes = document.getElementsByClassName("adn-main-box")[0]
    console.log(thumbnailNodes)
    if (thumbnailNodes) {
      thumbnailNodes.childNodes.forEach(node => {
        if (node.textContent === '0') {
          console.log(node)
        }
    })

  }


    let data = contentData
    if (process.env.NODE_ENV !== 'development') {
      data = window.props.data
    }

    // state for number of thumbnail displayed
    const [count, setCount] = useState(9);

    // state for type of clicked button
    const selectedCategoriesAndContent = Object.keys(props).filter(key => props[key] === true);
    let contentCount = 0
    let categoryCount = 0
    let subCategoryCount = 0
    for (let element of selectedCategoriesAndContent) {
      for (let content of connexionTable["content"]) {
        if (content === element) {
          contentCount +=1
        }
      }
      for (let category of connexionTable["category"]) {
        if (category === element) {
          categoryCount +=1
        }
      }
      for (let subCategory of connexionTable["subCategory"]) {
        if (subCategory === element) {
          subCategoryCount +=1
        }
      }
    }


    return ( <div className='adn-main-and-footer'>
        <div className='adn-main'>
          <div className='adn-main-box'>
          {
            data.map(({type, category, subCategory, title, image }, index) => 
            index < count ? (
            (!contentCount && !categoryCount && !subCategoryCount && 
              <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                />
              )
            || (contentCount && !categoryCount && props[type] &&   
                <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                />
            )
            ||  (contentCount && categoryCount && !subCategoryCount && (props[type] && props[category]) &&
              <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                />
            )
            ||  (!contentCount && categoryCount && !subCategoryCount && props[category] &&
              <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                />
            )
            ||  (!contentCount && categoryCount && subCategoryCount && props[category] && props[subCategory] && 
              <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                />
            )
            ||  (contentCount && categoryCount && subCategoryCount && (props[type] && (props[category] && props[subCategory])) &&
            <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                />
            )
            ): null
            )
          }

          </div>
        </div>
        <Footer
        count={count}
        setCount={setCount}
      />
  </div>)

}

export default Main

// TODO faire un childNodes et detecter type text et supprimer pour les 0000