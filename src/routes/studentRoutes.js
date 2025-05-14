import express from "express";
import {
  fetchAllStudents,
  initial,
  addStudent,
  updateFeesForAllStudents,
  studentRegistration,
  studentRegistrationByGoogleFormData,
} from "../controllers/studentController.js";
import { residentRegistrations } from "../controllers/residentRegistration.js";

const router = express.Router();

router.get("/", initial);
router.get("/all", fetchAllStudents);
router.post("/addNewStudent", addStudent);
router.post("/studentRegistration", studentRegistration);
router.put("/updateFeesForAllStudents", updateFeesForAllStudents);
// router.get("/generateMonthlyFees", generateMonthlyFees);
router.post("/google-form-data", studentRegistrationByGoogleFormData);

router.post("/residentregistration", residentRegistrations);

export default router;
