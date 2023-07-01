export default function Content({ children, title }) {
  return (
    <>
      <main>
        <section className="outer-container">
          <article className="inner-container article-padding">
            <h1>{title}</h1>
            {children}
          </article>
        </section>
      </main>
    </>
  );
}
