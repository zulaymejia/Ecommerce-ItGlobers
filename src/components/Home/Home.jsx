import "./Home.css"
import NavBarPufiHome from "../NavBarPufi-Home/NavBarPufiHome";
import Espufi from "../Espufi/Espufi"
import PufiRain from "../PufiRain/PufiRain";
import PufiPuff from "../PufiPuff/PufiPuff";
import PufiCart from "../PufiCart/PufiCart";
import PufiNap from "../PufiNap/PufiNap";
import Footer from "../Footer/Footer";


export const Home = () => {
  return (
    <div className="content-home">
            <NavBarPufiHome/>
            <PufiRain/>
            <PufiPuff/>
            <PufiCart/>
            <PufiNap/>
            <Espufi/>
            <Footer/>
     </div>
  );
};

export default Home;