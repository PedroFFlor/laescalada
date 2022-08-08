import news from '../img/news.png';

function News(props) {

    const { children } = props

    return (
      <div className="news">
        <img src={news}/>
        <h2>{children}</h2>
        <h3>Aca va el subtitulo, ingresa por parametros</h3>
        <p>El gato doméstico​​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,​ 
          michino,​ michi,​ micho,​ mizo,​ miz,​ morroño​ o morrongo,​ y algunos nombres más, es un mamífero carnívoro 
          de la familia Felidae. Es una subespecie domesticada por la convivencia con el ser humano.</p>
      </div>
    );
}
export default News;
  