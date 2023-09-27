var express = require("express");
var router = express.Router();
const taskController = require("../../controllers/v1/task")


/*URL API routes */
router.post("/task/add", (req, res,next) => {
  taskController.addTask(req, res, next,req.body)
});
router.put("/task/update", (req, res,next) => {
  taskController.updateTask(req, res, next,req.body)
});
router.get("/task/list", (req, res,next) => {
  taskController.listTask(req, res, next)
});
router.delete("/task/remove", (req, res,next) => {
  taskController.removeTask(req, res, next,)
});

router.get("/task/track", (req, res,next) => {
  taskController.trackTask(req, res, next,)
});

module.exports = router;
