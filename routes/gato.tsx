import Axios from "npm:axios"
import { Frase } from "./frase.tsx"
import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"
 
export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Frase>) => {
        const response = await Axios.get<Frase>("https://filmquotes.deno.dev/")
        return ctx.render(response.data)
    }
}

const PaginaGato = (props: PageProps<Frase>) => {
    return (
        <body class="img-fondo-4">
            <div>
                <img class="delfin" src= "https://i.gifer.com/XZ5O.gif" /> 
                <a href="/frase"><img class="rana" src="https://i.gifer.com/XcF7.gif" /></a>
                <img class="circulo" src="https://i.gifer.com/YlW9.gif"/>
                <p class="texto-api">{props.data}<span>&#160;</span></p>
            </div>
        </body>
    )
}

export default PaginaGato