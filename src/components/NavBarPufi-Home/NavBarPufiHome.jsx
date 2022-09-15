import main from "../../images/main-imagen.jpg"
import bags from "../../images/bags.png"
import logoPuff from "../../images/LogoNew.png"
import parasol from "../../images/parasol.png"
import pillow from "../../images/pillow.png"
import puff from "../../images/puff-.png"
import line from "../../images/linegray.png"

function NavBarPufiHome () {
  return (
      <div className="content-navBar">
      <div className="main">
        <ul className="nav-menu-one">
          <li>
            { <a className="nav-menu-link-one" id="cuenta"> 
              MI CUENTA{" "}
              { /*<img src={line} className="line-two" alt="flecha hacía abajo" />*/}
            </a>}
          </li>
          <li >
            <a className="nav-menu-link-one" id="compra">MI COMPRA</a>
          </li>
        </ul>
          <ul className="nav-menu">
          {<img src={logoPuff} className="logo-pufi" alt="logo" /> }
            <li>
              {<img src={puff} className="pufi-icons" alt="puff" /> }
              <a className="nav-menu-link">PUFI PUFF</a>
            </li>
            {<img src={line} className="line" alt="line" /> }
            <li>
              {<img src={parasol} className="pufi-icons" alt="sombrilla" />}
              <a className="nav-menu-link">PUFI RAIN</a>
            </li>
            {<img src={line} className="line" alt="line" /> }
            <li>
              {<img src={bags} className="pufi-icons" alt="bolsa-mercado" />}
              <a className="nav-menu-link">PUFI CART</a>
            </li>
            {<img src={line} className="line" alt="line" /> }
            <li>
              { <img src={pillow} className="pufi-icons" alt="almohada-viaje" /> }
              <a className="nav-menu-link">PUFI NAP</a>
            </li>
          </ul>
      
      </div>
      <h1 className="messege">
        ESTÁR CÓMODO,
        <br />
        NUNCA FUE TAN FÁCIL.
      </h1>
      <button className="button-shop">SHOP</button>
   
    </div>
        
      );
  }
  export default NavBarPufiHome;