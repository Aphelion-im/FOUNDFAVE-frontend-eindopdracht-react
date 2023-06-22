import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Content>
        <SearchBar slogan="found your fave with" brand="FOUNDFAVE!" placeholder="Search" />
      </Content>
    </>
  );
}
