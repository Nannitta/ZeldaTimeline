'use strict';

const main = document.querySelector('main');
const article = document.querySelectorAll('article');
const ol = document.querySelector('ol');
const nextButton = document.querySelector('.arrow_next');
const prevButton = document.querySelector('.arrow_prev');
const pagina = document.documentElement;

///////////////////////////////////////////////////////////////////

const zeldaGamesAPI = 'https://zelda.fanapis.com/api/games'; // LLamada a la API 
let counter = 1; // Declaramos un contador para añadirle un id a cada article que se cree
let activatedMoreInfo = false;

///////////////////////////////////////////////////////////////////

// Funcion para ordenar los elementos del array de objetos
function orderGames(games) {
    games.sort((a,b) => {
        return parseInt(a.released_date.split(',')[1]) - parseInt(b.released_date.split(',')[1]);
    });
}

// Funcion para añadir las imagenes de portada de los juegos
function addImageGames(games) {
    games.map((game) => {
        if(game.name === 'The Legend of Zelda') {
            game.img = './assets/portrait_game1.png';
        }
        if(game.name === 'Zelda II: The Adventure of Link') {
            game.img = './assets/portrait_game2.jpg';
        }
        if(game.name === 'The Legend of Zelda: A Link to the Past') {
            game.img = './assets/portrait_game3.jpg';
        }
        if(game.name === 'Zelda: The Wand of Gamelon') {
            game.img = './assets/portrait_game4.jpg';
        }
        if(game.name === 'BS The Legend of Zelda: Ancient Stone Tablets') {
            game.img = './assets/portrait_game5.jpg';
        }
        if(game.name === 'The Legend of Zelda: Ocarina of Time') {
            game.img = './assets/portrait_game6.jpg';
        }
        if(game.name === "The Legend of Zelda: Link's Awakening DX") {
            game.img = './assets/portrait_game7.png';
        }
        if(game.name === "The Legend of Zelda: Majora's Mask") {
            game.img = './assets/portrait_game8.png';
        }
        if(game.name === 'The Legend of Zelda: Oracle of Ages') {
            game.img = './assets/portrait_game9.png';
        }
        if(game.name === 'The Legend of Zelda: Oracle of Seasons') {
            game.img = './assets/portrait_game10.jpg';
        }
        if(game.name === 'The Legend of Zelda: Four Swords') {
            game.img = './assets/portrait_game11.jpg';
        }
        if(game.name === 'The Legend of Zelda: The Wind Waker') {
            game.img = './assets/portrait_game12.jpg';
        }
        if(game.name === 'The Legend of Zelda: Four Swords Adventures') {
            game.img = './assets/portrait_game13.png';
        }
        if(game.name === 'The Legend of Zelda: The Minish Cap') {
            game.img = './assets/portrait_game14.jpg';
        }
        if(game.name === 'The Legend of Zelda: Twilight Princess') {
            game.img = './assets/portrait_game15.jpg';
        }
        if(game.name === 'The Legend of Zelda: Spirit Tracks') {
            game.img = './assets/portrait_game16.png';
        }
        if(game.name === 'Hyrule Warriors') {
            game.img = './assets/portrait_game17.jpg';
        }
        if(game.name === 'The Legend of Zelda: Tri Force Heroes') {
            game.img = './assets/portrait_game18.jpg';
        }
        if(game.name === 'The Legend of Zelda: Breath of the Wild') {
            game.img = './assets/portrait_game19.png';
        }    
    });
}

