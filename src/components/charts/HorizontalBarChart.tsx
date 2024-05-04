import { useEffect, useState } from 'react';
import { Location16Regular } from '@fluentui/react-icons';
import { Card, CardHeader, Subtitle2 } from '@fluentui/react-components';
import { IMostActiveUserData } from '../../interfaces';
import { getBigNumberInArray, getPercent } from '../../helpers';
import { CustomBarProgresive, CustomDropdown, OptionProps } from '..';
//data
import mostActiveUser from '../../data/mostActiveUser.json';
import { CustomMenu } from '../shared/CustomMenu';

interface IDataProps {
    data: IMostActiveUserData[]
}

export const HorizontalBarChart = () => {

    const [value, setValue] = useState<OptionProps>();
    const [avPercent, setAvPercent] = useState(0);
    const { data }: IDataProps = JSON.parse(JSON.stringify(mostActiveUser));

    useEffect(() => {
        setAvPercent(getBigNumberInArray(data));
    }, [data])



    return (
        <Card className='grid-large'>
            <div>
                <CustomMenu />
            </div>
            <CardHeader
                header={
                    <Subtitle2>
                        Departamentos con más usuarios activos
                    </Subtitle2>
                }
            />
            <CustomDropdown
                title='Departamentos'
                startTitleIcon={<Location16Regular
                    className="text-3xl text-blue-900 dark:text-gray-400"
                    style={{ width: 20, height: 20 }}
                />}
                options={[
                    { name: 'Todos', startIcon: <Location16Regular /> },
                    { name: 'Cundinamarca', startIcon: <Location16Regular /> },
                    { name: 'Antioquia', startIcon: <Location16Regular /> },
                ]}
                defaultValue={value}
                onChange={(option) => setValue(option)}
            />
            <div
                className='grid grid-cols-1 gap-3 mt-5'
            >
                {
                    data.map((element, index: number) => {
                        return (
                            <CustomBarProgresive
                                key={index}
                                isPrimary={index % 2 === 0 ? true : false}
                                text={element.name}
                                value={element.value}
                                width={getPercent(avPercent, element.value)}
                            />
                        )
                    })
                }
            </div>

        </Card>
    )
}
