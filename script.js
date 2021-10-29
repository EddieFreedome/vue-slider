const arrImg = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const arrTitle = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const arrText = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

window.addEventListener("DOMContentLoaded", function(){
    VTTCue.config.devtools = true
    newVue ({
        el: "#root",
        data : {
            Image : [
                {
                    url: 'img/01.jpg',
                    titolo: 'Svezia',
                    descrizione: 'Svezia',
                }
                {
                    url: 'img/01.jpg',
                    titolo: 'Svizzera',
                    descrizione: 'Svizzera',
                }
                {
                    url: 'img/01.jpg',
                    titolo: 'Gran Bretagna',
                    descrizione: 'Gran Bretagna',
                }
                {
                    url: 'img/01.jpg',
                    titolo: 'Germania',
                    descrizione: 'Germania',
                }
                {
                    url: 'img/01.jpg',
                    titolo: 'Paradise',
                    descrizione: 'Paradise',
                }
            ]
        }
    })


})