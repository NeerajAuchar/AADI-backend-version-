 const express = require("express");

const router = express.Router();
const {getPatientData, postPatientData, updatePatientData, deletePatientData} = require("../controllers/patientController");

router.route("/").get(getPatientData).post(postPatientData);
router.route("/:id").put(updatePatientData).delete(deletePatientData);





module.exports = router;