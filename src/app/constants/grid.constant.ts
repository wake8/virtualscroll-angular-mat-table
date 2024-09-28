import { ColDef } from "../types/grid.model";

export const _colDefinitions: ColDef[] = [
    {
        label: 'Label',
        field: 'label',
        fieldType: 'string',
        value: (element: any)=>`${element.label}`,

    },
    {
        label: 'Part number',
        field: 'partNumber',
        fieldType: 'string',
        value: (element: any)=>`${element.partNumber}`,
    },
    {
        label: 'Last service',
        field: 'lastServiceDate',
        fieldType: 'date',
        value: (element: any)=>`${element.lastServiceDate}`,
    },
    {
        label: 'Service cost',
        field: 'serviceCost',
        fieldType: 'string',
        value: (element: any)=>`${element.serviceCost}`,
    },
    {
        label: 'Part cost',
        field: 'partCost',
        fieldType: 'string',
        value: (element: any)=>`${element.partCost}`,
    },
    {
        label: 'Model',
        field: 'model',
        fieldType: 'string',
        value: (element: any)=>`${element.model}`,
    },
    {
        label: 'Concept model',
        field: 'conceptModel',
        fieldType: 'string',
        value: (element: any)=>`${element.conceptModel}`,
    },
    {
        label: 'Reviewed by',
        field: 'reviewedBy',
        fieldType: 'string',
        value: (element: any)=>`${element.reviewedBy}`,
    }
]
