<template>
    <div>
        <form method="POST" @submit.prevent @click="insertarData()">
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
            
            <router-link class="boton" :to="{ name: `Principal`}">
                Regresar
            </router-link>
        
        </form>
        
        <div class="mensajes">{{ mensaje }}</div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "InsertarJuego",
        data() {
            return {
                mensaje: "",
                juego: {
                    nombre : "",
                    anio_lanzamiento: 0,
                    genero: "",
                    cantidad_jugadores: 0,
                    precio: 0
                }
            }
        },
        methods: {
            insertarData: function () {
                axios.post("http://laboratorio9.test/api/juegos" + this.juego)
                    .then(response => {
                        if(response.status===201) {
                            this.mensaje = response.data();
                            this.juego = {
                                nombre : "",
                                    anio_lanzamiento: 0,
                                    genero: "",
                                    cantidad_jugadores: 0,
                                    precio: 0
                            }
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