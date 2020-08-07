# sequelize-auto-egg
基于[sequelize-auto](https://github.com/sequelize/sequelize-auto)，生成数据库模型字符串。
## use
```
const SequelizeAutoEgg = require("sql-auto-egg").default;
const auto = new SequelizeAutoEgg(
  'dbName',
  'user',
  'password',
  {
    host: 'host',
    dialect: "mysql",
    port: 'port',
    tables: ['table'],
    camelCase: true,
  }
);
auto.run(function (err) {
  console.log(auto.eggModel)
}
```

get
```
`{
  id: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  courseId: {
    type: DataTypes.BIGINT,
    allowNull: true,
    comment: '课程Id',
    field: 'course_id'
  },
  courseName: {
    type: DataTypes.STRING(64),
    allowNull: true,
    comment: '课程名称',
    field: 'course_name'
  },
  orderId: {
    type: DataTypes.BIGINT,
    allowNull: true,
    comment: '订单Id',
    unique: true,
    field: 'order_id'
  },
  payTime: {
    type: DataTypes.BIGINT,
    allowNull: true,
    comment: '支付时间',
    field: 'pay_time'
  },
  payAmount: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    defaultValue: 0.00,
    comment: '支付金额',
    field: 'pay_amount'
  }
}`
```