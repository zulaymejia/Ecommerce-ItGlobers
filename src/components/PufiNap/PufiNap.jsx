import pillow from "../../images/pillow-icon3.png"

export default function PufiNap() {
  return (
    <div className="container-principal">
      {" "}
      <div className="cluster-puff">
        <img src={pillow} className="puff-icon" alt="pillow" />
         <h3 className="text-paff">Pufi NAP</h3>
        <p className="description">
          Descripción del producto. Este es <br/> un texto simulado
        </p>
        <p className="parrafo-rain"> &gt; MÁS INFO</p>
      </div>
      <div className="pufiNap">
        {" "}
      </div>
    </div>
  );
}
