const Task = require("../models/task.model");
const Response = require("../utils/response");

/**
 * 
 * @param {*} body 
 * @returns task added message
 */
exports.addTask = async(body) =>{
    try {
    
        let task = new Task(body);
        const res = await task.save(task)
        return res;
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}

/**
 * 
 * @param {*} body 
 * @param {*} task_id 
 * @returns update the task
 */
exports.updateTask = async(body, task_id) =>{
    try {
        let query={
            task_name: body.task_name,
            task_status: body.task_status
        }  
        Object.keys(query).forEach((key)=>typeof query[key] === "undefined" && delete query[key])
         console.log(query);
        let res = await Task.findOneAndUpdate({_id:task_id,},query)
        return res;
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}
/**
 * 
 * @returns  list of tasks
 */
exports.listTask = async() =>{
    try {
        let res = await Task.aggregate([
            {
                $project: {
                    day: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    task_status: 1
                }
            },
            {
                $group: {
                    _id: { day: "$day", task_status: "$task_status" },
                    count: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: "$_id.day",
                    task_status_counts: {
                        $push: {
                            task_status: "$_id.task_status",
                            count: "$count"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    day: "$_id",
                    task_status_counts: 1
                }
            }
        ])

        return res
    } catch (error) {
         throw Response.UnexpectedError;
    }
}

/**
 * 
 * @param {*} task_id 
 * @returns remove the tasks
 */
exports.removeTask = async(task_id) =>{
    try {
        let res = await Task.deleteOne({_id:task_id})
        return res;
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}

/**
 * 
 * @param {*} task_id 
 * @returns track the task
 */
exports.trackTask = async(task_id) =>{
    try {
         let res = await Task.findOne({_id:task_id}).select({"task_name":1,"task_status":1,"_id":0})

        return res
    } catch (error) {
        if(error.code == 11000)
            throw Response.UserAlreayExist;
        else throw Response.UnexpectedError;
    }
}