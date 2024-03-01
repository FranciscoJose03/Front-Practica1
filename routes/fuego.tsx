import Axios from "npm:axios"
import { Frase } from "./frase.tsx"
import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"
 
export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Frase>) => {
        const response = await Axios.get<Frase>("https://filmquotes.deno.dev/")
        return ctx.render(response.data)
    }
}

const PaginaFuego = (props: PageProps<Frase>) => {
    return (
        <body class="img-fondo-3">
            <link rel="icon" type="image/x-icon" href="https://c0.klipartz.com/pngpicture/700/755/gratis-png-llama-ligera-explosion-de-fuego-material-decorativo-fuego-ardiente-llama-roja.png"/>
            <div>
            <a href="/frase"><img class="flecha" src = "https://i.gifer.com/ZSj7.gif"/></a>
                <img class ="img-fuego-2" src="https://i.gifer.com/y8.gif"/>
                <img class = "img-fuego-3" src="https://i.gifer.com/y8.gif"/>
                <img class="diablo" src ="https://i.gifer.com/4GZA.gif"/>
                <p class="texto-api">{props.data}<span>&#160;</span></p>
            </div>
        </body>
    )
}

export default PaginaFuego