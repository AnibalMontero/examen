//Usando la API de emojis de GitHub muestra todos los emojis (su imagen en un
//nodo HTML cada una) que contengan una "y" en su nombre (las claves del JSON
//de respuesta contienen los nombres de los emojis)

//https://api.github.com/emojis
const apiUrl = 'https://api.github.com/emojis';
let boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((element) => {
      let claves = Object.keys(element);
      claves.forEach((elem) => {
        if (elem.includes('y')) {
          let lista = document.querySelector('#lista');
          let nodoLi = document.createElement('li');
          let nodoImg = document.createElement('img');
          lista.appendChild(nodoLi);
          nodoLi.appendChild(nodoImg);
          nodoImg.setAttribute('src', element[elem]);
          let nodoTexto = document.createTextNode(elem);
          nodoLi.appendChild(nodoTexto);
        }
      });
    });
});
