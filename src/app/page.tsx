import CubeImg from "../../public/cubes.jpg";
import Section from "./components/Section";

export default function Home() {
  return (
    <Section title="Inicio de la Pagina" srcImg={CubeImg.src} id="inicio">
      <h1>Inicio</h1>
    </Section>
  );
}
