import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Bannerkitfem from '../../components/bannerkitfem/Bannerkitfem';
import Menukitfem from '../../components/sub-menu-kitfem/Menukitfem';
import { Link } from 'react-router-dom';
import ListInformate from '../../components/informate/ListInformate';
import { Container } from 'react-bootstrap';
function Kitfem3() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Bannerkitfem/>
        <Menukitfem/>
        <div className="d-flex justify-content-center m-3">
        <Link to="/redvindicadas/kitfem/informate" className="btn btn-form mx-auto">Nueva serie o película</Link>
        </div>
        <ListInformate/> 
       <Container>
       <iframe src="https://open.spotify.com/embed/playlist/1u98RWfbzP0tnBkkPDORf8?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className="mb-3"></iframe>
       </Container>
        <Footer/>
    </div>
  )
}

export default Kitfem3