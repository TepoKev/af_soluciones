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
        className="pl-32 pt-32 pb-32"
        style={{
          backgroundImage: `url(${srcImg})`,
          width: "100%",
          height: "auto",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          
        }}
      />
      <section id={id ? id : ""} className="text-xl p-3">
        {children}
      </section>
    </>
  );
}

export default Section;
