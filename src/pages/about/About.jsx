import Content from '../../components/content/Content';
import ImageComponent from '../../components/image-component/ImageComponent';
import illustration from '../../assets/illustrations/man-behind-computer.jpg';
import './About.css';

export default function About() {
  return (
    <>
      <Content title="About">
        <section className="about-section">
          <article>
            <p>
              Do you feel frustrated when you have to copy-paste your favorite
              Marvel characters into a document over and over again? Don't
              grieve any longer! With this handy app you can quickly find and
              save your Marvel characters online.
            </p>
            <p>
              <strong>FOUNDFAVE</strong>&copy;&reg; is the online app to find
              and save your favorite Marvel characters.
            </p>
            <p>
              <strong>That's why this is our slogan</strong>:&nbsp;
              <q>Found your fave with FOUNDFAVE!</q>.
            </p>
            <p>
              FOUNDFAVE is an idea by André de Groot. On behalf of{' '}
              <a target="_blank" className="hyperlink" href="https://novi.nl">
                NOVI University
              </a>
            </p>
            <p>
              <strong>Current app version</strong>: v1.0.0 (stable)
            </p>
          </article>

          <article>
            <ImageComponent
              className="illustration box-shadow"
              image={illustration}
              title="Illustration"
            />
          </article>
        </section>
      </Content>
    </>
  );
}
