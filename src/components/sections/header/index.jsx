import banner from "../../../assets/banner.jpg";
import Navbar from "../../nav";
import './styles.css'

const Header = () => {
  return (
    <>
      <header>
        <img src={banner} alt="banner" />
      </header>
      <Navbar id="menu1" />
    </>
  );
};

export default Header;
