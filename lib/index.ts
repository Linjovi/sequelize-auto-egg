const SequelizeAuto = require('sequelize-auto')

export function genEggSequelize(){
  const auto = new SequelizeAuto('database','user','pass')
}