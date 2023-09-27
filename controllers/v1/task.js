"use strict";

var utils = require("../../utils/writer.js");
var Task = require("../../service/task.js");

module.exports.addTask = function addTask (req, res, next, body) {
    Task.addTask(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTask = function updateTask (req, res, next, body) {
  Task.updateTask(body,req.query["task_id"])
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.listTask = function listTask (req, res, next, body) {
  Task.listTask()
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.removeTask = function removeTask (req, res, next, body) {
  Task.removeTask(req.query["task_id"])
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.trackTask = function trackTask (req, res, next, body) {
  Task.trackTask(req.query["task_id"])
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
