import Animal from './animal.js';
class  Serpiente extends Animal {
    constructor( nombre, edad, img, comentarios, sonido ) {
        super(nombre, edad, img, comentarios, sonido);

        
    }
    sisear() {
        document.getElementById(`audio${this.nombre}`).play();
}

}
export default Serpiente;