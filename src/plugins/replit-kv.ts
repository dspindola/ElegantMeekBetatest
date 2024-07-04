import Client from "@replit/database";
import Elysia, { t } from "elysia";

export const replitKVPlugin = <T extends string>(
	url: string,
	{ prefix }: { prefix: T },
) =>
	new Elysia<T>({
		prefix,
	})
		.state("kv", new Client(url))
		.get("/list", async ({ store }) => {
			return await store.kv.list();
		})
		.post(
			"/item/:key",
			({ store, body, params: { key } }) => {
				return store.kv.set(key, body);
			},
			{
				body: t.String(),
			},
		);
