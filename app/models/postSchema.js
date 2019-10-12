var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
 title:{
     type: String,
     required: true
    },
 description: {
     type:String,
    required: true}
});
var User = mongoose.model("Userme", postSchema);
module.exports = User;