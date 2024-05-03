export const getPercent = (maxValue: number, value: number) => {
    // obtener el porcentaje en base a un valor maximo ya sea 800 o 45 o 100
    // no pueden ser negativos y redondea a 0 decimal
    return Math.round((value / maxValue) * 100);
}