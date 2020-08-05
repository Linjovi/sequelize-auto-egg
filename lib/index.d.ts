declare const SequelizeAuto: any;
export default class SequelizeAutoEgg extends SequelizeAuto {
    constructor(database: string, username: string, password: string, options: any);
    write(attributes: any, typescriptFiles: any, callback: any): void;
}
export declare function genEggSequelize(dbName: string | undefined, user: string | undefined, password: string | undefined, options: any): void;
export {};
