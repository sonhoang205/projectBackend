const mongoose = require('mongoose');
// const UserModel = require('../auth/user')

const ColorSchema = new mongoose.Schema({
    idColor1 : {
      type:String,

  },
  idColor2 : {
      type:String,

  },
  idColor3 : {
      type:String,

  },
  idColor4 : {
      type:String,

  },
  idColor5 : {
      type:String,

  },
  user:{
      type: String
  }
  // email:{
  //   type: String,
  //   required:true
  // },

}, {
  // tự động thêm createdAt, updatedAt
  timestamps: true
});

const ColorModel = mongoose.model('Color', ColorSchema);

module.exports = ColorModel;