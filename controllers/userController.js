var db = require("../models/index.js");
/* const sequelize = require("../models/users.js"); */
const Users = db.users;
const { Op } = require("sequelize");

//1 .add user data
var addUser = async (req, res) => {
  let data = await Users.create({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  });

  res.status(200).json(data);
};

//2. User data store
var updateUser = async (req, res) => {
  let data = await Users.update(
    {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  let datas = await Users.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json(data);
  res.status(200).json(datas);
};

//3. find all user data
var findAllUser = async (req, res) => {
  let data = await Users.findAll();
  res.status(200).json(data);
};

//4. find specific user data
var findOneUser = async (req, res) => {
  let datas = await Users.findOne({
    where: { id: req.params.id },
  });

  res.status(200).json(datas);
};

//5. code for soft delete
var deleteUser = async (req, res) => {
  let p = req.params.id;
  if (p === null) {
    res.status(400).json("No data present");
  } else {
    let data = await Users.destroy({
      where: { id: req.params.id },
    });
  }
  res.json("Yes soft deleted data");
};

//6. restore the soft deleled data
var restorUser = async (req, res) => {
  let data = await Users.restore({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(data);
};

//7. Find by primary key
var findByPK = async (req, res) => {
  let pk = req.params.id;
  if (pk === null) {
    res.json("Invalid id");
  } else {
    let data = await Users.findByPk(pk);
    res.status(200).json(data);
  }
};

//8. find and count all  method
var findAndCountAll = async (req, res) => {
  let { count } = await Users.findAndCountAll({
    where: { gender: req.params.gender },
  });
  res.json(count);
};

//9. restore the soft deleled data
//not equal method
var restorUserByOperator = async (req, res) => {
  let data = await Users.restore({
    where: {
      SoftDeleted: {
        [Op.ne]: null,
      },
    },
  });
  res.json("ok restored");
};

//10 count all data
var countData = async (req, res) => {
  let data = await Users.count({
    where: {
      gender: req.params.gender,
    },
  });
  res.json(data);
};

//11. count not soft deleted data
var countnotdeleteddata = async (req, res) => {
  let { count, rows } = await Users.findAndCountAll({
    where: {
      SoftDeleted: {
        [Op.eq]: null,
      },
    },
  });
  let response = {
    count: count,
    data: rows,
  };
  res.json(response);
};

//12 Operator
//1. Equal to operator
var EqualToOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      gender: {
        [Op.eq]: "male",
      },
    },
  });
  res.json(data);
};

//2. Greater than
var GreaterThenOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.gt]: 3,
      },
    },
  });
  res.json(data);
};

//3. Less than
var LessThenOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.lt]: 3,
      },
    },
  });
  res.json(data);
};

//4. Greate than equal to
var GreaterThenEqualOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.gte]: 3,
      },
    },
  });
  res.json(data);
};

//5. Less than equal to
var LessThenEqualOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.lte]: 3,
      },
    },
  });
  res.json(data);
};

//6. And oerator
var AndOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      [Op.and]: {
        id: 5,
      },
      [Op.and]: {
        name: "Tanvvi",
      },
    },
  });
  res.json(data);
};

//7. OR operator
var OrOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      [Op.or]: {
        id: 2,
      },
      [Op.or]: {
        gender: "male",
      },
    },
  });
  res.json(data);
};

//8. Not equal to method
var notEqualto = async (req, res) => {
  let data = await Users.findAll({
    where: {
      gender: {
        [Op.ne]: "male",
      },
    },
  });
  res.json(data);
};
module.exports = {
  addUser,
  updateUser,
  findAllUser,
  findOneUser,
  deleteUser,
  findByPK,
  findAndCountAll,
  restorUser,
  restorUserByOperator,
  countData,
  countnotdeleteddata,
  EqualToOperator,
  GreaterThenOperator,
  LessThenOperator,
  GreaterThenEqualOperator,
  LessThenEqualOperator,
  AndOperator,
  OrOperator,
  notEqualto,
};
