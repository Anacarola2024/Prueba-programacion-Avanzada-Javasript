import Animal from './animal.js';
class Leon extends Animal {
    constructor( nombre, edad, img, comentarios, sonido ) {
        super(nombre, edad, img, comentarios, sonido);

        
    }
    rugir() {
        document.getElementById(`audio${this.nombre}`).play();
}

}
export default Leon;