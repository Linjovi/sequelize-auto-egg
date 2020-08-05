"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEggSequelize = void 0;
const SequelizeAuto = require("sequelize-auto");
const _ = require('lodash');
class SequelizeAutoEgg extends SequelizeAuto {
    constructor(database, username, password, options) {
        super(database, username, password, options);
    }
    write(attributes, typescriptFiles, callback) {
        const tables = _.keys(attributes);
        var obj = {};
        tables.forEach((table) => {
            obj[table] = attributes[table].split(/sequelize\.define.+\,/g)[1].split(', {')[0];
        });
        this.eggModel = obj;
        callback();
    }
}
exports.default = SequelizeAutoEgg;
function genEggSequelize(dbName = "crmdb", user = "root", password = "12345", options) {
    const auto = new SequelizeAutoEgg(dbName, user, password, options
    // {
    // host: "127.0.0.1",
    // dialect: "mysql",
    // port: "3306",
    // tables: ["ykt_course_income"],
    // camelCase: true,
    // }
    );
    auto.run(function (err) {
        console.log(auto.eggModel);
    });
}
exports.genEggSequelize = genEggSequelize;
//# sourceMappingURL=index.js.map