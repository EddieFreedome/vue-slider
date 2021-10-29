
window.addEventListener("DOMContentLoaded", function(){
    Vue.config.devtools = true
    new Vue ({
        el: "#root",
        data : {
            imgList : [
                {
                    url: 'img/01.jpg',
                    titolo: 'Svezia',
                    descrizione: 'Svezia',
                },
                {
                    url: 'img/02.jpg',
                    titolo: 'Svizzera',
                    descrizione: 'Svizzera',
                },
                {
                    url: 'img/03.jpg',
                    titolo: 'Gran Bretagna',
                    descrizione: 'Gran Bretagna',
                },
                {
                    url: 'img/04.jpg',
                    titolo: 'Germania',
                    descrizione: 'Germania',
                },
                {
                    url: 'img/05.jpg',
                    titolo: 'Paradise',
                    descrizione: 'Paradise',
                }
            ],
             
            

        }
    })


})