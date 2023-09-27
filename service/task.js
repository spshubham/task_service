"use strict";
var Response = require("../utils/response");
const validate = require("../utils/validation")
const TaskDb = require("../db/task.db");

/**
 * 
 * @param {*} body 
 * @param {*} user_id 
 * @returns add the task in db
 */
exports.addTask = async function (body) {
  try {
    if (body) {
      if (!body.task_name || !body.task_status) {
        throw Response.InvalidReqBody;
      }

    }
    const task = await TaskDb.addTask(body);
    return task
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};


/**
 * 
 * @param {*} body 
 * @param {*} url_id 
 * @returns update the given task
 */
exports.updateTask = async function (body, task_id) {
  try {
    if (!validate.isValidMongooseObjectId(task_id))
      return Response.InvalidTaskId
    const task = await TaskDb.updateTask(body, task_id);
    if (task)
      return Response.TaskUpdatedUpdated;
    else return Response.RecordNotFound
  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};


/**
 * 
 * @returns list the task
 */
exports.listTask= async function () {
  try {
    const task = await TaskDb.listTask();
    if (task)
      return task;
    else return Response.RecordNotFound

  } catch (error) {

    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};

/**
 * 
 * @param {*} task_id 
 * @returns delete the task
 */

exports.removeTask = async function (task_id) {
  try {
    if (!validate.isValidMongooseObjectId(task_id))
      return Response.InvalidTaskId
    const task = await TaskDb.removeTask(task_id);
    if (task.deletedCount)
      return Response.TaskDeletedDeleted;
    else return Response.RecordNotFound
  } catch (error) {
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};


/**
 * 
 * @returns track the task
 */
exports.trackTask = async function (task_id) {
  try {
    if (!validate.isValidMongooseObjectId(task_id))
      return Response.InvalidTaskId
    let task = await TaskDb.trackTask(task_id);
    if (task) {
      return task
    } else return Response.RecordNotFound
  } catch (error) {
    console.log(error);
    if (error.code) throw error
    else throw Response.UnexpectedError;
  }
};