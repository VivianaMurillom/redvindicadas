import React from 'react'
import  {Link}  from 'react-router-dom';
import './Menukitfem.css';
import Arengas from "../../icons/iconsKit/kitfemnav4.png"
import Informate from "../../icons/iconsKit/kitfemnav3.png"
import Stickers from "../../icons/iconsKit/kitfemnav2.png"
import Posters from "../../icons/iconsKit/kitfemnav1.png"

function Menukitfem() {
  return (
    <div className='nav-space'>
        <div className='little-nav'>
        <div class="unit-nav-1">
			<Link to='/redvindicadas/kitfem'>
             <img src={Posters} className="kitfemnav1" alt=''/>
				<p>Posters</p>
			</Link>
		</div>
            <div className='unit-nav-1'>
                <Link to='/redvindicadas/kitfem2' className="kitfemnav1">
                    <img src={Arengas} alt=''/>
                    <p>Arengas</p>
                </Link>
            </div>
            <div className='unit-nav-2'>
            <Link to='/redvindicadas/kitfem3' className='kitfemnav1'>
                    <img src={Informate} alt=''/>
                    <p>Entretenimiento</p>
                </Link>
            </div>
            <div className='unit-nav-3'>
            <Link to='/redvindicadas/kitfem4' className='kitfemnav1'>
                    <img src={Stickers} alt=''/>
                    <p>Stickers</p>
            </Link>
            </div>
        </div>	
        </div>
  )
}

export default Menukitfem