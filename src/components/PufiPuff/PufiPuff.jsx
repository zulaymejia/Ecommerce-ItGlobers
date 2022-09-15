import puff from "../../images/puff-icon.png"

export default function PufiPuff() {
  return (
    <div className="container-principal">
      {" "}
      <div className="cluster-puff">
        <img src={puff} className="puff-icon" alt="puff"/> 
        <h3 className="text-paff">Pufi PUFF</h3>
        <p className="description">
          Descripción del producto. Este es <br /> un texto simulado
        </p>
        <p className="parrafo-rain">  &gt; VER MÁS</p>
      </div>
      <div className="puff">
        {" "}
      </div>
    </div>
  );
}




