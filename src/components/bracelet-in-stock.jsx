import React from 'react'
import '../styles/bracelet.css'
import { BraceletImg } from './bracelet-img'

export const BraceletInStock = (props) => {
    const {bracelet} = props
    return <div className='bracelet-in-stock'>
        <div className="img-container">
            <BraceletImg brImg={bracelet.image}/>
            <div className="img-bg"></div>
          </div>
        <div className="price">
            <h4>{bracelet.price}</h4>
        </div>
    </div>
}