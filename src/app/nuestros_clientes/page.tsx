import NuestrosClientesImg from "../../../public/client.jpg";
import Section from "../components/Section";

function NuestrosClientes() {
  return (
    <Section
      title="Nuestros Clientes"
      srcImg={NuestrosClientesImg.src}
      id="nuestros_clientes"
    >
      <p>
        Nuestros clientes son la parte más importante de nuestra firma, y
        provienen de diferentes sectores de la sociedad, ya sean nacionales e
        internacionales:
      </p>
      <ul className="list-disc p-10">
        <li>Comercio</li>
        <li>Industria</li>
        <li>Servicios</li>
        <li>Cooperativas</li>
        <li>Organizaciones no gubernamentales</li>
        <li>Educación</li>
        <li>Construcción</li>
      </ul>
    </Section>
  );
}

export default NuestrosClientes;
