const titulo = {
    props: ['texto'],
    template: `<h1>{{texto}}</h1>`,
}


const app = new Vue({
    data(){},
    methods: {},
// componentes de la instancia
    components: {         
titulo
    }
})

const appVue = app.mount('#app');