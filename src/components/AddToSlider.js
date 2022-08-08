
function AddToSlider() {
    return (
      <form class="formNews">
          <h4>Agregar imagenes al slider</h4>
          <input class="newsInput" type="text" name="sliderTittle" id="sliderTittle" placeholder="Ingresar titulo del slider"/>
          <input class="newsInput" type="file" name="slider1" id="slider1" accept="image/*"/>
          <input class="newsInput" type="file" name="slider2" id="slider2" accept="image/*"/>
          <input class="newsInput" type="file" name="slider3" id="slider3" accept="image/*"/>
          <input class="newsSubmit" type="submit" value="Enviar Imagenes"/>
        </form>
    );
}
  
export default AddToSlider;
  