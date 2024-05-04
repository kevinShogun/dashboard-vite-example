import { Card, CardHeader, Subtitle2 } from '@fluentui/react-components';
import { DonutChart } from '../shared/DonutChart';
import { ITotalUsersData } from '../../interfaces';
//data
import pieChart from '../../data/pieChart.json';
import { CustomMenu } from '../shared/CustomMenu';


export const TypeUserChart = () => {

    const data: ITotalUsersData = JSON.parse(JSON.stringify(pieChart));
    const { percentAsesor, percentProd, totalUsers } = data;

    const option = {
        tooltip: {
            trigger: 'axis'
        },
        series: [
            {
                name: 'Tipos de usuarios',
                type: 'pie',
                radius: ['70%', '65%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 10 },
                padAngle: 2,
                label: { show: false, position: 'left' },
                emphasis: {
                    label: { show: true, fontSize: 20, fontWeight: 'bold' }
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: percentProd * totalUsers, name: 'Productor' },
                    { value: percentAsesor * totalUsers, name: 'Asesor' },
                ],
                color: ['#21535e', '#57a43a', "#fff"],
            }
        ]
    };

    return (
        <Card
            className='grid-small'
        >
            <div>
                <CustomMenu />
            </div>
            <CardHeader
                header={<Subtitle2> Tipos de usuarios </Subtitle2>}
            />

            <DonutChart
                totalUsers={data.totalUsers}
                option={option}
                percent1={data.percentProd}
                percent2={data.percentAsesor}
                labelPercent1='Productor'
                labelPercent2='Asesor'
            />
        </Card>
    )
}
