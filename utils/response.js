let response = require("./writer").respondWithCode;


exports.UnexpectedError = response(500, {
    message: "Internal server error"
});

exports.InvalidReqBody = response(400, {
    message : "Invalid Request body"
});

exports.InvalidTask = response(400, {
    message: "Invalid Task"
  });

exports.InvalidFrequency = response(400, {
    message: "Invalid Task_Status"
  });

exports.TaskUpdated = response(200, {
    message: "Successfully updated"
  });

exports.RecordNotFound = response(404, {
    message: "Record Not Found"
  });  

  exports.TaskDeleted = response(200, {
    message: "Successfully Deleted"
  });
  

  exports.InvalidTaskId = response(400, {
    message: "Invalid Task Id"
  });