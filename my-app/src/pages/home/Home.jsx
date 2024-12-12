import React from 'react'
import Header from '../../components/header/Header'
import Started from '../../components/started/Started'
import Info from '../../components/info/Info'
import Details from '../../components/details/Details'
import Some from '../../components/some/Some'
import Data from '../../components/data/Data'


const Home = () => {
  return (
    <div>
        <Header/>
        <Started/>
        <Info/>
        <Details/>
        <Some/>
        <Data/>
    </div>
  )
}

export default Home