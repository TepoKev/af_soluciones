import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import headerLogo from "../../public/LOGO AF Soluciones Horizontal-01.png";
import TopBar from "./components/TopBar";
import Link from "next/link";
import { primary, secondary, tertiary } from "../utils/const";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "AF Soluciones",
  description: "AF Soluciones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <header
            id="header"
            className="flex items-center justify-between w-full p-3"
          >
            <Link href="/">
              <img
                src={headerLogo.src}
                alt="AF Soluciones"
                style={{ height: "50px", width: "auto" }}
              />
            </Link>

            <div className={`flex lg:flex-row mx-3 text-[#f2c614]`}>
              <div className="flex lg:flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="pl-2">icon 1</span>
              </div>
              <div className="flex lg:flex-row mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="pl-2">icon 2</span>
              </div>
              <div className="flex lg:flex-row mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="pl-2">icon 3</span>
              </div>
            </div>
          </header>
          <div className="p-3 w-full">
            <hr className={`w-full border border-[#76777a]`} />
          </div>
          <TopBar />

          <div className="container mx-auto">{children}</div>
          <footer className={`bg-[#275aa6] w-full`}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-white sm:text-center">
                  © 2024{" "}
                  <Link href="/" className="hover:underline">
                    AF Soluciones™
                  </Link>
                  . Todos los derechos reservados .
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <Link
                    href="#"
                    className="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 17"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-3">
                <span className="text-sm text-white sm:text-center">
                  Res. La Hacienda, San José Villanueva, La Libertad, El
                  Salvador.
                </span>
                <span className="text-sm text-white sm:text-center">
                  Tel. (503) 6990-5490
                </span>
                <span className="text-sm text-white sm:text-center">
                  Email: info@afsolucionesintegrales.com
                </span>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
