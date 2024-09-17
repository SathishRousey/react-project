import React, { Component } from 'react'
import './Footer.css'
export default class Footerclass extends Component {
  render() {
    const footer = [
        {
          heading: "https://www.achieversit.com/assets/images/logo-white.png",
          links: [
          { name:"AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidates who can develop their skills and build their career opportunities across multiple Companies."
          }
          ]
        },
        {
          heading: "Company",
          links: [
          {name:"Home"},
          {name:"Placements"},
          {name:"Corporate Training"},
          {name:"Contact US"},
          
        ]
        },
        {
          heading: "TRENDING COURSES",
          links: [
          {name:"UI Development Course"},
          {name:"UI Angular JS Course"},
          {name:"React JS Course"},
          {name:"Digital Marketing Course"},
          {name:"Python Course"},
    
           
          ]
        },{
          heading:"CONTACT INFO",
          links:[
            {
              name:"#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029",
    
            },
            {name:"India : +91 8431-040-457"},
            {name:"info@achieversit.com"}
          ]
        }
      ];
    
    return (
        <footer>
        {footer.map((section, index) => (
          <div  key={index}>
            {section.heading.startsWith('http') ? (
              <img src={section.heading} alt="Logo" style={{ width: '150px', height: 'auto' }} />
            ) : (
              <h2 className='heading' >{section.heading}</h2>
            )}
            <ul>
              {section.links.map((link, i) => (
                <li className='lists' key={i}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
        
    
    )
  }
}
