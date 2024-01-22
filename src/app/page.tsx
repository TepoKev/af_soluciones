import AbogadosImg from "../../public/wCiixoQMuZY.jpeg";
import afLogo from "../../public/af_hands.png";
import Section from "./components/Section";

export default function Home() {
  return (
    <Section
      title="¿Quienes Somos?"
      srcImg={AbogadosImg.src}
      id="quienes_somos"
    >
      <div className="flex flex-row-reverse items-center lg:flex-row">
        <div className="flex lg:flex-col pt-8 pb-8 pl-8">
          <header className="text-5xl text-start">
            <div className=" border-l-8  border-l-[#f2c614] ">
              <span>
                ¿Quienes
                <br />
                <span className="border-r-8 border-r-[#f2c614]">Somos?</span>
              </span>
            </div>
          </header>
          <div>
            <p className="my-8">
              “Somos un grupo de profesionales ofreciendo confianza, estabilidad
              y credibilidad en el trabajo que ofrecemos”
            </p>
            <p className="">
              En AF Soluciones Financieros nos especializamos en Contabilidad,
              Impuestos, Nómina, Consultoría, Servicios de Auditoria Financiera
              y Fiscal a nivel local y a nivel internacional en Estados Unidos,
              abarcando así los pilares fundamentales para toda organización,
              desarrollados con nuestro acompañamiento experto y proactivo.
            </p>
            <p>
              Apoyamos a nuestros clientes, y somos capaces de impulsar todo
              nuestro conocimiento y habilidades de nuestra gente con el
              propósito de convertirnos en su mejor aliado ocupándose usted del
              negocio y nosotros del resto.
            </p>
            <p>
              Nos esforzamos por proveer servicios de calidad a cada uno de
              nuestros clientes mientras desarrollamos soluciones para resolver
              sus retos individuales.
            </p>
          </div>
        </div>
        <div>
          <img src={afLogo.src} alt="af soluciones logo" style={{height: "auto", width: "1000px"}}/>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold py-2">Nuestros Valores</h2>
        </div>
        <div>
          <p className="text-center my-4">
            Integridad | Honestidad | Respeto | Compromiso | Calidad |
            Confidencialidad | Cuidado y diligencia profesional
          </p>
          <p>
            Ser reconocidos como una firma con altos estándares de calidad y
            profesionalismo en la prestación de servicios de BPO, Consultoría y
            Auditoría.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold py-2">Nuestra Visión</h2>
        </div>
        <div>
          <p>
            Ser reconocidos como una firma con altos estándares de calidad y
            profesionalismo en la prestación de servicios de BPO, Consultoría y
            Auditoría.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold py-2">Nuestra Misión</h2>
        </div>
        <div>
          <p className="my-3">
            Brindar asesoría en servicios contables, asesoría financiera,
            control interno, cumplimiento tributario y servicios de auditoría,
            conforme a los estándares más altos de excelencia, tanto nacionales
            como internacionales, con eficiencia, proactividad, estándares
            éticos y técnicos que la profesión demanda; visualizando retos y
            oportunidades, con flexibilidad para adaptarse a los cambios del
            entorno.
          </p>
        </div>
      </div>
    </Section>
  );
}
