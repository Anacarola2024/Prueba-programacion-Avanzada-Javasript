import Leon from './leon.js';
import Oso from './oso.js';
import Lobo from './lobo.js';
import Serpiente from './serpiente.js';
import Aguila from './aguila.js';

let investigatedAnimals =[];

let animalsPromise = (async () => {
    let url = './animales.json';
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw {error: 404 ,  message: 'No se encontro el archivo'};
        }
        const data = await response.json();
        return data.animales;

    } catch (error) {
        console.error(error);
    }
})();

animalsPromise.then ((animals) => {

    // registando animales

    document.getElementById ('btnRegistrar').addEventListener ('click', () => {
        let animal = document.getElementById ('animal').value;
        let edad = document.getElementById ('edad').value;
        let comentario = document.getElementById ('comentarios').value;

        if (document.getElementById ('animal').options[0].selected === true) {
            alert ('Por favor, seleccione un animal');
            return;
        }
        if (document.getElementById ('edad').options[0].selected === true) {
            alert ('Por favor, seleccione una edad');
            return;
        }
        if (comentario === '') {
            alert ('Por favor, escriba un comentario');
            return;
        }
        let animalData = animals.find ((item) => item.name.toLowerCase () === animal.toLowerCase ());
        let registro = null;
        switch (animal.toLowerCase ()) {
            case 'leon':
                registro = new Leon (animalData.name, edad, animalData.imagen, comentario, animalData.sonido);
                break;
            case 'lobo':
                registro = new Lobo (animalData.name, edad, animalData.imagen, comentario, animalData.sonido);
                break;
            case 'oso':
                registro = new Oso (animalData.name, edad, animalData.imagen, comentario, animalData.sonido);
                break;
            case 'serpiente':
                registro = new Serpiente (animalData.name, edad, animalData.imagen, comentario, animalData.sonido);
                break;
            case 'aguila':
                registro = new Aguila (animalData.name, edad, animalData.imagen, comentario, animalData.sonido);
                break;
            default:
                alert ('animal no encontrado');
            
        }
        investigatedAnimals.push(registro);
        resetInputValues ();
        displayInvestigatedAnimals ();
    });

    // mostrar animales
    document.getElementById ('animal').addEventListener ('change',async (event) => {
        let animalData = animals.find ((item) => item.name.toLowerCase () === event.target.value.toLowerCase ());
        let image = document.createElement ('img');
        image.setAttribute ('src',`./assets/imgs/${animalData.imagen}` );

        document.getElementById ('preview').innerHTML = '';
        document.getElementById ('preview').appendChild (image);
    });
        
    });


    const displayInvestigatedAnimals = () => {
        const animalsContainer = document.getElementById('animales');
        animalsContainer.innerHTML = '';
    
        investigatedAnimals.forEach ((animal) => {
            let animalCard = document.createElement ('div');
            let cardImg = document.createElement ('img');
            let cardBtn = document.createElement ('button');

            animalCard.setAttribute ('class', 'animal-card');

            cardImg.setAttribute ('src', `./assets/imgs/${animal.img}`);

            cardBtn.innerHTML = `
            <i class="fa-solid fa-volume-high"></i>
            <audio id= 'audio${animal.nombre}' src="./assets/sounds/${animal.sonido}"></audio>`



            animalCard.appendChild (cardImg);
            animalCard.appendChild (cardBtn);
            
            cardImg.addEventListener ('click', () => {
                displayModalAnimal (animal);
            });
            cardBtn.addEventListener ('click', () => {
                switch (animal.nombre.toLowerCase ()) {
                    case 'leon':
                        animal.rugir ();
                        break;
                    case 'lobo':
                        animal.aullar ();
                        break;
                    case 'oso':
                        animal.grunir ();
                        break;
                    case 'serpiente':   
                        animal.sisear ();
                        break;
                    case 'aguila':  
                        animal.chillar ();
                        break;
                    default:
                        console.log ('Sonido');
        }
    });
    animalsContainer.appendChild (animalCard);
    });
}
        

      const displayModalAnimal = (animal) => {
          const exampleModal = document.getElementById ('exampleModal');

          const modalBody = exampleModal.querySelector ('.modal-body');

          const innerModalhtml = `
          <img src="./assets/imgs/${animal.img}" class="img-fluid" alt="${animal.nombre}">
          <h5>${animal.nombre}</h5>
          <p> Edad:${animal.edad}</p>
          <p> Comentarios:${animal.comentarios}</p>
          `;
          modalBody.innerHTML = innerModalhtml;
          const modal = new bootstrap.Modal (animalModal);
          modal.show ();
      };  

        
    const resetInputValues = () => {
        document.getElementById ('animal').options[0].selectedIndex = true;
        document.getElementById ('edad').options[0].selectedIndex = true;
        document.getElementById ('comentarios').value = '';
    




    };














