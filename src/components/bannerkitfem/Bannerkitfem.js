import React from 'react'
import './Bannerkitfem.css';
import vector1 from "../../icons/iconsKit/vector1-home.svg"
import vector6 from "../../icons/iconsKit/vector6-home.png"

function Bannerkitfem() {
  return (
    <div>
        <div className='bannerkitfem'>
        <img src={vector1} className='vector-left-banner' alt=''/>
            <h2>!NO SOY LA MUSA
            SOY LA ARTISTA!</h2>
            <img src={vector6} className='vector-rigth-banner' alt=''/>
        </div>
    </div>
  )
}

export default Bannerkitfem