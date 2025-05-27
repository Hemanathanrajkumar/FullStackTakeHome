interface InsurancePolicy {
    id: number;
    name: string;
    type: string;
    premium: number;
    coverage: number;
}

interface DatabaseSchema {
    policies: InsurancePolicy[];
}