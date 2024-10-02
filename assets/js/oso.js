import Animal from './animal.js';
class Oso extends Animal {
    constructor( nombre, edad, img, comentarios, sonido ) {
        super(nombre, edad, img, comentarios, sonido);

        
    }
    grunir() {
        document.getElementById(`audio${this.nombre}`).play();
}

}
export default Oso;