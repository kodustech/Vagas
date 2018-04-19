import Descricao from './components/descricao/Descricao.vue'
import Home from './components/home/Home.vue'

export const routes = [
    { path: '', component: Home, name: 'Home'},
    { path: '/descricao/:name:description:url', component: Descricao, name: 'Descricao'},
    { path: '/descricao/:name::url', component: Descricao, name: 'DescricaoVazia'},
    { path: '*', component: Home }
];