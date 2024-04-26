const asyncHandler = require("express-async-handler");
const patientData = require("../models/patientDataModel");

//@desc GET all patients data
//@route  GET/patient/data
//@access public

const getPatientsData = asyncHandler(async(req, res)=>{
    const pdata = await  patientData.find();
    res.status(200).json(pdata);
});

//@desc POST all patients data
//@route  POST/patient/data
//@access public

const postPatientData = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const{patientName, age, drugPortion, anesthesia_type , drug_name, adharCard } = req.body;
    if(!patientName || !age || !drugPortion || !anesthesia_type || !drug_name || !adharCard){
        res.status(400);
        throw new Error("All feilds are mandatory!!");
    }

    const pdata = await patientData.create({
        patientName,
        age,
        drugPortion,
        anesthesia_type, 
        drug_name,
        adharCard
    });
    res.status(200).json(pdata);
});


//@desc PUT all patients data
//@route  PUT/patient/data/:id
//@access public

const updatePatientData = asyncHandler(async(req, res)=>{
    const pdata = await patientData.findById (req.params.id);
    if(!pdata){
        res.status(404);
        throw new Error("Patient data not found."); 
    }
    const updatedPatientData = await patientData.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );

    res.status(200).json(updatedPatientData);

});

//@desc GET specific patient's data
//@router GET/patient/data/:id
//@access public
const getPatientData = asyncHandler(async (req, res) =>{

    const pdata = await patientData.findById (req.params.id);
if(!pdata){
    res.status(404);
    throw new Error("Patient data not found."); 
}
res.status(200).json(pdata);
});

//@desc DELETE all patients data
//@route  DELETE/patient/data/:id
//@access public

const deletePatientData = asyncHandler(async(req, res)=>{

    const pdata = await patientData.findById (req.params.id);
if(!pdata){
    res.status(404);
    throw new Error("Patient data not found."); 
}
await patientData.deleteOne();
    res.status(200).json(pdata);
});

module.exports = {getPatientsData, getPatientData, postPatientData, updatePatientData, deletePatientData};