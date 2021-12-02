Vue.config.devtools = true;

const app = new Vue(
    {
        el:'#root',
        data: {
            titleText: 'titolo messo tramite vue',
            imageLink: 'https://www.turismoeservizi.it/wp-content/uploads/2016/02/Panorama-Pozzuoli.jpg'
        }
    }
)