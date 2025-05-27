import { InMemoryDatabase } from "../db/in-memory.db";
import { InsurancePolicy } from "./insurance-policy.interface";

class InsurancePolicyService {
    private db: InMemoryDatabase;


    data = [

        {
            "id": 1,
            "name": "Secure Future Term Life",
            "type": "Term Life",
            "premium": 5000,
            "coverage": 1000000
        },
        {
            "id": 2,
            "name": "Health Shield Plan",
            "type": "Health",
            "premium": 3000,
            "coverage": 500000
        },
        {
            "id": 3,
            "name": "Car Protect Plan",
            "type": "Vehicle",
            "premium": 2000,
            "coverage": 300000
        }
    ];

    constructor() {
        this.db = new InMemoryDatabase();
        this.db.addBulkPolicies(this.data);
    }

    async getPolicies(): Promise<InsurancePolicy[]> {
        const promise = new Promise<InsurancePolicy[]>((resolve, reject) => {
            const policies = this.db.getPolicies();
            if (policies) {
                resolve(policies)
            } else {
                reject("No polices available")
            }
        })
        return promise;
    }

}

const insurancePolicyService = new InsurancePolicyService();
export default insurancePolicyService;