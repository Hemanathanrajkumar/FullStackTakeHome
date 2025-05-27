import { DatabaseSchema, InsurancePolicy } from "../insurance-policy/insurance-policy.interface";

export class InMemoryDatabase {
    private data: DatabaseSchema;

    constructor(initialData?: DatabaseSchema) {
        this.data = initialData || { policies: [] };
    }

    addPolicy(policy: InsurancePolicy): void {
        const found = this.data.policies.find((x) => x.id == policy.id);
        if (!found) {
            this.data.policies.push(policy);
        } else {
            throw Error("Policy Exist")
        }

    }

    addBulkPolicies(policies: InsurancePolicy[]): void {
        policies.forEach((policy: InsurancePolicy) => {
            this.addPolicy(policy)
        })
    }

    getPolicies(): InsurancePolicy[] {
        return this.data.policies;
    }
}