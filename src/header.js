import './App.css';
import React from 'react';

export default function Header(props){
   

    return (
       <div id={props.theme ? "header-light" : "header-dark"}><img className='earth' src="/earth.svg" alt="earth logo"/>
         My Travel Journey
        </div> 
    )
}