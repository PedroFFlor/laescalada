
function AddNews() {
    return (
      <>
        <form class="formNews">
          <h4>Agregar Noticia</h4>
          <input class="newsInput" type="text" name="newsTittle" id="newsTittle" placeholder="Ingresar titulo"/>
          <input class="newsInput" type="text" name="newsSubTittle" id="newsSubTittle" placeholder="Ingresar subtitulo"/>
          <input class="newsInput" type="file" name="newsImg" id="newsImg" accept="image/*"/>
          <textarea class="newsInput Textarea" type="textarea" name="newsDescription" id="newsDescription" placeholder="Descripcion"/>
          <input class="newsSubmit" type="submit" value="Enviar Noticia"/>
        </form>
        <p>Que aparezca el titulo de la noticia con 2 botones, modificar y eliminar</p>
        <p>Que aparezca el titulo de la noticia con 2 botones, modificar y eliminar</p>
        <p>Que aparezca el titulo de la noticia con 2 botones, modificar y eliminar</p>
      </>
    );
}
  
export default AddNews;
  