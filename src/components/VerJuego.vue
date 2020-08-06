<template>
    <div class="infoJuego">
        <h4>ID: <span>{{ juego.id }}</span></h4>
        <h4>Nombre: <span>{{ juego.nombre }}</span></h4>
        <h4>Género: <span>{{ juego.genero }}</span></h4>
        <h4>Cantidad de jugadores: <span>{{ juego.cantidad_jugadores }}</span></h4>
        <h4>Precio: <span>{{ juego.precio }}</span></h4>
    
        <router-link class="boton" :to="{ name: 'ModificarJuego', params: { id: juego.id, juegoProp:juego } }">Modificar</router-link>
        <button class="boton" @click="eliminarData()">Eliminar</button>
        <router-link class="boton" :to="{ name: 'Principal' }">Regresar</router-link>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "VerJuego",
        props: {
            juegoProp: Object
        },
        data() {
            return {
                juego: this.juegoProp
            }
        },
        methods: {
            eliminarData() {
                axios.delete("http://laboratorio9.test/api/juegos" + this.juego.id)
                    .then(response => {
                        if(response.status===200) {
                            this.$router.push("/");
                        }
                    })
            }
        }
    }
</script>

<style lang="scss">
    .infoJuego {
        border: 1px solid black;
        padding: 10px 20px;
        width: 500px;
        margin: 0 auto;
        font-size: 30px;
        text-align: left;
    
        span {
            font-weight: normal;
        }
    
        button {
            width: 100%;
        }
    }
</style>