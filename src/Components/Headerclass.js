import React, { Component } from 'react'
import './Header.css'
export class Headerclass extends Component {
  
  render() {
    const headerLinks = ['Home', 'About', 'Contact', 'Reviews'];
    headerLinks.push(['Blogs'])
    return (
          <nav className='nav-head'>
      <img src='https://www.achieversit.com/assets/images/logo-white.png' alt='ima'></img>
      <ul>
        {headerLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
    )
  }
}

export default Headerclass
