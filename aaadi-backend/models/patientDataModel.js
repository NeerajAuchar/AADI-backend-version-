const { Timestamp } = require("mongodb");
const mongoose =  require("mongoose");


const patientData = mongoose.Schema({
    patientName: {
        type: String,
        required : [true, "Please enter the name of patient"],
    },
    age:{
        type: String,
        required: [true, "Please enter the age of patient"],
    },

    drugPortion :{
        type: String,
        required: [true, "Please enter the anaesthesia portion"],
    },
    anesthesia_type :{
        type: String,
        required: [true, "Please enter the type of anaesthesia"],
    },
    drug_name:{
        type: String,
        required: [true, "Please enter the drug name"],
    },
    adharCard:{
        type: String,
        required: [true, "please enter your adhar card number"],
        unique:[true],
    }
},{
    timestamps: true,
});
 

module.exports = mongoose.model("patientData",patientData);