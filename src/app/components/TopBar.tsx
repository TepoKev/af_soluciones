"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function TopBar() {
  const [active, setActive] = useState("/");

  const handleActive = (path: string) => {
    setActive(path);
  };

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <nav className="flex flex-col items-center justify-center text-lg font-extrabold lg:flex-row w-full">
      <Link
        href="/"
        className={`m-3 ${
          active === "/" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/")}
      >
        ¿Quiénes Somos?
      </Link>
      <Link
        href="/nuestra_firma"
        className={` m-3 ${
          active === "/nuestra_firma" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/nuestra_firma")}
      >
        Nuestra Firma
      </Link>
      <Link
        href="/nuestros_servicios"
        className={`m-3 ${
          active === "/nuestros_servicios" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/nuestros_servicios")}
      >
        Nuestros Servicios
      </Link>
      <Link
        href="/nuestros_clientes"
        className={`m-3 ${
          active === "/nuestros_clientes" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/nuestros_clientes")}
      >
        Nuestros Clientes
      </Link>
      <Link
        href="/contactenos"
        className={`m-3 ${
          active === "/contactenos" ? "border-b-2 border-indigo-500" : ""
        }`}
        onClick={() => handleActive("/contactenos")}
      >
        Contáctenos
      </Link>
    </nav>
  );
}

export default TopBar;
