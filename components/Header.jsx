import Banner from './Banner';
import NavBar from './NavBar';

const Header = ({ netflixOriginals, onShow }) => {
  return (
    <div>
      <NavBar onShow={onShow} />
      <Banner netflixOriginals={netflixOriginals} />
    </div>
  );
};

export default Header;
