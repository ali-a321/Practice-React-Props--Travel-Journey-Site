import './App.css';
import React from 'react';


export default function Info(props){
    return (
        <div className='wholeContainer'>
            <div className='pictureContainer'> <img src={props.item.imageUrl} alt ="woo" className='picture'/>  </div>
            <div className='infoContainer'> 
                <div className='location'> <img className='map' src='/map.svg' alt='ping'/> {props.item.location} <a className='anchor' href= {props.item.googleMapsUrl}>View on Google Maps</a> </div>
                <div className='title'> {props.item.title} </div>
                <div className='date'> {props.item.startDate} - {props.item.endDate} </div>
                <div className='description'> {props.item.description} </div>
            </div>
        </div>

    )
}

