declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL : string;
            MAILSERVER_URL: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
        }
    }
}
export {}