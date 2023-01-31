const { Router } = require("express");
const { addNewConsultation, getAllConsultations, deleteConsultation, changeConsultation } = require("../controllers/Consultation");
const router = Router();

// get all the consultations
router.get("/", getAllConsultations);

// add new consultation
router.post("/", addNewConsultation);

// change consultation
router.patch("/:id", changeConsultation);

// delete consultation by id
router.delete("/:id", deleteConsultation);

module.exports = router;
