"use client";
import ServiciosImg from "../../../public/shutterstock_2072821730-scaled.jpeg";
import Accordion from "../components/Accordion";
import Section from "../components/Section";
import Element from "../classes/AccordElement";

const OutSourcingElements = [
  new Element(
    "Creemos en crear valor a través de la mejora continua de procesos. Ofrecemos los siguientes servicios:",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Registro de la información utilizando estándares y técnicas
            contables de acuerdo con su industria.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Preparación y procesamiento de transacciones.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Preparación y presentación de auxiliares.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Le asesoramos sobre la información requerida por nosotros para el
            flujo de trabajo eficaz y el cumplimiento efectivo del servicio.
          </span>
        </li>
      </ul>
    )
  ),
  new Element(
    "Apoyamos a la administración de su empresa con nuestras habilidades incluyendo:",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Puesta en marcha de negocios.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Registro contable.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Información financiera periódica.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoría y supervisión contable.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoría y supervisión del cumplimiento de obligaciones tributarias.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Diseño e implantación de sistemas contables y de control.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Reorganización contable y depuración de cuentas.
          </span>
        </li>
      </ul>
    )
  ),
  new Element(
    "Auditoria Externa",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditoría de estados financieros
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditoría fiscal
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditoría de estados contables consolidados
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditoria de entidades financieras
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditorias con aplicación de NIIF y NIIF PYMES
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditoría Interna
          </span>
        </li>
      </ul>
    )
  ),
  new Element(
    "Due diligence",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditorias de compra - venta de empresas (due diligence).
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">aa</span>
        </li>
      </ul>
    )
  ),
];

const ImpuestosElements = [
  new Element(
    "Algunas de las áreas en las cuales podemos ayudarle son:",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Preparación de declaraciones de Impuestos fiscales y municipales.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Auditorías y revisiones fiscales para propósitos determinados.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asistencia y colaboración en la atención de inspecciones de los
            organismos fiscales.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoramiento de residentes extranjeros en El Salvador.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoramiento en la preparación de consultas frente a las
            autoridades fiscales.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asistencia y asesoramiento en la preparación de solicitudes de
            reintegro y devolución de impuestos.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Definición del marco legal y la estructura fiscal.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoría continua sobre cambios en la legislación fiscal.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Interpretación de leyes fiscales.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Inventarios de Activo Fijo.
          </span>
        </li>
      </ul>
    )
  ),
];

const OutSourcingProcesosElements = [
  new Element(
    "Nuestro equipo está en condiciones de brindarle la mejor solución en cualquier materia y optimizar cualquier proceso.",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Revisiones limitadas de estados financieros
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Realización de procedimientos acordados
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Adopción de Normas Internacionales de Información Financiera (NIIF)
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Adopción de Normas Internacionales de Información Financiera para
            Pequeñas y Mediadas Entidades (NIIF PYMES)
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Compilación de estados financieros
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asistencia en elaboración de estados financieros consolidados
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoría contable y financiera
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Asesoría en NIIF o NIIF PYMES
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Elaboración y autorización de sistemas contables
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Legalizaciones de libros que deben llevar los comerciantes
          </span>
        </li>
      </ul>
    )
  ),
];

const NominaElements = [
  new Element(
    "todo a la medida de nuestros clientes, incluyendo:",
    (
      <ul className="list-disc p-5">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Procesamiento de datos e incidencias para la confección y emisión de
            un reporte de nómina o planilla.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Preparación y cálculo de cargas sociales e impuestos de acuerdo con
            la legislación y de acuerdo con los beneficios adicionales que
            establezca su empresa.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Recepción de dudas que presente el cliente durante la emisión
            preliminar de la planilla o en su defecto la aprobación de esta.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Garantía que el archivo de pago fue adecuadamente subido.
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Cálculo y determinación del impuesto sobre la renta a los salarios
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Elaboración del reporte de nómina para las autoridades de la
            seguridad social (ISSS)
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Elaboración y presentación de informes de impuesto sobre la renta a
            los salarios ante las autoridades AFPs
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Comprobantes empleados: Se entrega el comprobante de cálculo a cada
            empleado para la verificación y soporte de esta mediante archivos
            debidamente encriptados.
          </span>
        </li>
      </ul>
    )
  ),
];

function NuestrosServicios() {
  return (
    <Section
      title="Nuestros Servicios"
      srcImg={ServiciosImg.src}
      id="nuestros_servicios"
    >
      <div className="p-4">
        <header className="text-5xl text-start">
          <div className=" border-l-8  border-l-[#f2c614] ">
            <span>
              Nuestros
              <br />
              <span className="border-r-8 border-r-[#f2c614]">Servicios</span>
            </span>
          </div>
        </header>
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-center p-2">
            Outsourcing Contable
          </h1>
        </div>
        <div>
          <p>
            Le brindamos un servicio contable con excelencia en calidad,
            puntualidad y resultados, mediante la preparación y presentación de
            información financiera necesaria para la apropiada toma de
            decisiones.
          </p>
          <p>
            Tenemos amplia experiencia en el área de servicios contables, desde
            su registro diario hasta su optimización. Por ello le brindamos los
            medios necesarios para asegurar un mejor procesamiento de sus
            finanzas y un acompañamiento en tu plan de negocios y logro de tus
            objetivos.
          </p>
          <Accordion elements={OutSourcingElements} />
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-center p-2">
              Impuestos
            </h1>
          </div>
          <p>
            Mantenemos comunicación constante con nuestro cliente con el fin de
            mantenerles informados sobre cambios en la Legislación Fiscal.
            Conocer la información actualizada que permita comprender la
            legislación fiscal es prioritario para que nuestros clientes cumplan
            con ella a conformidad.
          </p>
          <Accordion elements={ImpuestosElements} />
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-center p-2">
              Outsourcing de Procesos
            </h1>
          </div>
          <p>
            En muchas oportunidades las organizaciones necesitan tercerizar
            ciertos procesos que, por su dificultad u oportunidad, resulta
            conveniente o más eficiente que sean ejecutados y administrados por
            un tercero a dicha organización.
          </p>
          <Accordion elements={OutSourcingProcesosElements} />
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-center p-2">Nómina</h1>
          </div>
          <p>
            Administramos la nómina de su empresa mediante un proceso estándar y
            centralizado. Nos encargamos de todo el ciclo de nómina, incluyendo
            reportes y pagos.
          </p>
          <Accordion elements={NominaElements} />
        </div>
      </div>
    </Section>
  );
}

export default NuestrosServicios;
