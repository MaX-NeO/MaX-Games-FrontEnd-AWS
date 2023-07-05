import React from 'react'
import Loader from '../components/loader'
import Slide from '../components/Slide'
import Category from '../components/Category'

export default function Home() {
  return (
    <>
      <Loader />
      <div className='main'>


        <Slide/>
        <Category/>
        {/* <div className='test-high'>Hello World !</div> */}
      </div>
    </>
  )
}
