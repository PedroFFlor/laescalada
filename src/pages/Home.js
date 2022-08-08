
import Article from "../components/Article";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import Slider from "../components/Slider";


function Home() {
    return (
      <>
        <div className="main">
          <Navigator/>
          <Slider>Este children va a ser el titulo del slider, por param enviamos las imagenes</Slider>
          <Article/>
          <Aside/>
        </div>
        <Footer/>
      </>
    );
}
export default Home;
  