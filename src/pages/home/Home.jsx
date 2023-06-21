import Content from '../../components/content/Content';
import './Home.css';

export default function Home() {
  return (
    <>
      <Content title="Home">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          natus amet perspiciatis illo dolorem consectetur velit tempore qui
          provident modi.
        </p>

        <div className="img-container box-shadow">
          <img src="https://picsum.photos/200" alt="fgfgfgg" />
        </div>
      </Content>
    </>
  );
}
