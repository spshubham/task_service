var mongoose = require("mongoose");
var task = mongoose.Schema({

  task_name: {
   type: String,
    required: true
  },
  task_status:{
      type:String,
      enum: ["IN_PROGRESS", "COMPLETED", "OPEN"]
    }
  
}, { timestamps: true });

module.exports = mongoose.model("Task", task);