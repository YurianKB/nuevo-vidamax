import React, { useState } from "react";
import { Accordion } from "../components/Accordion";

export const Siniestro = () => {
  const [activeTab, setActiveTab] = useState("fallecimiento");

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-7">
          <p>
            <span className="text-green text-bold">
              Pasos a seguir en caso de siniestro
            </span>
            <br />
            Selecciona el tipo de cobertura o plan que contrataste y consulta lo que debes hacer:
          </p>

          <div className="d-flex justify-content-start gap-3 my-4">
            <button
              className={`btn green-button-tab text-green text-bold text-small ${
                activeTab === "fallecimiento" ? "border-bottom border-success" : ""
              }`}
              onClick={() => setActiveTab("fallecimiento")}
            >
              Fallecimiento
            </button>
            <button
              className={`btn green-button-tab text-green text-bold text-small ${
                activeTab === "funerario" ? "border-bottom border-success" : ""
              }`}
              onClick={() => setActiveTab("funerario")}
            >
              Servicio Funerario
            </button>
          </div>
          {activeTab === "fallecimiento" && (
            <div>
              <ol>
                <li>
                  El <span className="text-bold">beneficiario</span> acude a la sucursal Elektra o Banco Azteca más cercana y reporta el fallecimiento del Asegurado.
                </li>
                <li>
                  El <span className="text-bold">ejecutivo</span> registra el siniestro en el portal de Siniestros de Seguro Azteca.
                </li>
                <li>
                  El <span className="text-bold">ejecutivo</span> imprime el checklist de los documentos.
                </li>
                <li>
                  El <span className="text-bold">beneficiario</span> reúne todos los documentos y acude a la sucursal.
                </li>
                <li>
                  <span className="text-bold">Seguros Azteca</span> recibe los documentos y emite dictamen.
                </li>
              </ol>
              <p>
                <span className="text-bold">Tiempo de respuesta:</span> 17 días hábiles una vez que los documentos estén completos.
              </p>
            </div>
          )}
          {activeTab === "funerario" && (
            <div>
              <ol>
                <li>
                  El <span className="text-bold">solicitante</span> llama a la línea de Seguros Azteca al 1720 9854.
                </li>
                <li>
                  El <span className="text-bold">ejecutivo</span> valida que la póliza siga vigente.
                </li>
                <li>
                  El <span className="text-bold">ejecutivo</span> solicita los siguientes datos:
                </li>
              </ol>
              <ul>
                <li>Nombre completo del finado</li>
                <li>Número de póliza</li>
                <li>Nombre del solicitante</li>
                <li>Teléfonos de contacto</li>
              </ul>
              <ol start={4}>
                <li>
                  El <span className="text-bold">ejecutivo</span> transfiere la llamada al prestador del Servicio Funerario.
                </li>
                <li>
                  El <span className="text-bold">solicitante</span> deberá presentar:
                </li>
              </ol>
              <ul>
                <li>Certificado de defunción</li>
                <li>Identificación Oficial del Finado</li>
                <li>“Acuse de recibo” de documentos</li>
              </ul>
            </div>
          )}
          <div className="mt-5">
            <Accordion
              parentId="accordionLineaSeguros"
              variant="footer"
              className="variant-main show"
              items={[
                {
                  id: "lineaSeguros",
                  title: (
                    <span className="text-green text-bold">
                      Lista de documentos en caso de fallecimiento
                    </span>
                  ),
                  content: (
                    <p className="my-3">
                      <span className="text-small mt-2">
                        Formato de reclamación (se entrega en tienda)<br />
                        Original<br /><br />
                        Acta de defunción del Asegurado<br />
                        Original<br /><br />
                        Certificado de defunción expedido por la Secretaría de Salud<br />
                        Copia<br /><br />
                        INE del asegurado por ambos lados<br />
                        Copia<br /><br />
                        Acta de nacimiento del asegurado<br />
                        Original<br /><br />
                        Acta de nacimiento del beneficiario<br />
                        Original<br /><br />
                        INE del beneficiario (ambos lados legible)<br />
                        Copia<br /><br />
                        Comprobante de domicilio del beneficiario (no mayor a 3 meses)<br />
                        Copia<br /><br />
                        En caso de accidente, se requieren documentos adicionales.
                      </span>
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};