import { Card, CardHeader, Subtitle2 } from "@fluentui/react-components"
import rangeAgesData from '../../data/rangeAgesData.json';
import { IRangeAgesData } from "../../interfaces";
import { CustomBarProgresive } from "..";

interface IDataProps {
    data: IRangeAgesData[]
}

export const RangeAgesChart = () => {

    const { data }: IDataProps = JSON.parse(JSON.stringify(rangeAgesData));


    return (
        <Card className='grid-large'>
            <CardHeader
                header={
                    <Subtitle2>
                        Rango de Edades
                    </Subtitle2>
                }
            />

            <div
                className='grid grid-cols-1 gap-3 mt-5'
            >
                {
                    data.map((element, index: number) => {
                        return (
                            <CustomBarProgresive
                                key={index}
                                isRange
                                isPrimary={index % 2 === 0 ? true : false}
                                text={element.range}
                                value={element.percentRange}
                                width={
                                    element.percentRange * 18
                                }
                            />
                        )
                    })
                }
            </div>
        </Card>
    )
}
