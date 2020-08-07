"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEggSequelize = void 0;
const SequelizeAuto = require("sequelize-auto");
const _ = require("lodash");
class SequelizeAutoEgg extends SequelizeAuto {
    constructor(database, username, password, options) {
        super(database, username, password, options);
    }
    write(attributes, typescriptFiles, callback) {
        const tables = _.keys(attributes);
        var modelObj = {};
        var controllerObj = {};
        tables.forEach((table) => {
            modelObj[table] = attributes[table]
                .split(/sequelize\.define.+\,/g)[1]
                .split(", {")[0];
            controllerObj[table] = modelObj[table]
                .replace(/DataTypes\.(BIGINT|DECIMAL)/g, "'number'")
                .replace(/DataTypes\.STRING\(\d+\)/g, "'string'")
                .replace(/comment\: \'/g, "description: '")
                .replace(/allowNull\: (true|false)\,\n\t+/g, "")
                .replace(/\tfield\: \'[a-zA-Z_]+\'\n\t+/g, "")
                .replace(/autoIncrement\: true\,\n\t\t\t/g, "")
                .replace(/\tprimaryKey\: true\n\t\t/g, "")
                .replace(/\tunique: true,\n\t\t/g, "")
                .replace(/\tdefaultValue: [0-9\.a-zA-Z\']+\,\n\t\t/g, "");
        });
        this.eggModel = modelObj;
        this.controllerModel = controllerObj;
        callback();
    }
}
exports.default = SequelizeAutoEgg;
function genEggSequelize() {
    const auto = new SequelizeAutoEgg("crmdb", "root", "12345", {
        host: "127.0.0.1",
        dialect: "mysql",
        port: "3306",
        tables: ["ykt_course_income"],
        camelCase: true,
    });
    auto.run(function (err) {
        console.log(auto.controllerModel);
    });
}
exports.genEggSequelize = genEggSequelize;
// genEggSequelize();
//# sourceMappingURL=index.js.map