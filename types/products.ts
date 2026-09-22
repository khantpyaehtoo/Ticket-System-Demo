import { StaticImageData } from "next/image";

export type Status = "active" | "inactive" | "pending";

export interface DetailItem {
    label: string;
    value: string;
}

export interface ProductSpec {
    id: string;
    title: string;
    desc: string;
    status: Status;
    image: string | StaticImageData;
    productType: string;
    supportPlan: string;
    purchasedDate: string;
    planEndDate: string;
    availableHours: number;
}
