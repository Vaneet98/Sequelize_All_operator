const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

//1. method for add user
router.post("/add", userCtrl.addUser);

//2. method for update the recode
router.put("/updateUser/:id", userCtrl.updateUser);

//3. method for find all the user recodes
router.get("/findAllUser", userCtrl.findAllUser);

//4. method for find any specific recods
router.get("/findOneUser/:id", userCtrl.findOneUser);

//5. method soft delete
router.delete("/softdelete/:id", userCtrl.deleteUser);

//6. method to restore the soft deleted data
router.get("/restore/:id", userCtrl.restorUser);

//7. method find by pk (primary  key)
router.get("/findByPK/:id", userCtrl.findByPK);

//8. method find and count all
router.get("/findAndCountAll/:gender", userCtrl.findAndCountAll);

//9. method to restore the soft deleted data by operator
router.get("/restoreByOperator", userCtrl.restorUserByOperator);

//10. count all data
router.get("/count/:gender", userCtrl.countData);

//11. count not soft deleted data
router.get("/notdeletedsoftdata", userCtrl.countnotdeleteddata);

//Operators
//1. Equal to
router.get("/operatorequalto", userCtrl.EqualToOperator);

//2. Greter than
router.get("/operatorgreaterthan", userCtrl.GreaterThenOperator);

//3. Less than
router.get("/operatorlessthan", userCtrl.LessThenOperator);

//4. Greter than equal to
router.get("/operatorgreaterthanequalto", userCtrl.GreaterThenEqualOperator);

//5. Less than equal to
router.get("/operatorlessthanequalto", userCtrl.LessThenEqualOperator);

//6. And operator
router.get("/operatorAnd", userCtrl.AndOperator);

//7. Or operator
router.get("/operatorOr", userCtrl.OrOperator);

//8. Not equal to
router.get("/notequaltooperator", userCtrl.notEqualto);

module.exports = router;
