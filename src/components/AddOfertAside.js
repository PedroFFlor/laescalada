
function AddOfertAside() {
    return (
      <form class="formNews">
          <h4>Agregar Publicidad</h4>
          <input class="newsInput" type="text" name="asideTittle" id="asideTittle" placeholder="Ingresar titulo"/>
          <input class="newsInput" type="file" name="asideImg" id="asideImg" accept="image/*"/>
          <input class="newsSubmit" type="submit" value="Enviar Noticia"/>
        </form>
    );
}
  
export default AddOfertAside;
  