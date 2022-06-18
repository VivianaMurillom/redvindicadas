import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Bannerkitfem from '../../components/bannerkitfem/Bannerkitfem';
import Menukitfem from '../../components/sub-menu-kitfem/Menukitfem';
import Posters from '../../components/posters/Posters';

function Kitfem(){
    return(
       <div>
        <Header/>
        <Navbar/>
        <Bannerkitfem/>
        <Menukitfem/>
        <Posters/>
        <Footer/>
       </div>
    );
}

export default Kitfem;