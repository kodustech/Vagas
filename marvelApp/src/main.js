import Vue from 'vue'

var md5h = require('md5');

var PRIV_KEY = "<<COLOQUE SUA KEY AQUI>>";
var API_KEY = "<<COLOQUE SUA KEY AQUI>>";
var ts = new Date().getTime();
var hash2 = md5h(ts + PRIV_KEY + API_KEY );


new Vue({
    el: '#app',
    data: {
        // controle de janela
        procura: true, detalhe: false, carregando: false, aviso: false,
        // controle de pesquisa
        heroi: '', herois: [], mensagem: '', erro: '', i:0,
        // PAGINAÇÃO
        temMais: false, temMenos: false, offset: 0,
        // JANELA DE DETALHESno
        dadosDetalhe: '', comics: '', carregandoComics: false, linkcomics: '',
    },
    methods: {

        busca() {
            this.aviso = false; this.carregando = true; this.herois = [];
            this.temMenos = false; this.temMais = false; this.offset = 0;

            fetch("https://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+API_KEY+"&hash="+hash2+"&nameStartsWith=" + this.heroi + "&limit=24")
                .then(response => response.json())
                .then((data) => {
                    if (data.code == 200) {
                        this.herois = data.data.results;
                        if (!this.herois[0]) {
                            this.mensagem = 'NÃO FORAM ENCONTRADOS HERÓIS COM ESSE NOME'
                            this.temMais = false;
                            this.carregando = false;
                        }
                        // DEFININDO PAGINAÇÃO
                        else if (data.data.total > 24) {
                            this.temMais = true;
                            this.carregando = false;
                        } else {
                            this.temMais = false;
                            this.carregando = false;
                        }
                    } else {
                        this.mensagem = 'OPERAÇÃO MAL SUCEDIDA. ERRO: ' + data.code;
                        this.erro = data.status;
                        this.temMais = false;
                        this.carregando = false;
                    }
                });
        },

        buscarMais() {
            this.herois = []; this.carregando = true;

            this.temMais = false; this.temMenos = false; this.offset = this.offset + 25;

            fetch("https://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+API_KEY+"&hash="+hash2+"&nameStartsWith=" + this.heroi + "&limit=24&offset=" + this.offset )
                .then(response => response.json())
                .then((data) => {
                    if (data.code == 200) {
                        this.herois = data.data.results;

                        // DEFININDO PAGINAÇÃO
                        if ((data.data.total - 25) > this.offset) {
                            this.temMais = true;
                            this.temMenos = true;
                            this.carregando = false;
                        } else {
                            this.temMais = false;
                            this.temMenos = true;
                            this.carregando = false;
                        }
                    } else {
                        this.mensagem = 'OPERAÇÃO MAL SUCEDIDA. ERRO: ' + data.code;
                        this.erro = data.status;
                        this.temMais = false;
                        this.carregando = false;
                    }
                });
        },


        buscarMenos() {
            this.herois = []; this.carregando = true;
            this.offset = this.offset - 25;

            this.temMenos = false; this.temMais = false;

            fetch("https://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+API_KEY+"&hash="+hash2+"&nameStartsWith=" + this.heroi + "&limit=24&offset=" + this.offset )
                .then(response => response.json())
                .then((data) => {
                    if (data.code == 200) {
                        this.herois = data.data.results;

                        // DEFININDO PAGINAÇÃO
                        if ((this.offset - 25) >= 0) {
                            this.temMenos = true;
                            this.temMais = true;
                            this.carregando = false;
                        } else {
                            this.temMenos = false;
                            this.temMais = true;
                            this.carregando = false;
                        }
                    } else {
                        this.mensagem = 'OPERAÇÃO MAL SUCEDIDA. ERRO: ' + data.code;
                        this.erro = data.status;
                        this.temMais = false;
                        this.carregando = false;
                    }
                });


        },


        detalhes: function (id) {
            this.dadosDetalhe = []; this.comics = [];

            this.procura = false; this.detalhe = true; this.carregando = true;
            this.carregandoComics = false;


            fetch("https://gateway.marvel.com/v1/public/characters/" + id +"?ts="+ts+"&apikey="+API_KEY+"&hash="+hash2)
                .then(response => response.json())
                .then((data) => {
                    if (data.code == 200) {
                        this.dadosDetalhe = data.data.results[0];
                        this.carregando = false;

                        if (this.dadosDetalhe.comics.available > 0) {
                            this.i = 0;
                            this.linkcomics = '';
                            this.carregandoComics = true;

                            // RECEBENDO OS 30 PRIMEIROS COMICS
                            fetch("https://gateway.marvel.com/v1/public/characters/" + id + "/comics?ts=" + ts + "&apikey=" + API_KEY + "&hash=" + hash2 + "&format=comic&formatType=comic&orderBy=-issueNumber&limit=30")
                                .then(response => response.json())
                                .then((data) => {
                                    this.comics = data.data;
                                    this.carregandoComics = false;
                                });

                            // PERCORRENDO URLS FORNECIDAS PROCURANDO LISTA DE COMICS
                            while (this.dadosDetalhe.urls[this.i]) {
                                if (this.dadosDetalhe.urls[this.i].type == 'comiclink') {
                                    console.log(this.dadosDetalhe.urls[this.i].url);
                                    this.linkcomics = this.dadosDetalhe.urls[this.i].url;
                                    break;
                                }
                                this.i += 1;
                            }

                        }
                    }else {
                        this.mensagem = 'OPERAÇÃO MAL SUCEDIDA. ERRO: ' + data.code;
                        this.erro = data.status;
                        this.temMais = false;
                        this.carregando = false;
                    }
                });

        },


        voltar() {
            this.procura = true;
            this.detalhe = false;
        }
    }
})
