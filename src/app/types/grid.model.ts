export type GridRow = {
    label: string,
    partNumber: any,
    lastServiceDate: string,
    serviceCost: number,
    partCost: number,
    model: number,
    conceptModel: string,
    reviewedBy: string,
}

export type ColDef = {
    label: string;
    field: string;
    value : Function;
    fieldType: string;
    width?: string; // do not include units
}