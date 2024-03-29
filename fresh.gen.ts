// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $frase from "./routes/frase.tsx";
import * as $frase_numero_ from "./routes/frase/[numero].tsx";
import * as $fuego from "./routes/fuego.tsx";
import * as $gato from "./routes/gato.tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/frase.tsx": $frase,
    "./routes/frase/[numero].tsx": $frase_numero_,
    "./routes/fuego.tsx": $fuego,
    "./routes/gato.tsx": $gato,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
