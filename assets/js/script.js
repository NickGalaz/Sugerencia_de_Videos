window.onload = function () {
    //Funcion auto invocada IIFE
    const miFuncion = (() => {
        let metodoPrivado = (url, id) => id.setAttribute("src", url)
        
        return {
            //Funcion publica y metodo privado
            funcionPublica: (url, id) => metodoPrivado(url, id) 
        }
    })();
    //Clase Padre
    class Multimedia {
        constructor(url) {
            let _url = url;
            this._getUrl = () => _url;
        }
        setInicio() {
            return "Este método es para realizar un cambio en la URL del video";
        }
    }
    //Clase Hija
    class Reproductor extends Multimedia {
        constructor(url, id) {
            super(url);
            this._id = id;
        }
        playMultimedia(url, id) {
            miFuncion.funcionPublica(url, id)
        }
        setInicio(url, id, tiempo) {
            id.setAttribute("src", `${url}?start=${tiempo}`)
        }
    }
    //VARIABLES ID
    let musica = document.getElementById("musica");
    let pelicula = document.getElementById("peliculas");
    let serie = document.getElementById("series");

    // VARIABLES URL
    let url1 = "https://www.youtube.com/embed/XzHyEDwPXZw";
    let url2 = "https://www.youtube.com/embed/OIpHMl-E0yg";
    let url3 = "https://www.youtube.com/embed/hk5ZLDFAFsc";

    //INTANCIAS
    let musicaV = new Reproductor(url1, musica);
    let peliculaV = new Reproductor(url2, pelicula);
    let serieV = new Reproductor(url3, serie);

    //INVOCACION DE INSTANCIAS
    musicaV.playMultimedia(url1, musica);
    //MODIFICACION DE TIEMPO INICIO
    musicaV.setInicio(url1, musica, 30);


    peliculaV.playMultimedia(url2, pelicula);
    peliculaV.setInicio(url2, pelicula, 15);


    serieV.playMultimedia(url3, serie);
    serieV.setInicio(url3, serie, 7);
}


































// const miEspacio = (() => {
// let metodoPrivado = (url, id) => {
// };
//     miVariablePrivada = 0;
//     miMetodoPrivado = (valor1, valor2) => {
//         console.log(valor1, valor2);
//     };
//     return {
//         // Una variable pública
//         miVariablePublica: "Peliculas, músicas y series",
//         // Una función pública que utiliza los elementos privados
//         miFuncionPublica: (url, id) => {
//             miVariablePrivada;
//             miMetodoPrivado(url, id);
//             console.log('miVariablePrivada:', miVariablePrivada);
//         }
//     }
// })();


// class Multimedia {
//     constructor(url) {

//         let _url = url;
//         this.getUrl = () => _url;
//         this.setInicio = (nuevo_url) => _url = nuevo_url;
//     }
//     get url() {
//         return this.getUrl();
//     }
//     set setInicio(nuevo_url) {
//         this.setInicio(nuevo_url);
//     }
// }

// class Reproductor extends Multimedia {
//     constructor(url, id) {
//         super(url);
//         this._id = id;

//     }
//     get id() {
//         return this.getId();
//     }
//     playMultimedia() {
//         miEspacio.miVariablePublica
//     }
//     setInicio() {
//         miEspacio.setAttribute()
//     }
// }


// let musicaV = new Reproductor("https://www.youtube.com/embed/FzgAXlwcLPs", musica);
// let pelicula = new Reproductor("https://www.youtube.com/embed/OIpHMl-E0yg", peliculas);
// let serieV = new Reproductor("https://www.youtube.com/embed/YQeUmSD1c3g", series);

// musicaV.playMultimedia()
// pelicula.playMultimedia()
// serieV.playMultimedia()


// //Variables
// const videos = (() => {
//     {
//         let musica = document.getElementById('musica').setAttribute(<iframe width="560" height="315" src="https://www.youtube.com/embed/FzgAXlwcLPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ?start=${5}" allowfullscreen></iframe>);
//         let pelicula = document.getElementById('peliculas').setAttributesetAttribute(<iframe width="560" height="315" src="https://www.youtube.com/embed/OIpHMl-E0yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ?start=${5}" allowfullscreen></iframe>);;
//         let series = document.getElementById('series');

//     }) ();