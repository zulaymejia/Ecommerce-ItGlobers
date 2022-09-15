import parasol from "../../images/parasol3.png"

const PufiRain = () => {
    return (
      <div className="container-rain">
        <div className="container-img">
        <button className="button-shop" >SHOP</button>
        </div>
        <div className="prueba">
        {<img src={parasol} className="parasol-rain" alt="parasol" />}
          <h3>Pufi RAIN</h3>
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
  
  export default PufiRain;
  