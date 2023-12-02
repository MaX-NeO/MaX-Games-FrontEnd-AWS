import React, { Suspense } from 'react'
import Loader from '../components/loader'
import Slide from '../components/Slide'
import Category from '../components/Category'

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <div className='main'>
        <Slide />
        <Category />
      </div>
      </Suspense>
    </>
  )
}
