const SequelizeAuto = require("sequelize-auto");
const _ = require("lodash");

export default class SequelizeAutoEgg extends SequelizeAuto {
  constructor(
    database: string,
    username: string,
    password: string,
    options: any
  ) {
    super(database, username, password, options);
  }
  write(attributes: any, typescriptFiles: any, callback: any) {
    const tables = _.keys(attributes);
    var modelObj: { [key: string]: any } = {};
    var controllerObj: { [key: string]: any } = {};
    tables.forEach((table: string) => {
      modelObj[table] = attributes[table]
        .split(/sequelize\.define.+\,/g)[1]
        .split(", {")[0];
      controllerObj[table] = modelObj[table]
        .replace(/DataTypes\.(BIGINT|DECIMAL|INTEGER|DOUBLE)/g, "'number'")
        .replace(/DataTypes\.STRING\(\d+\)/g, "'string'")
        .replace(/comment\: \'/g, "description: '")
        .replace(/allowNull\: (true|false)\,\n\t+/g, "")
        .replace(/\tfield\: \'[a-zA-Z_]+\'\n\t+/g, "")
        .replace(/autoIncrement\: true\,\n\t\t\t/g, "")
        .replace(/\tprimaryKey\: true\n\t\t/g, "")
        .replace(/\tunique: true,\n\t\t/g, "")
        .replace(/\tdefaultValue: [0-9\.a-zA-Z\']+\,\n\t\t/g, "")
        .replace(/\n\t/g, '\n')
        .replace(/\"/g,"'");
    });
    this.eggModel = modelObj;
    this.controllerModel = controllerObj;
    callback();
  }
}

export function genEggSequelize() {
  const auto = new SequelizeAutoEgg("study", "study_test", "kwwHn4JzfIoL", {
    host: "10.172.131.26",
    dialect: "mysql",
    port: "3306",
    tables: ["ykt_live_user_poll"],
    camelCase: true,
  });
  auto.run(function (err: any) {
    console.log(auto.controllerModel);
  });
}

// genEggSequelize();
