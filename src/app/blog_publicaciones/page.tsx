import BlogPublicacionesImg from "../../../public/blog.jpg";
import Section from "../components/Section";

function BlogPublicaciones() {
  return (
    <Section
      title="Blog / Publicaciones"
      srcImg={BlogPublicacionesImg.src}
      id="blog_publicaciones"
    >
      <h1>Blog / Publicaciones</h1>
    </Section>
  );
}

export default BlogPublicaciones;
