import Content from '../../components/content/Content';
import './About.css';

export default function About() {
  return (
    <>
      <Content title="About">
        <section className="about-section">
          <article>
            <p>
              Zit je steeds met je handen in het haar als je jouw favoriete
              Marvel karakters in een document moet copy-pasten om ze te
              bewaren? Treur niet langer! Met deze handige app kun je snel jouw
              Marvel karakters opzoeken en online bewaren.
            </p>
            <p>
              <strong>FOUNDFAVE</strong> is dé online app om Marvel karakters op
              te zoeken en te bewaren. Daarom is de slogan:{' '}
              <i>Found your fave with FOUNDFAVE!"</i>.
            </p>
            <p>
              FOUNDFAVE is een idee van André de Groot. In opdracht van NOVI
              Hogeschool
            </p>
          </article>

          <article>
            <img
              className="illustration"
              src="src/assets/illustrations/illustration.jpg"
              alt="Illustration"
              title="Illustration"
            />
          </article>
        </section>
      </Content>
    </>
  );
}
