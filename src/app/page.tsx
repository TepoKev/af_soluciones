export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header id="header" className="bg-[#1e56c8]">
        Aca iría una imagen
      </header>
      <div className="container mx-auto text-white">
        <nav className="flex flex-col items-center bg-[#666666]">
          <a href="#header" rel="noopener noreferrer">
            AF Soluciones
          </a>
          <a href="#quienes_somos">¿Quiénes Somos?</a>
          <a href="#nuestra_firma">NUESTRA FIRMA</a>
          <a href="#nuestros_servicios">NUESTROS SERVICIOS</a>
          <a href="#nuestros_clientes">NUESTROS CLIENTES</a>
          <a href="#contactenos">CONTÁCTENOS</a>
          <a href="#blog_publicaciones">BLOG/PUBLICACIONES</a>
        </nav>
        <section id="quienes_somos" className="bg-[#ffc426]">
          <header className="text-center">
            <h1>¿Quienes Somos?</h1>
          </header>
          <div>
            <p>
              “Somos un grupo de profesionales ofreciendo confianza, estabilidad
              y credibilidad en el trabajo que ofrecemos”
            </p>
            <p>
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
          <div className="text-center">
            <h2>Nuestros valores</h2>
          </div>
          <div>
            <p>
              Integridad | Honestidad | Respeto | Compromiso | Calidad |
              Confidencialidad | Cuidado y diligencia profesional
            </p>
            <p>
              Ser reconocidos como una firma con altos estándares de calidad y
              profesionalismo en la prestación de servicios de BPO, Consultoría
              y Auditoría.
            </p>
          </div>
          <div className="text-center">
            <h2>Nuestra Visión</h2>
          </div>
          <div>
            <p>
              Ser reconocidos como una firma con altos estándares de calidad y
              profesionalismo en la prestación de servicios de BPO, Consultoría
              y Auditoría.
            </p>
          </div>
          <div className="text-center">
            <h2>Nuestra Misión</h2>
          </div>
          <div>
            <p>
              Brindar asesoría en servicios contables, asesoría financiera,
              control interno, cumplimiento tributario y servicios de auditoría,
              conforme a los estándares más altos de excelencia, tanto
              nacionales como internacionales, con eficiencia, proactividad,
              estándares éticos y técnicos que la profesión demanda;
              visualizando retos y oportunidades, con flexibilidad para
              adaptarse a los cambios del entorno.
            </p>
          </div>
        </section>
        <section id="nuestra_firma" className="bg-green-500">
          <header className="text-center">
            <h1>NUESTRA FIRMA</h1>
          </header>
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
                finanzas, contabilidad, impuestos y mejoras de procesos, NIIF,
                NIIF PYMES, Due Diligence financiero y cumplimientos
                tributarios.
              </p>
              <p>
                Preparación y presentación de estados financieros con base en
                NIIF Full y NIIF Pymes. Revisión y análisis de indicadores
                financieros, preparación y presentación de reportes financieros.
                Inscrita como Contador Público y como Auditor en el CVPCPA
                (Consejo de Vigilancia de la Profesión de Contaduría Pública y
                Auditoria).
              </p>
            </div>
            <div>
              <h3>Elizabeth de Arce</h3>
              <p>
                Profesional en Contaduría Pública con ________________,
                especialista en servicios de BPO, impuestos y aspectos
                tributarios a nivel local e internacional (Estados Unidos).
              </p>
              <p>
                Preparación y presentación de estados financieros con base en
                USGAAP y NIIF.
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
        </section>
        <section id="nuestros_servicios" className="bg-violet-500">
          <header className="text-center">
            <h1>NUESTROS SERVICIOS</h1>
          </header>
          <div className="text-center">
            <h1>Outsourcing Contable</h1>
          </div>
          <div>
            <p>
              Le brindamos un servicio contable con excelencia en calidad,
              puntualidad y resultados, mediante la preparación y presentación
              de información financiera necesaria para la apropiada toma de
              decisiones.
            </p>
            <p>
              Tenemos amplia experiencia en el área de servicios contables,
              desde su registro diario hasta su optimización. Por ello le
              brindamos los medios necesarios para asegurar un mejor
              procesamiento de sus finanzas y un acompañamiento en tu plan de
              negocios y logro de tus objetivos.
            </p>
            <p>
              Creemos firmemente en la creación de valor, mediante la mejora
              constante en los procesos.
            </p>
            <p>Los servicios que ofrecemos son los siguientes:</p>
            <ul className="list-disc">
              <li>
                Registro de la información utilizando estándares y técnicas
                contables de acuerdo con su industria.
              </li>
              <li>Preparación y procesamiento de transacciones.</li>
              <li>Preparación y presentación de auxiliares.</li>
              <li>
                Le asesoramos sobre la información requerida por nosotros para
                el flujo de trabajo eficaz y el cumplimiento efectivo del
                servicio.
              </li>
            </ul>
            <p>
              Apoyamos a la administración de su empresa con nuestras
              habilidades incluyendo:
            </p>
            <ul className="list-disc">
              <li>Puesta en marcha de negocios.</li>
              <li>Registro contable.</li>
              <li>Información financiera periódica.</li>
              <li>Asesoría y supervisión contable.</li>
              <li>
                Asesoría y supervisión del cumplimiento de obligaciones
                tributarias.
              </li>
              <li>Diseño e implantación de sistemas contables y de control.</li>
              <li>Reorganización contable y depuración de cuentas.</li>
            </ul>
            <p>Auditoria Externa</p>
            <ul className="list-disc">
              <li>Auditoría de estados financieros</li>
              <li>Auditoría fiscal</li>
              <li>Auditoría de estados contables consolidados</li>
              <li>Auditoria de entidades financieras</li>
              <li>Auditorias con aplicación de NIIF y NIIF PYMES</li>
              <li>Auditoría Interna</li>
            </ul>
            <p>Due diligence</p>
            <ul className="list-disc">
              <li>Auditorias de compra - venta de empresas (due diligence).</li>
              <li>aa</li>
            </ul>
            <p>Impuestos</p>
            <p>
              Mantenemos comunicación constante con nuestro cliente con el fin
              de mantenerles informados sobre cambios en la Legislación Fiscal.
              Conocer la información actualizada que permita comprender la
              legislación fiscal es prioritario para que nuestros clientes
              cumplan con ella a conformidad.
            </p>
            <p>Algunas de las áreas en las cuales podemos ayudarle son:</p>
            <ul className="list-disc">
              <li>
                Preparación de declaraciones de Impuestos fiscales y
                municipales.
              </li>
              <li>
                Auditorías y revisiones fiscales para propósitos determinados.
              </li>
              <li>
                Asistencia y colaboración en la atención de inspecciones de los
                organismos fiscales.
              </li>
              <li>Asesoramiento de residentes extranjeros en El Salvador.</li>
              <li>
                Asesoramiento en la preparación de consultas frente a las
                autoridades fiscales.
              </li>
              <li>
                Asistencia y asesoramiento en la preparación de solicitudes de
                reintegro y devolución de impuestos.
              </li>
              <li>Definición del marco legal y la estructura fiscal.</li>
              <li>Asesoría continua sobre cambios en la legislación fiscal.</li>
              <li>Interpretación de leyes fiscales.</li>
              <li>Inventarios de Activo Fijo.</li>
            </ul>
            <p>Outsourcing de Procesos</p>

            <p>
              En muchas oportunidades las organizaciones necesitan tercerizar
              ciertos procesos que, por su dificultad u oportunidad, resulta
              conveniente o más eficiente que sean ejecutados y administrados
              por un tercero a dicha organización.
            </p>
            <p>
              Nuestro equipo está en condiciones de brindarle la mejor solución
              en cualquier materia y optimizar cualquier proceso.
            </p>
            <p>Revisiones limitadas de estados financieros</p>
            <ul className="list-disc">
              <li>Realización de procedimientos acordados</li>
              <li>
                Adopción de Normas Internacionales de Información Financiera
                (NIIF)
              </li>
              <li>
                Adopción de Normas Internacionales de Información Financiera
                para Pequeñas y Mediadas Entidades (NIIF PYMES)
              </li>
              <li>Compilación de estados financieros</li>
              <li>
                Asistencia en elaboración de estados financieros consolidados
              </li>
              <li>Asesoría contable y financiera</li>
              <li>Asesoría en NIIF o NIIF PYMES</li>
              <li>Elaboración y autorización de sistemas contables</li>
              <li>
                Legalizaciones de libros que deben llevar los comerciantes
              </li>
            </ul>
            <p>Nómina</p>
            <p>
              Administramos la nómina de su empresa mediante un proceso estándar
              y centralizado. Nos encargamos de todo el ciclo de nómina,
              incluyendo reportes y pagos; todo a la medida de nuestros
              clientes, incluyendo:
            </p>
            <ul className="list-disc">
              <li>
                Procesamiento de datos e incidencias para la confección y
                emisión de un reporte de nómina o planilla.
              </li>
              <li>
                Preparación y cálculo de cargas sociales e impuestos de acuerdo
                con la legislación y de acuerdo con los beneficios adicionales
                que establezca su empresa.
              </li>
              <li>
                Recepción de dudas que presente el cliente durante la emisión
                preliminar de la planilla o en su defecto la aprobación de esta.
              </li>
              <li>Garantía que el archivo de pago fue adecuadamente subido.</li>
              <li>
                Cálculo y determinación del impuesto sobre la renta a los
                salarios
              </li>
              <li>
                Elaboración del reporte de nómina para las autoridades de la
                seguridad social (ISSS)
              </li>
              <li>
                Elaboración y presentación de informes de impuesto sobre la
                renta a los salarios ante las autoridades AFPs
              </li>
              <li>
                Comprobantes empleados: Se entrega el comprobante de cálculo a
                cada empleado para la verificación y soporte de esta mediante
                archivos debidamente encriptados.
              </li>
            </ul>
          </div>
        </section>
        <section id="nuestros_clientes" className="bg-orange-500">
          <p>
            Nuestros clientes son la parte más importante de nuestra firma, y
            provienen de diferentes sectores de la sociedad, ya sean nacionales
            e internacionales:
          </p>
          <ul>
            <li>Comercio</li>
            <li>Industria</li>
            <li>Servicios</li>
            <li>Cooperativas</li>
            <li>Organizaciones no gubernamentales</li>
            <li>Educación</li>
            <li>Construcción</li>
          </ul>
        </section>
        <section id="contactenos" className="bg-yellow-500">
          <header>
            <h1>Contáctenos</h1>
          </header>
        </section>
        <section id="blog_publicaciones" className="bg-cyan-500">
          <header>
            <h1>Blob / Publicaciones</h1>
          </header>
        </section>
      </div>
      <footer className="bg-indigo-500">
        <div>
          Res. La Hacienda, San José Villanueva, La Libertad, El Salvador.
        </div>
        <div>Tel. (503) 6990-5490</div>
        <div>Email: info@afsolucionesintegrales.com </div>
      </footer>
    </main>
  );
}
