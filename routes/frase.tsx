import Axios from "npm:axios"
import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"

export type Frase = {
    data: string;
}

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Frase>) => {
        const response = await Axios.get<Frase>("https://filmquotes.deno.dev/")
        return ctx.render(response.data)
    }
}

const Page = (props: PageProps<Frase>) => {
    return (
        <body class={"img-fondo-2"}>
            <div class={"cursor"}>
                <a href= "/fuego"><img class="img-fuego" src="https://i.gifer.com/y8.gif"/></a>
                    <p class="texto-api">{props.data}<span>&#160;</span></p>
                <a href={"/gato"}><img class="img-gato" src="https://i.gifer.com/PYh.gif"/></a>
            </div>
        </body>
    )
}

export default Page