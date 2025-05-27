import { NextFunction, Request, Response } from "express";
import insurancePolicyService from "./insurace-policy.service";

class InsurancePolicyController {
    constructor() {
        this.getInsuraceDetails = this.getInsuraceDetails.bind(this);
    }

    async getInsuraceDetails(req: Request, res: Response, next?: NextFunction) {
        try {
            if(req) {
                const data = await insurancePolicyService.getPolicies();
                res.send(data);
            }
        } catch(e) {
            if(next) {
                next(e);
            }
        }
    }
}

const insurancePolicyController = new InsurancePolicyController();
export default insurancePolicyController;