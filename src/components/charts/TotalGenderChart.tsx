import { Card, CardHeader, Subtitle2 } from '@fluentui/react-components'
import genderDa from '../../data/genederData.json';
import { IGenderData } from '../../interfaces';
import { DonutChart } from '../shared/DonutChart';
import { CustomMenu } from '../shared/CustomMenu';

export const TotalGenderChart = () => {


    const data: IGenderData = JSON.parse(JSON.stringify(genderDa));
    const { percentFemale, percentMale } = data;

    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show: false
        },
        series: [
            {
                name: 'Genero',
                type: 'pie',
                radius: ['70%', '62%'],
                avoidLabelOverlap: false,
                itemStyle: { borderRadius: 10 },
                padAngle: -5,
                label: { show: false, position: 'left' },
                emphasis: {
                    label: { show: true, fontSize: 15, fontWeight: 'bold' }
                },
                labelLine: { show: true },
                data: [
                    { value: percentFemale * 100, name: 'Mujer' },
                    { value: percentMale * 100, name: 'Hombre' },
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
                header={
                    <Subtitle2>
                        Genero
                    </Subtitle2>
                }
            />

            <DonutChart
                totalUsers={"100%"}
                option={option}
                percent1={percentFemale}
                titleIsBig
                percent2={percentMale}
                labelPercent1='Mujer'
                labelPercent2='Hombre'
            />
        </Card>
    )
}
