const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        default: "Point"
    },
    coordinates: {
        type: [Number],
        required: true,
        index: "2dsphere"
    }
});

const shipMateSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number},
  about: {type: String},
  password: {type: String, required: true},
  phone: {type: String, required: true},
  location: {type: pointSchema},
  image: {type: String},
},
{
    timestamps: true,

});

module.exports = mongoose.model("ShipMate", shipMateSchema);
