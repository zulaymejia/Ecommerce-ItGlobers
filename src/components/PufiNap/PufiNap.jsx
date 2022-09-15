import pillow from "../../images/pillow-icon3.png"
//import puffPuffi from "../../images/puff-pufi.jpg"
export default function PufiNap() {
  return (
    <div className="container-principal">
      {" "}
      <div className="cluster-puff">
        <img src={pillow} className="puff-icon" alt="pillow" /> <h3>Pufi NAP</h3>
        <p className="prueba1">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-puff"> VER MAS</p>
      </div>
      <div className="pufiNap">
        {" "}
        {/*<img src={puffPuffi} className="puff" alt="puff" />*/}
      </div>
    </div>

  );
}
