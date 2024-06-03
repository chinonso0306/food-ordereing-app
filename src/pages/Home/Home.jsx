import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
    const [catname, setcatname,] = useState("")
     const category=(i)=>{
      console.log(i);
      setcatname(i)
     }
  return (
    <div>
      <Header/>
      <ExploreMenu category={category}/>
      <FoodDisplay category={catname}/>
      <AppDownload/>
    </div>
  )
}

export default Home
