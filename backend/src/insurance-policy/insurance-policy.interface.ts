export interface InsurancePolicy {
    id: number;
    name: string;
    type: string;
    premium: number;
    coverage: number;
}

export interface DatabaseSchema {
    policies: InsurancePolicy[];
}