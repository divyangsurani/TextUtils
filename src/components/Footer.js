import React from 'react'
import { FaPhone} from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'


function footer() {
  return (
<div className="fixed-bottom" >
        <footer className="footer mt-auto py-3 bg-dark">
          <div className="container text-left text-light" align="center ">
              Made By 😎 Divyang Surani &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
            <SocialIcon url="https://github.com/divyangsurani" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.instagram.com/__imdivyang13/"style={{height:'40px',width:'40px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://twitter.com/DivyangSur47663?t=brS1xIiBo1DBKZN0B9LQMQ&s=09"style={{height:'40px',width:'40px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://www.facebook.com/divyang.surani.1" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://divyangsurani49@gmail.com/" style={{height:'40px',width:'40px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="tel:+91-9328158761" style={{textDecoration:"none"}}><FaPhone/>&nbsp;&nbsp;9328158761</a>
          </div>
        </footer>
      </div>
      )
}

export default footer   