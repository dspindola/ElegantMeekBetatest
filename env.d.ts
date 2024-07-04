declare module "bun" {
    interface Env {
        readonly REPLIT_DB_URL: string;
        readonly REPLIT_BUCKET_ID: string;
        readonly REPL_ID: string;
        readonly REPLIT_DEV_DOMAIN: string;
    }
}