import parasol from "../../images/parasol3.png"

const PufiRain = () => {
    return (
      <div className="container-rain">
        <div className="container-img">
        <button className="button-shop" >SHOP</button>
        </div>
        <div className="details">
        {<img src={parasol} className="parasol-rain" alt="parasol"/>}
        <hr className="linea-rain" />
          <h3 className="text-paff">Pufi RAIN</h3>
          <hr className="linea-rain" />
          <p className="description">
            Descripción del producto. Este es <br/>
            un texto simulado
          </p>
          <hr className="linea-rain" />
          <hr className="linea-rain" />
          <hr className="linea-rain" />
          <p className="parrafo-rain">&gt;VER MÁS </p>
        </div>
      </div>
    );
  };
  
  export default PufiRain;
  