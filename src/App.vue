<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>


    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        
        .boton {
            text-decoration: none;
            font-size: 30px;
            color: white;
            font-weight: 600;
            padding: 20px;
            background-color: gray;
            display: block;
            text-align: center;
            border: 2px solid gray;
            transition: all 1s;
            margin-bottom: 5px;
            
            &:hover {
                color: black;
                background-color: white;
                transition: all 1s;
            }
            
        }
    }
</style>
