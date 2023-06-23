import SearchBar from '../../components/searchbar/SearchBar';
import Content from '../../components/content/Content';
import './Home.css';

export default function Home() {
  return (
    <>
      <Content>
        <SearchBar
          slogan="found your fave with"
          brand="FOUNDFAVE!"
          placeholder="Search"
        />

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, labore. Quasi cum labore a unde rem saepe beatae explicabo, quibusdam nostrum necessitatibus quisquam, voluptate ullam eos dicta assumenda quidem provident minus illum modi minima nam reprehenderit consequuntur! Delectus voluptatum similique odit aut. Quos eaque consectetur placeat dicta cumque! Repellat saepe labore error suscipit adipisci. Repellat suscipit mollitia itaque ullam, voluptas soluta! Saepe omnis cumque maxime repellat sit tempore earum, tempora rerum asperiores consequatur dolor fugit ipsam, incidunt nisi quas, molestiae consequuntur quidem. Recusandae sit consequatur iste accusantium quisquam nobis quis eos nihil, consequuntur fugiat earum eius blanditiis! Veniam, iusto nesciunt!</p>
      </Content>
    </>
  );
}
