
function Slider(props) {
    const { children } = props
    return (
      <div className="slider">
        <h3>{children}</h3>
        <ul class="slider_ul">
          <li id="slide1">
            <h2>Titulo h2</h2>
            <div></div>
          </li>
          <li id="slide2">
            <h2>Vendo sandwiches </h2>
            <div></div>
          </li>
          <li id="slide3">
            <h2>Vendo droga</h2>
            <div></div>
          </li>
        </ul>
        <ul class="menu">
          <li>
            <a href="#slide1">1</a>
          </li>
          <li>
            <a href="#slide2">2</a>
          </li>
          <li>
            <a href="#slide3">3</a>
          </li>
        </ul> 
      </div>
    );  
}
  
export default Slider;
  