import React from 'react'
import index from './index.css'
const Footer = () => {

  const today=new Date();
  return (
    <footer>
      <p>copyright &copy; {today.getFullYear()} </p>
    </footer>
  )
}

export default Footer