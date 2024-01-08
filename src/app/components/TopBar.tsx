import Link from "next/link";

function TopBar() {
  return (
    <nav className="flex flex-col items-center justify-center lg:flex-row font-extrabold w-full">
      <Link href="/" rel="noopener noreferrer" className="m-3 border-b-2 border-indigo-500">
        AF Soluciones
      </Link>
      <Link href="/quienes_somos" className="m-3">
        ¿Quiénes Somos?
      </Link>
      <Link href="/nuestra_firma" className="m-3">
        NUESTRA FIRMA
      </Link>
      <Link href="/nuestros_servicios" className="m-3">
        NUESTROS SERVICIOS
      </Link>
      <Link href="/nuestros_clientes" className="m-3">
        NUESTROS CLIENTES
      </Link>
      <Link href="/contactenos" className="m-3">
        CONTÁCTENOS
      </Link>
      <Link href="/blog_publicaciones" className="m-3">
        BLOG/PUBLICACIONES
      </Link>
    </nav>
  );
}

export default TopBar;
