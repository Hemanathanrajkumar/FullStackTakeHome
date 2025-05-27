import { Router } from "express";
import insurancePolicyController from "../insurance-policy/insurace-policy.controller";

const insurancePolicyRouter = Router();
insurancePolicyRouter
    .get('/', insurancePolicyController.getInsuraceDetails)


export default insurancePolicyRouter;