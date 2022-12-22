import React from 'react'
import '../styles/select-details.css'


const KnotDetails = (props) => {
    const {isInput} = props;
    return isInput ? ( <div class="model-details">
    <h3 class="title">TU MANILLA</h3>
    <p class="material"><b>Material:</b></p>
    <select class="knot-details" id="material-selector">
        <option value="Hilo Chino">Hilo Chino</option>
        <option value="Hilo Vibora">Hilo Víbora</option>
        <option value="Cordón">Cordón</option>
    </select>
    <p class="knot-details" id="br-width"><b>Ancho: </b>12mm</p>
        <p className='colors-details'><b>Colores:</b></p>
    <ol className='colors-list'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ol>
    </div>):(<div class="model-details">
        <h3 class="title">MODELO</h3>
        <p class="material"><b>Material:</b></p>
        <p class="knot-details"> Hilo Chino</p>
        <p class="knot-details" id="br-width"><b>Ancho: </b>12mm</p>
            <p className='colors-details'><b>Colores:</b></p>
        <ol className='colors-list'>
            <li>Rosado</li>
            <li>Rosado</li>
            <li>Blanco</li>
            <li>Blanco</li>
        </ol>
    </div>)
}

export { KnotDetails }

