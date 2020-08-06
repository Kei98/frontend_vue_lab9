import Vue from "vue";
import Router from "vue-router";
import Principal from "./components/Principal";
import VerJuego from "./components/VerJuego";
import ModificarJuego from "./components/ModificarJuego";
import InsertarJuego from "@/components/InsertarJuego";


Vue.use(Router);

export default new Router( {
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Principal",
            component: Principal
            // component: () => import("./components/Principal")
        },
        {
            path: "/modificar/:id",
            name: "ModificarJuego",
            props: true,
            component: ModificarJuego
        },
        {
            path: "/insertar",
            name: "InsertarJuego",
            component: InsertarJuego
        },
        {
            path: "/:id",
            name: "VerJuego",
            props: true,
            component: VerJuego
            // component: () => import("./components/VerJuego")
        }

    ]
})