// Funcion para recorrer el array y añadir los elementos al HTML con la info correspondiente
function getGames(games) {
    for(const game of games) {
        // Creamos li en nuestra ul
        const elementos = document.createElement('li');
        ol.append(elementos);

        // Añadimos un div a cada li para darle estilo al timeline
        const divTimeline = document.createElement('div');
        elementos.append(divTimeline);

        // Añadimos los datos en un article al HTML
        const article = document.createElement('article');
        article.setAttribute('id', counter);
        divTimeline.append(article);

        // Añadimos la imagen de la caratula del juego como una img al article
        const img = document.createElement('img');
        img.setAttribute('src', game.img);
        img.setAttribute('alt', 'Portrait');
        img.classList.add('caratula');
        article.append(img); 

        // Añadimos el titulo del juego como un h2
        const titleGame = document.createElement('h2');
        titleGame.textContent = game.name;
        article.append(titleGame);

        // Añadimos el año de lanzamiento
        const yearReelease = document.createElement('time');
        yearReelease.textContent = game.released_date;
        article.append(yearReelease);

        // Añadimos un div para desvanecer el texto en CSS
        const divContainer = document.createElement('div');
        divContainer.classList.add('first_box')
        article.append(divContainer);

        // Añadimos la descripcion del juego
        const gameDescription = document.createElement('p');
        gameDescription.textContent = game.description;
        divContainer.append(gameDescription);

        // Añadimos otro div para desvanecer el texto en CSS
        const secondDivContainer = document.createElement('div');
        secondDivContainer.classList.add('second_box');
        divContainer.append(secondDivContainer);

        // Añadimos el boton de mas info
        const moreInfo = document.createElement('button');
        moreInfo.innerHTML = '<img src="./assets/moreInfo.svg" alt="More"/>';
        moreInfo.classList.add('more_info');
        article.append(moreInfo);

        counter++;

       // Funcionalidad del boton moreInfo 
        function handleClickButonMoreInfo(e) {
            e.preventDefault();
            if(!activatedMoreInfo) {
                divTimeline.style.height = '14rem';
                divTimeline.style.marginTop = '0';
                divTimeline.style.marginBottom = '0';
                img.style.height = '160px';
                gameDescription.style.overflow = 'auto';
                secondDivContainer.style.display = 'none';
                moreInfo.style.position = 'absolute';
                moreInfo.style.bottom = '0.5rem';
                moreInfo.innerHTML = '<img src="./assets/menosInfo.svg" alt="Less"/>';
                    if(article.id % 2 === 0) {
                        divTimeline.style.top = '3.5rem';
                    };
            activatedMoreInfo = !activatedMoreInfo;
            } else {
                divTimeline.style.height = '10rem';
                divTimeline.style.margin = '2rem';
                gameDescription.style.overflow = 'hidden';
                secondDivContainer.style.display = 'initial';
                moreInfo.innerHTML = '<img src="./assets/moreInfo.svg" alt="More"/>';
                activatedMoreInfo = !activatedMoreInfo;
                    if(article.id % 2 === 0) {
                        divTimeline.style.top = '0';
                    };
            }
        }
        moreInfo.addEventListener('click', handleClickButonMoreInfo);
    }

    // Añadimos un ultimo li vacio para hacer el timeline
    const elementoVacio = document.createElement('li');
    elementoVacio.classList.add('last_li');
    ol.append(elementoVacio);

}

// Funcion que hace la peticion de la informacion a la API
async function getData(url) {
    const response = await fetch(url);
    const datos = response.json();

    return datos;
}

// Funcion que muestra la informacion en pantalla
async function printData(url) {
    const zeldaGames = await getData(url);

    //Destructuring para obtener el objecto data
    const { data } = zeldaGames;

    // Llamamos a la funcion para ordenar los datos por orden cronologico
    orderGames(data);

    // Añadimos la descripcion al juego que falta
    data[15].description = `The Legend of Zelda: Spirit Tracks is an action-adventure game developed and published by Nintendo for the Nintendo DS handheld game console. 
                            Set a century after The Wind Waker and its sequel Phantom Hourglass, the storyline follows the current incarnations of Link and Princess Zelda as 
                            they explore the land of New Hyrule to prevent the awakening of the Demon King Malladus. Players navigate New Hyrule, completing quests that advance 
                            the story and solving environmental and dungeon-based puzzles, many requiring use of the DS's touchscreen and other hardware features. 
                            Navigation between towns and dungeons is done using a train, which features its own set of mechanics and puzzles.`;

    // Eliminamos el juego que viene repetido desde la API
    data.splice(17, 1);

    // LLamamos a la funcion que añade las caratulas de los juegos
    addImageGames(data);
 
    // Llamamos a la funcion encargada de recorrer el array y añadir los elementos al HTML
    getGames(data);
}

printData(zeldaGamesAPI);

///////////////////////////////////////////////////////////////////

// Agrega un evento para el desplazamiento del ratón
pagina.addEventListener("wheel", function(event) {
    if(!activatedMoreInfo){
        pagina.scrollLeft += event.deltaY;
    } else {
        return;
    };
});