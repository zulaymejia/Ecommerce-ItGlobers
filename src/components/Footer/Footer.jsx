import pufi from "../../images/puffi-black1.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import security from "../../images/security.png";
import codigo from "../../images/codigo-qr.png";
import line from "../../images/linegray.png"

export default function Footer() {
  return (
    <div>
      <hr id="linea-main" />
      <footer id="container-footer">
        <div id="container-puffi">
          <img src={pufi} className="logo-black-puffi" alt="logo" />
        </div>
        <div className="sections-puffi">
          <p className="text-footer">PUFI RAIN</p>
          <p className="text-footer">PUFI PUFF</p>
          <p className="text-footer">PUFI CART</p>
          <p className="text-footer">PUFI NAP</p>
        </div>
        {<img src={line} id="line-footer" alt="line" /> }
        <div className="contacts-puffi">
          <p className="text-footer">CONTACTO</p>
          <p className="text-footer">AYUDA</p>
          <p className="text-footer">CÓMO COMPRAR</p>
          <p className="text-footer">TÉRMINOS & CONDICIONES</p>
        </div>
        {<img src={line} id="line-footer-one" alt="line" /> }
        <div className="purchase">
          <p className="text-footer">COMPRA 100% SEGURA</p>
          <img src={security} className="social-networks" alt="logo" />
          <img src={codigo} className="social-networks" alt="logo" />
        </div>
        {<img src={line} id="line-footer-two" alt="line" /> }
        <div className="follow-us">
          <p className="text-footer">SEGUINOS EN</p>
          <img src={facebook} className="social-networks" alt="logo" />
          <img src={twitter} className="social-networks" alt="logo" />
          <img src={instagram} className="social-networks" alt="logo" />
        </div>
      </footer>
      <hr id="linea-main-one" />
      <p id="text">PUFI Copyright2017 - Todos los derechos reservados</p>
    </div>

  );
}