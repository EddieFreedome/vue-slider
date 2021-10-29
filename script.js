
window.addEventListener("DOMContentLoaded", function(){
    Vue.config.devtools = true
    new Vue ({
        el: "#root",
        data : {
            image : [
                {
                    url: 'img/01.jpg',
                    titolo: 'Svezia',
                    descrizione: 'Svezia',
                },
                {
                    url: 'img/01.jpg',
                    titolo: 'Svizzera',
                    descrizione: 'Svizzera',
                },
                {
                    url: 'img/01.jpg',
                    titolo: 'Gran Bretagna',
                    descrizione: 'Gran Bretagna',
                },
                {
                    url: 'img/01.jpg',
                    titolo: 'Germania',
                    descrizione: 'Germania',
                },
                {
                    url: 'img/01.jpg',
                    titolo: 'Paradise',
                    descrizione: 'Paradise',
                }
            ],



        }
    })


})