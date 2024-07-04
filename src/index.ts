import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import { replitKVPlugin } from "./plugins/replit-kv";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
	.use(
		swagger({
			scalarConfig: {
				theme: "purple",
			},
		}),
	)
	.use(cors())
	.use(
		staticPlugin({
			assets: "./.static",
			prefix: "/",
		}),
	)
	.use(replitKVPlugin(process.env.REPLIT_DB_URL!, { prefix: "kv" }))
	.get("/", async () => JSON.stringify(Bun.env, null, 2))
	.listen({
		hostname: "0.0.0.0",
		lowMemoryMode: true,
		development: true,
	});
