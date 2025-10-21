// src/views/Descripcion.tsx
import vidamaxImage from "../assets/images/vidamax-image.png"; // 👈 importa la imagen
import { Accordion } from "../components/Accordion";

export const Descripcion = () => {
  const items = [
    {
      id: "flush-collapseOne",
      title: "¿Qué cubre el seguro?",
      content: (
        <ul>
          <li>Beneficio económico para tu familia de acuerdo al plan elegido...</li>
          <li>
            Servicio funerario sin costo adicional que cubre:
            <ol>
              <li>Asesoría jurídica testamentaria vía telefónica</li>
              <li>Gestión de trámites por el fallecimiento</li>
              <li>Recolección del cuerpo</li>
              <li>Arreglo estético del cuerpo</li>
              <li>Sala de velación</li>
              <li>Inhumación (ataúd metálico y traslado en carroza)</li>
            </ol>
          </li>
          <li>Liquida el adeudo de tu Crédito con Banco Azteca</li>
        </ul>
      ),
    },
    {
      id: "flush-collapseTwo",
      title: "¿Cómo puedes pagarlo?",
      content:
        "Dependiendo de la periodicidad del crédito en cualquier sucursal de Banco Azteca o Elektra al momento de adquirir el crédito.",
    },
    {
      id: "flush-collapseThree",
      title: "¿Cuánto dura el seguro?",
      content: "La misma duración del crédito solicitado.",
    },
    {
      id: "flush-collapseFour",
      title: "¿Qué necesitas para contratar?",
      content: (
        <ul>
          <li>Tener entre 18 y 75 años</li>
          <li>Contar con un Préstamo Personal o Crédito al Consumo</li>
        </ul>
      ),
    },
    {
      id: "flush-collapseFive",
      title: "¿Qué no cubre el seguro?",
      content: "Suicidio (revisar todas las exclusiones en las condiciones generales).",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <p>
            <span className="text-green text-bold">Cuidamos de tu familia
            Apoyo económico para tu familia en caso de fallecimiento natural o
            accidental.</span> 
          </p>

          <Accordion items={items} />

          <button className="btn btn-primary mt-3">Regresar</button>
        </div>
        <div className="col-4">
          <img src={vidamaxImage} alt="Familia sonriendo junta" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};