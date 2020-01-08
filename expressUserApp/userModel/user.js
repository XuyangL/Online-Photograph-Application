
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
  username:{type:String, unique:true},
  password:String,
  email:String,
  role:String,
  hashed_password:String

}); 

mongoose.model('User',userSchema);