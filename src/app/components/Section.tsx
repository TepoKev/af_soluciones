function Section({
  children,
  title,
  srcImg,
  id,
}: {
  children: React.ReactNode | null | undefined;
  title: string;
  srcImg: string;
  id: string | undefined | null;
}) {
  return (
    <>
      <div
        className="p-32"
        style={{
          backgroundImage: `url(${srcImg})`,
          width: "100%",
          height: "100%",
        }}
      >
        <span className="text-4xl text-white">{title}</span>
      </div>
      <section id={id ? id : ""} className="text-xl p-3">
        {children}
      </section>
    </>
  );
}

export default Section;
