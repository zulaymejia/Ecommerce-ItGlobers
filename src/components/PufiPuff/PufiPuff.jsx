import puff from "../../images/puff-icon.png"
//import puffPuffi from "../../images/puff-pufi.jpg"
export default function PufiPuff() {
  return (
    <div className="container-principal">
      {" "}
      <div className="cluster-puff">
        <img src={puff} className="puff-icon" alt="puff" /> <h3>Pufi PUFF</h3>
        <p className="prueba1">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-puff"> VER MAS</p>
      </div>
      <div className="puff">
        {" "}
        {/*<img src={puffPuffi} className="puff" alt="puff" />*/}
      </div>
    </div>

  );
}




