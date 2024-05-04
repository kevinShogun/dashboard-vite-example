import { useEffect, useState } from "react";
import { Card, CardHeader, Subtitle2 } from "@fluentui/react-components"
import { CustomLineBar } from "../shared/CustomLineBar"
import { IMostUsedDevicesData } from "../../interfaces";
import { CustomDropdown, OptionProps } from ".."
//data
import mostUsedDevices from '../../data/mostUsedDevices.json';
import { CustomMenu } from "../shared/CustomMenu";

export const MostUsedDevicesChart = () => {

    const [value, setValue] = useState<OptionProps>();
    const [toogle, setToogle] = useState(true);
    const [lengthData, setLengthData] = useState(6);

    const { data } = JSON.parse(JSON.stringify(mostUsedDevices));
    const mostUsedDevicesData: IMostUsedDevicesData[] = data;

    useEffect(() => {
        if (toogle) {
            setLengthData(6);
        } else {
            setLengthData(mostUsedDevicesData.length);
        }
    }, [mostUsedDevicesData.length, toogle]);

    return (
        <Card className='grid-small relative'>
            <div>
                <CustomMenu 
                    docsRoute='/docs/4'
                    fullScreenRoute='/full-most-used-devices'
                />
            </div>
            <CardHeader
                header={
                    <Subtitle2>
                        Dispositivos más utilizados
                    </Subtitle2>
                }
            />
            <div className='absolute top-8 right-3'>
                <CustomDropdown
                    title=' Marca'
                    size="small"
                    options={[
                        { name: 'Todos', },
                        { name: 'Sansumg', },
                        { name: 'Apple', },
                        { name: 'Huawei', },
                    ]}
                    defaultValue={value}
                    onChange={(option) => setValue(option)}
                />
            </div>
            <br />

            {
                mostUsedDevicesData.slice(0, lengthData).map((element, index: number) => {
                    return (
                        <CustomLineBar
                            key={index}
                            text={element.name}
                            percentValue={element.usageRate}
                        />
                    )
                })
            }
            <span
                onClick={() => {
                    setToogle(!toogle)
                }}
                className="text-orange-500 mt-2 font underline text-center cursor-pointer font-semibold text-lg"
            >
                {
                    toogle ? 'Ver más' : 'Ver menos'
                }
            </span>
        </Card>
    )
}
