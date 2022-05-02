
import Article from "../components/Article";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";


function Home() {
    return (
      <div className="main">
        <Navigator/>
        <Article/>
        <Aside/>
        <Footer/>
      </div>
    );
}
export default Home;
  