// src/components/SubNavbar.tsx
import React from "react";

interface Props {
  setView: (view: string) => void;
}

export const SubNavbar: React.FC<Props> = ({ setView }) => (
  <div className="d-flex justify-content-center my-3">
    <button className="btn btn-outline-success mx-1" onClick={() => setView("descripcion")}>Descripción</button>
    <button className="btn btn-outline-success mx-1" onClick={() => setView("planes")}>Planes</button>
    <button className="btn btn-outline-success mx-1" onClick={() => setView("siniestro")}>¿Tienes un siniestro?</button>
    <button className="btn btn-outline-success mx-1" onClick={() => setView("condiciones")}>Condiciones</button>
  </div>
);