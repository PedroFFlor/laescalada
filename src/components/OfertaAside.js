import aside from '../img/aside.jpg';

function OfertaAside(props) {

    const { children } = props

    return (
      <div className="oferta_aside">
        <h4>{children}</h4>
        <img src={aside} alt="oferta!"/>
      </div>
    );
}
  
export default OfertaAside;
  