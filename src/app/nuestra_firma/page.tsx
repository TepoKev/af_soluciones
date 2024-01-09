import React from "react";
import Section from "../components/Section";
import NuestraFirmaImg from "../../../public/firma.jpg";

function NuestraFirma() {
  return (
    <Section
      title="Nuestra Firma"
      srcImg={NuestraFirmaImg.src}
      id="nuestra_firma"
      textColor="text-gray-700"
    >
      <div>
        <div className="text-center">
          <h2>Nuestros Socios</h2>
        </div>
        <div>
          <h3>Nubia Montes de Flores</h3>
          <p>
            Profesional en Contaduría Pública con Maestría en Análisis
            Financiero de la Universidad Carlos III de Madrid.
          </p>
          <p>
            Consultor y asesor financiero de empresas privadas en áreas de
            finanzas, contabilidad, impuestos y mejoras de procesos, NIIF, NIIF
            PYMES, Due Diligence financiero y cumplimientos tributarios.
          </p>
          <p>
            Preparación y presentación de estados financieros con base en NIIF
            Full y NIIF Pymes. Revisión y análisis de indicadores financieros,
            preparación y presentación de reportes financieros. Inscrita como
            Contador Público y como Auditor en el CVPCPA (Consejo de Vigilancia
            de la Profesión de Contaduría Pública y Auditoria).
          </p>
        </div>
        <div>
          <h3>Elizabeth de Arce</h3>
          <p>
            Profesional en Contaduría Pública con ________________, especialista
            en servicios de BPO, impuestos y aspectos tributarios a nivel local
            e internacional (Estados Unidos).
          </p>
          <p>
            Preparación y presentación de estados financieros con base en USGAAP
            y NIIF.
          </p>
          <p>
            Cuenta con amplia experiencia en contaduría pública, impuestos,
            auditoría interna e impuestos de IRS para Estados Unidos.
          </p>
          <p>
            Inscrita en ______________ para la presentación de impuestos en
            Estados Unidos.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h2>NUESTRO EQUIPO</h2>
      </div>
    </Section>
  );
}

export default NuestraFirma;
