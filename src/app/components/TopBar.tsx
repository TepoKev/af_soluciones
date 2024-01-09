"use client";
import { useState } from "react";
import Link from "next/link";

function TopBar() {
  const [active, setActive] = useState("/");

  const handleActive = (path: string) => {
    setActive(path);
  };
  return (
    <nav className="flex flex-col items-center justify-center lg:flex-row font-extrabold w-full">
      <Link
        href="/"
        rel="noopener noreferrer"
        className={`m-3 ${
          active === "/" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/")}
      >
        AF Soluciones
      </Link>
      <Link
        href="/quienes_somos"
        className={`m-3 ${
          active === "/quienes_somos" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/quienes_somos")}
      >
        ¿Quiénes Somos?
      </Link>
      <Link
        href="/nuestra_firma"
        className={`m-3 ${
          active === "/nuestra_firma" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/nuestra_firma")}
      >
        NUESTRA FIRMA
      </Link>
      <Link
        href="/nuestros_servicios"
        className={`m-3 ${
          active === "/nuestros_servicios" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/nuestros_servicios")}
      >
        NUESTROS SERVICIOS
      </Link>
      <Link
        href="/nuestros_clientes"
        className={`m-3 ${
          active === "/nuestros_clientes" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/nuestros_clientes")}
      >
        NUESTROS CLIENTES
      </Link>
      <Link
        href="/contactenos"
        className={`m-3 ${
          active === "/contactenos" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/contactenos")}
      >
        CONTÁCTENOS
      </Link>
      <Link
        href="/blog_publicaciones"
        className={`m-3 ${
          active === "/blog_publicaciones" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/blog_publicaciones")}
      >
        BLOG/PUBLICACIONES
      </Link>
    </nav>
  );
}

export default TopBar;
