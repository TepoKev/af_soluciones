import NuestrosClientesImg from "../../../public/Dq_7UKGXQAAmLcN.jpeg";
import Section from "../components/Section";

function NuestrosClientes() {
  return (
    <Section
      title="Nuestros Clientes"
      srcImg={NuestrosClientesImg.src}
      id="nuestros_clientes"
    >
      <header className="text-5xl text-start">
        <div className=" border-l-8  border-l-[#f2c614] ">
          <span>
            Nuestros
            <br />
            <span className="border-r-8 border-r-[#f2c614]">Clientes</span>
          </span>
        </div>
      </header>
      <p className="mt-5">
        Nuestros clientes son la parte más importante de nuestra firma, y
        provienen de diferentes sectores de la sociedad, ya sean nacionales e
        internacionales:
      </p>
      <ul className="list-disc p-10">
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">Comercio</span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">Industria</span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">Servicios</span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Cooperativas
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Organizaciones no gubernamentales
          </span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">Educación</span>
        </li>
        <li className="text-[#f2c614] text-4xl">
          <span className="text-[#275aa6] text-lg text-center">
            Construcción
          </span>
        </li>
      </ul>
    </Section>
  );
}

export default NuestrosClientes;
