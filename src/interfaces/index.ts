export interface IMostActiveUserData {
    name: string;
    value: number;
}

export interface IMostUsedDevicesData {
    name: string;
    usageRate: number;
}

export interface ITotalUsersData {
    totalUsers: number;
    percentProd: number;
    percentAsesor: number;
}

export interface IGenderData {
    percentMale: number;
    percentFemale: number;
}

// RangeAges.tsx
export interface IRangeAgesData {
    range: string;
    percentRange: number;
}

// MultipleChart.tsx
export interface IMultipleChartData {
    data: Data;
}

export interface Data {
    months:      string[];
    SalesLine1:  number[];
    SalesLine2:  number[];
    CurretMonth: Array<CurretMonth[]>;
}

export interface CurretMonth {
    name?: string;
    xAxis: string;
}
