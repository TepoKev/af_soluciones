function Section({
  children,
  title,
  srcImg,
  id,
  textColor = "text-white",
}: {
  children: React.ReactNode | null | undefined;
  title: string;
  srcImg: string;
  id: string | undefined | null;
  textColor?: string;
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
        <header className={`text-4xl ${textColor}`}>{title}</header>
      </div>
      <section id={id ? id : ""} className="text-xl p-3">
        {children}
      </section>
    </>
  );
}

export default Section;
