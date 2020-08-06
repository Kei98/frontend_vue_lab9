<template>
    <div>
        <form method="POST" @submit.prevent @click="modificarData()">
            <label for="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" v-model="juego.nombre">
    
            <label for="anio_lanzamiento">Año de lanzamiento: </label>
            <input type="number" id="anio_lanzamiento" name="anio_lanzamiento" v-model="juego.anio_lanzamiento">
    
            <label for="genero">Genero: </label>
            <input type="text" id="genero" name="genero" v-model="juego.genero">
    
            <label for="cantidad_jugadores">Cantidad de jugadores: </label>
            <input type="number" id="cantidad_jugadores" name="cantidad_jugadores" v-model="juego.cantidad_jugadores">
    
            <label for="precio">Precio: </label>
            <input type="number" id="precio" name="precio" v-model="juego.precio">
    
            <input class="boton" type="submit" value="Guardar">
    
            <router-link class="boton" :to="{ name: `VerJuego`, params: { id: juego.id, juegoProp: juego } }">
                Regresar
            </router-link>
            
        </form>
    
        <div class="mensajes">{{ mensaje }}</div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "ModificarJuego",
        props: {
            juegoProp: Object
        },
        data() {
            return {
                juego: this.juegoProp,
                mensaje: ""
            }
        },
        methods: {
            modificarData: function () {
                axios.patch("http://laboratorio9.test/api/juegos/" + this.juego.id, this.juego)
                .then(response => {
                    if(response.status===200) {
                        this.mensaje = response.data;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    form {
        width: 500px;
        margin: 0 auto;
        label, input {
            display: block;
            margin: 0 auto;
            font-size: 30px;
        }
        
        label {
            font-weight: 600;
        }
        input {
            width: 100%;
            
            &[type=submit] {
                margin-top: 30px;
            }
        }
    }
    .mensajes {
        margin-top: 20px;
        font-size: 20px;
    }
    
</style>