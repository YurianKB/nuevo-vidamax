import { Accordion } from "./Accordion";
import { GreenButton } from "../components/Button";

export const Footer = () => (
  <footer>
    <div className="container py-4">
      <div className="row">
        <div className="col-12 col-md-4 text-center text-md-start">
          <Accordion parentId="accordionLineas" variant="footer" className="variant-footer show" items={[{ id: "lineaSeguros", title: <span className="text-green text-bold">Línea de Seguros Azteca</span>, content: (
                  <>
                    <a href="#" className="text-green text-bold text-extra-big"><u>55 1720 9854</u></a><br /><br />
                    <GreenButton onClick={() => alert("Botón 1")}>Escríbenos por Whatsapp</GreenButton>
                    <p className="my-3">
                      <span className="text-bold text-small mt-2">Disponible las 24 horas, 365 días del año.<br />
                      <a href="mailto:infoseguros@segurosazteca.com.mx">
                        infoseguros@segurosazteca.com.mx
                      </a></span><br /><br />
                      <span className="text-green text-bold text-small">Visítanos en nuestras redes</span>
                    </p>
                    <hr />
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="col-12 col-md-4 text-center text-md-start">
          <Accordion
            parentId="accordionLegales"
            variant="footer"
            className="variant-footer show"
            items={[
              {
                id: "legales",
                title: <span className="text-green text-bold">Legales</span>,
                content: (
                  <>
                    <a href="#" className="text-small">Unidad especializada</a><br /><br />
                    <a href="#" className="text-small">Condiciones Generales</a><br /><br />
                    <a href="#" className="text-small">Términos y Condiciones</a><br /><br />
                    <a href="#" className="text-small">Aviso de Privacidad</a><br /><br />
                    <a href="#" className="text-small">Ejerce tus derechos ARCO</a><br /><br />
                    <a href="#" className="text-small">Políticas del ajustador</a><br /><br />
                    <a href="#" className="text-small">CONDUSEF</a>
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="col-12 col-md-4 text-center text-md-start">
          <Accordion
            parentId="accordionSobre"
            variant="footer"
            className="variant-footer show"
            defaultOpen={true}
            items={[
              {
                id: "sobreNosotros",
                title: <span className="text-green text-bold">Sobre Seguros Azteca</span>,
                content: (
                  <>
                    <a href="#" className="text-small">¿Quiénes somos?</a><br /><br />
                    <a href="#" className="text-small">Preguntas Frecuentes</a><br /><br />
                    <Accordion
                      parentId="accordionEstadosFinancieros"
                      items={[
                        {
                          id: "estadosFinancieros",
                          title: "Estados de cuenta Financieros",
                          content: (
                            <ul>
                              <li className="text-small">Seguros Azteca</li><br />
                              <li className="text-small">Seguros Azteca Daños</li><br />
                            </ul>
                          ),
                        },
                      ]}
                    />
                    <a href="#" className="text-small">Educación Financiera</a><br /><br />
                    <a href="#" className="text-small">Trabaja con nosotros</a><br /><br />
                    <a href="#" className="text-small">Mapa de sitio</a><br /><br />
                    <a href="#" className="text-small">Otros sitios</a>
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="col">
            <p className="text-green text-bold text-small text-center">Seguros Azteca 2025 Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
);