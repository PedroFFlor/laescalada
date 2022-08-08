import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import AddNews from "../components/AddNews";
import AddToSlider from "../components/AddToSlider";
import AddOfertAside from "../components/AddOfertAside";

function PanelControl() {
    return (
      <>
        <div className="main">
          <Navigator/>
          <div className="c_panel">
            <AddNews/>
            <AddToSlider/>
            <AddOfertAside/>
          </div>
        </div>
        <Footer/>
      </>
    );
}
  
export default PanelControl;
  