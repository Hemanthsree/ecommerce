import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div >
      <h2 className='d-flex justify-content-center'>Welcome to Store</h2>
      <section>
        <h3 className='d-flex justify-content-center'>Products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
