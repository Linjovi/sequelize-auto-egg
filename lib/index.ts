const SequelizeAuto = require("sequelize-auto");
const _ = require('lodash');

export default class SequelizeAutoEgg extends SequelizeAuto{
  constructor(database:string, username:string, password:string, options:any){
    super(database, username, password, options)
  }
  write(attributes:any, typescriptFiles:any, callback:any) {
    const tables = _.keys(attributes);
    var obj:{[key:string]:any} = {}
    tables.forEach((table: string) => {
      obj[table] = attributes[table].split(/sequelize\.define.+\,/g)[1].split(', {')[0]
    });
    this.eggModel = obj
    callback()
  }
}

export function genEggSequelize() {
  const auto = new SequelizeAutoEgg("crmdb", "root", "12345", {
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3306",
    tables: ["ykt_course_income"],
    camelCase: true,
  });
  auto.run(function (err: any) {
    console.log(auto.eggModel)
  });
}
