import React from 'react'
import './Header.css'
import header from '../../assets/header.jpg'

const Header = ({ heading }) => {
  return (
    <>
      <section className='header' style={{backgroundImage:`url(${header})`, backgroundSize:"cover", backgroundPosition:"fixed"}}>
         <h1>{heading}</h1>
         <p>Lorem ipsum dolar sit amet consectetur, adipisicing elit.
         </p>
      </section>
    </>
  )
}

export default Header
