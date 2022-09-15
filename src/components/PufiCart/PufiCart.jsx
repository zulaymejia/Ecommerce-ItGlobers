import bags from "../../images/bags-icon.png"

const PufiCart = () => {
    return (
      <div className="container-rain">
        <div className="container-imgCart">
        </div>
        <div className="prueba">
        {<img src={bags} className="parasol-rain" alt="parasol" />}
          <h3>Pufi CART</h3>
          <hr className="linea-rain" />
          <p className="prueba1">
            Descripción del producto. Este es <br />
            un texto simulado
          </p>
          <p className="parrafo-rain"> VER MAS </p>
        </div>
      </div>
    );
  };
  
  export default PufiCart;
  