 const express = require("express");

const router = express.Router();
const {getPatientsData,getPatientData, postPatientData, updatePatientData, deletePatientData} = require("../controllers/patientController");

router.route("/").get(getPatientsData).post(postPatientData);
router.route("/:id").get(getPatientData).put(updatePatientData).delete(deletePatientData);





module.exports = router;