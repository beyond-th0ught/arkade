import React from 'react'
import Header from './component/header'
import Navbar from './component/navbar'
import Home from './component/home'
import Info from './component/info'

export default function main() {
  return (
    <div>
        <div>
            <Header/>
            <Navbar/>
            <Home/>
            <Info/>
        </div>
    </div>
  )
}
