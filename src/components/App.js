import React, { useState } from 'react';
import '../styles/App.css';
import Banner from './adn_1_topPage/Banner'
import TopContent from './adn_1_topPage/TopContent'
import Contentbutton from './adn_2_middlePage/ContentButton'
import Categorybutton from './adn_2_middlePage/CategoryButton'
import MainContent from './adn_3_contentPage/MainContent'





function App() {

  // state for content button
  const [course, setCourse] = useState(false);
  const [webinaire, setWebinaire] = useState(false);
  const [video, setVideo] = useState(false);

  // state for category button
  const [strategy, setStrategy] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [corporate, setCorporate] = useState(false);
  const [operations, setOperations] = useState(false);
  const [sales, setSales] = useState(false);
  const [tech, setTech] = useState(false);
  const [marketplace, setMarketplace] = useState(false);

  // state for subcategory button
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
  const [salesSub, setSalesSub] = useState(false);
  const [salesOps, setSalesOps] = useState(false);
  const [website, setWebsite] = useState(false);
  const [data, setData] = useState(false);
  const [amazon, setAmazon] = useState(false);


  return (
    <div className="App">
      <Banner/>
      <TopContent/>
      <Contentbutton
        course={course}
        setCourse={setCourse}
        webinaire={webinaire}
        setWebinaire={setWebinaire}
        video={video}
        setVideo={setVideo}
      />
      <Categorybutton
        strategy={strategy}
        setStrategy={setStrategy}
        marketing={marketing} 
        setMarketing={setMarketing}
        corporate={corporate} 
        setCorporate={setCorporate}
        operations={operations} 
        setOperations={setOperations}
        sales={sales} 
        setSales={setSales}
        tech={tech} 
        setTech={setTech}
        marketplace={marketplace} 
        setMarketplace={setMarketplace}
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
      <MainContent
        course={course}
        webinaire={webinaire}
        video={video}
        strategy={strategy}
        marketing={marketing} 
        corporate={corporate} 
        operations={operations} 
        sales={sales} 
        tech={tech} 
        marketplace={marketplace} 
        startingABusiness={startingABusiness}
        businessPlanning={businessPlanning} 
        growth={growth} 
        brand={brand} 
        socialNetwork={socialNetwork} 
        finance={finance} 
        legal={legal} 
        hiring={hiring} 
        management={management} 
        processes={processes} 
        shipping={shipping} 
        exporting={exporting} 
        sellingAProduct={sellingAProduct} 
        salesSub={salesSub} 
        salesOps={salesOps} 
        website={website} 
        data={data} 
        amazon={amazon}
      />
    </div>
  );
}

export default App;
