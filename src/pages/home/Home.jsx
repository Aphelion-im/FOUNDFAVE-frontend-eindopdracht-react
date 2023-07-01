import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';


export default function Home() {
  return (
    <>
      <Content>
        <SearchBar
          slogan="found your fave with"
          brand="FOUNDFAVE!"
          placeholder="Search"
        />
      </Content>
    </>
  );
}
