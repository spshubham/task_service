const { default: mongoose } = require("mongoose");
const URL = require("url").URL;

/**
 * 
 * @param {*} id 
 * @returns validate the mongoId
 */
exports.isValidMongooseObjectId = (id) => {
    return mongoose.isValidObjectId(id);
}
