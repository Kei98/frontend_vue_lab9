<template>
    <div class="listaJuegos">

        <router-link :to="{ name: `InsertarJuego`}" class="boton">
            Insertar Juego
        </router-link>
        <ol v-if="juegos.length">
            <li v-for="juego in juegos" :key="juego.id">
                <router-link :to="{ name: `VerJuego`, params: { id: juego.id, juegoProp: juego } }">
                    {{ juego.nombre }}
                </router-link>
            </li>
        </ol>
            <div v-if="!juegos.length" class="mensaje">No existen juegos para mostrar</div>
    </div>
</template>

<script>
    import axios from "axios";
    
    export default {
        name: "Principal",
        data() {
            return {
                juegos: []
            }
        },
        mounted() {
            this.cargarJuegos();
        },
        methods: {
            cargarJuegos: function () {
                axios.get("http://laboratorio9.test/api/juegos")
                .then(response => {
                    this.juegos = response.data;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .listaJuegos {
        border: 1px solid black;
        width: 500px;
        margin: 0 auto;
        text-align: left;
        padding: 30px;
        font-size: 30px;
    }
    ol {
        li {
            margin: 10px auto;
        }
    }
    .mensaje {
        padding-top: 20px;
    }
</style>