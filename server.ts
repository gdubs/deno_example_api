import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const port = 2525;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`server runs on ${port}`);

await app.listen({ port });
