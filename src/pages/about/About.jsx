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
              Are you always frustrated when you have to copy-paste your
              favorite Marvel characters into a document over and over again?
              Don't grieve any longer! With this handy app you can quickly find
              and save your Marvel characters online.
            </p>
            <p>
              <strong>FOUNDFAVE</strong> is the online app to find and save your
              favorite Marvel characters. That's why this is our slogan:{' '}
              <i>Found your fave with FOUNDFAVE!"</i>.
            </p>
            <p>
              FOUNDFAVE is an idea by André de Groot. On behalf of NOVI
              University
            </p>
            <p><strong>Current app version</strong>: v1.0.0</p>
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
