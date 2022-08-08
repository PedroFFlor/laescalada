
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import ShowCatalogue from "../components/ShowCatalogue";


function Catalogue() {
    return (
      <>
        <div className="main">
          <Navigator/>
          <ShowCatalogue/>
        </div>
        <Footer/>
      </>
    );
}
export default Catalogue;
  