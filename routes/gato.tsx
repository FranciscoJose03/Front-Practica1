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
            <link rel="icon" type="image/x-icon" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73746d37-23b8-42d0-b2c8-5c8046a1779a/das6sn6-396c6cb6-161d-4324-a6db-d57897768b78.png/v1/fill/w_947,h_844/gato_png_by_fvheart_das6sn6-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTEzIiwicGF0aCI6IlwvZlwvNzM3NDZkMzctMjNiOC00MmQwLWIyYzgtNWM4MDQ2YTE3NzlhXC9kYXM2c242LTM5NmM2Y2I2LTE2MWQtNDMyNC1hNmRiLWQ1Nzg5Nzc2OGI3OC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ycfFWXG1kE3J458MJu6kWzWJVRquVuJBxykmo8lnP_s"/>
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