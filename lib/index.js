"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEggSequelize = void 0;
debugger;
const SequelizeAuto = require('sequelize-auto');
function genEggSequelize() {
    const auto = new SequelizeAuto('crmdb', 'root', '12345', {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: '3306',
        typescript: true,
        tables: ['ykt_course_income']
    });
    auto.run(function (err) {
        console.log('error', err);
        console.log(auto.tables); // table list
        // console.log(auto.foreignKeys); // foreign key list
    });
}
exports.genEggSequelize = genEggSequelize;
genEggSequelize();
//# sourceMappingURL=index.js.map