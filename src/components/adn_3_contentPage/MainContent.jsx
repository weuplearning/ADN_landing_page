import React, { useState } from 'react';
import '../../styles/main.css'
import Thumbnail from './Thumbnail';
import contentData from '../../data/thumbnailList.json'
import Footer from './Footer'
import {connexionTable} from '../../data/connexionTable'

  function Main(props) {

    let data = contentData
    if (process.env.NODE_ENV !== 'development') {
      data = window.props.data
    }
    // state for number of thumbnail displayed
    const [totalCount, setTotalCount] = useState(9);

    // state for type of clicked button 
    const selectedCategoriesAndContent = Object.keys(props).filter(key => props[key] === true);


    // create a new data Array for each situation
    let dataFinalArray = data

    let clickedButtons = {
      content : [],
      category: [],
      subcategory: []
    }

    const setClickedButtons = (element) => {

      if (connexionTable.content.includes(element)) {
        clickedButtons.content.push(element)
        } 
        else if (connexionTable.category.includes(element) ) {
        clickedButtons.category.push(element)
      }
        else if (connexionTable.subCategory.includes(element)) {
 
          clickedButtons.subcategory.push(element)
        }
    }

    selectedCategoriesAndContent.forEach(element => {
      setClickedButtons(element)
    });


    if (clickedButtons.content.length && !clickedButtons.category.length) {
      dataFinalArray = data.filter(function (element)
      { 
        return clickedButtons.content.includes(element.type)
      });
    } 
    else if (clickedButtons.content.length && clickedButtons.category.length && !clickedButtons.subcategory.length) {
      dataFinalArray = data.filter(function (element)
      { 
        return clickedButtons.content.includes(element.type) &&
               clickedButtons.category.includes(element.category)
      });
    }
    else if (!clickedButtons.content.length && clickedButtons.category.length && !clickedButtons.subcategory.length) {
      dataFinalArray = data.filter(function (element)
      { 
        return clickedButtons.category.includes(element.category)
      });
    }
    else if (!clickedButtons.content.length && clickedButtons.category.length && clickedButtons.subcategory.length) {
      dataFinalArray = data.filter(function (element)
      { 
        return clickedButtons.category.includes(element.category) &&
               clickedButtons.subcategory.includes(element.subCategory)
      });
    }
    else if (clickedButtons.content.length && clickedButtons.category.length && clickedButtons.subcategory.length) {
      dataFinalArray = data.filter(function (element)
      { 
        return clickedButtons.content.includes(element.type) &&
               clickedButtons.category.includes(element.category) &&
               clickedButtons.subcategory.includes(element.subCategory)
      });
    }

    // sort by date
    dataFinalArray.sort(function(a,b){
      return new Date(b.publishedDate) - new Date(a.publishedDate);
    });

    return ( <div className='adn-main-and-footer'>
        <div className='adn-main'>
          <div className='adn-main-box'>
          {
            dataFinalArray.map(({type, title, image, url }, index) => 
            index < totalCount &&
              <Thumbnail
                  key={type + index}
                  type={type}
                  title={title}
                  image={image}
                  url={url}
                />
            )
          }
          </div>
        </div>
        <Footer
        totalCount={totalCount}
        setTotalCount={setTotalCount}
      />
  </div>)

}

export default Main
