
import React from "react"
import  Cards from "../../components/Cards/Cards"
import ImageHome from "../../assets/images/ImageHome.webp"
import Banner from "../../components/Banner/Banner"
 const Home= () => {
    return (
      <main>
        <Banner
        imageSrc={ImageHome} 
        title={
          <>
            Chez vous, <span>partout et ailleurs</span>
          </>
          
          }  opacity={0.5} />
      
      <Cards/>

      </main>
    );
 };
  export default Home