import React from "react";

interface Props {
  setView: (view: string) => void;
}

export const SubNavbar: React.FC<Props> = ({ setView }) => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-7">
        <p className="text-bold">Nuevo Vidamax</p>
        <div className="d-flex justify-content-center my-3 flex-wrap">
          <button className="btn mx-1 text-green text-bold" onClick={() => setView("descripcion")}>Descripción</button>
          <button className="btn mx-1 text-green text-bold" onClick={() => setView("planes")}>Planes</button>
          <button className="btn mx-1 text-green text-bold" onClick={() => setView("siniestro")}>¿Tienes un siniestro?</button>
          <button className="btn mx-1 text-green text-bold" onClick={() => setView("condiciones")}>Condiciones</button>
        </div>
      </div>

      <div className="col-5 text-end">
      </div>
    </div>
  </div>
);