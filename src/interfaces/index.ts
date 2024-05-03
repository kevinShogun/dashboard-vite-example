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

export interface IRangeAgesData {
    range: string;
    percentRange: number;
}