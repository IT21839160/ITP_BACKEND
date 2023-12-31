const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    ProductName : {
        type: String,
        required: true
    },
    GenericName :{
        type: String,
        required: true
    },
    ReferenceNo :{
        type: Number,
        required: true
    },
    Category :{
        type: String,
    },
    Type: {
        type: String
    },
    MfgDate: {
        type: Date
    },
    ExpDate: {
        type: Date,
        required: true
    },
    Description: {
        type: String
    },
    Quantity: {
        type: Number,
        required: true
    },
    Image: {
        data: String,
    }

})

const Inventory = mongoose.model("Stock",inventorySchema);
module.exports = Inventory;