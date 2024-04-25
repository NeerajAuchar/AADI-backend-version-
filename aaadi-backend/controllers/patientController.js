const asyncHandler = require("express-async-handler");

//@desc GET all patients data
//@route  GET/patient/data
//@access public

const getPatientData = asyncHandler(async(req, res)=>{
    res.status(200).json({message: "Data retrived  successfully <3"});
});

//@desc POST all patients data
//@route  POST/patient/data
//@access public

const postPatientData = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const{patientName, age, drugPortion, anesthesia_type , drug_name} = req.body;
    if(!patientName || !age || !drugPortion || !anesthesia_type || !drug_name){
        res.status(400);
        throw new Error("All feilds are mandatory!!");
    }
    res.status(200).json({
        name: patientName,
        age:age,
        anesthesia : anesthesia_type,
        anaesthesia_name : drug_name,
        anaesthesia_portion : drugPortion
    });
});


//@desc PUT all patients data
//@route  PUT/patient/data
//@access public

const updatePatientData = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `Data updated successfully for id : ${req.params.id}`});
});

//@desc DELETE all patients data
//@route  DELETE/patient/data
//@access public

const deletePatientData = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `Data deleted successfully ${req.params.id}`});
});

module.exports = {getPatientData, postPatientData, updatePatientData, deletePatientData};