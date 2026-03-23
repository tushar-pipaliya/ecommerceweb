import React, { useState } from 'react'
// import Hero from './slider/Hero'
import Hero from './slider/Hero'
import TopRated from './topRated/TopRated'
import Category from './category/Category'
import LatestElectronic from './latestelectronic/LatestElecronic'
// import ViewDetails from '../viewDetails/ViewDetails'
const LayOut = ({mainLayOutRecive}) => {
  const [dataFromTopRated, setDataFromTopRated] = useState([])

  const receiveDataFromTopRated = (arr) =>{
    setDataFromTopRated(arr)
  }



  console.log(dataFromTopRated, 'dataFromTopRated')
  return (
    <div>
      <Hero/>
      <TopRated/>
      <Category/>
      <LatestElectronic/>
      {/* <ViewDetails/> */}
    </div>
  )
}

export default LayOut
