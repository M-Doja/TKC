const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  googleId: String,
  facebookId: String,
  githubId: String,
  profilePic: String,
  acctBal: Number,
  paymentMethod: String,
  location: {
    country: String,
    state: String,
    city: String
  },
  buys: [{
    itemBrand: String,
    itemName: String,
    itemCost: Number,
    itemDesc: String,
    itemPic: String,
    itemSize: String,
    itemCategory: String,
    itemColors: [{
      primary: String,
      secondary: String
    }],
    itemPurchasedOn: { type: Date, default: Date.now }
  }],
  sells: [{
    itemBrand: String,
    itemName: String,
    itemCost: Number,
    itemDesc: String,
    itemPic: String,
    itemSize: String,
    itemCategory: String,
    itemColors: [{
      primary: String,
      secondary: String
    }],
    itemSoldOn: { type: Date, default: Date.now }
  }],
  watchList: [{
    itemBrand:String,
    itemName: String,
    itemCost: Number,
    itemDesc: String,
    itemSeller: Number
  }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
