import bags from "../../images/bags-icon.png"

const PufiCart = () => {
    return (
      <div className="container-rain">
        <div className="container-imgCart">
        </div>
        <div className="details">
        {<img src={bags} className="parasol-rain" alt="parasol"/>}
          <h3 className="text-paff">Pufi CART</h3>
          <hr className="linea-rain" />
          <p className="description">
            Descripción del producto. Este es <br/>
            un texto simulado
          </p>
          <p className="parrafo-rain" > &gt; VER MÁS </p>
        </div>
      </div>
    );
  };
  
  export default PufiCart;
  