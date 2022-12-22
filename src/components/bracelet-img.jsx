import React from 'react'
import '../styles/bracelet.css'

const BraceletImg = (props) => {
    const {isBig, brImg} = props
    return <div>
        <img className= {!isBig? "img-small" : "img-big"} 
        src={brImg}/>
    </div>
}

export {BraceletImg}