import React from "react";

interface Props {
  view: string;
  setView: (view: string) => void;
}

export const SubNavbar: React.FC<Props> = ({ view, setView }) => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-7">
        <p className="text-bold text-extra-big my-4">Nuevo Vidamax</p>
        <div className="d-flex justify-content-center flex-wrap subnavbar">
          <button
            className={`btn btn-subnavbar mx-1 text-bold text-small ${view === "descripcion" ? "active-tab" : "text-green"}`}
            onClick={() => setView("descripcion")}
          >
            Descripción
          </button>

          <button
            className={`btn btn-subnavbar mx-1 text-bold text-small ${view === "planes" ? "active-tab" : "text-green"}`}
            onClick={() => setView("planes")}
          >
            Planes
          </button>

          <button
            className={`btn btn-subnavbar mx-1 text-bold text-small ${view === "siniestro" ? "active-tab" : "text-green"}`}
            onClick={() => setView("siniestro")}
          >
            ¿Tienes un siniestro?
          </button>

          <button
            className={`btn btn-subnavbar mx-1 text-bold text-small ${view === "condiciones" ? "active-tab" : "text-green"}`}
            onClick={() => setView("condiciones")}
          >
            Condiciones
          </button>
        </div>
      </div>
    </div>
  </div>
);