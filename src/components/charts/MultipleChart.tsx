import { useState } from "react";
import ReactECharts from 'echarts-for-react';
import { Card, Dropdown, DropdownProps, OptionGroup, useId } from "@fluentui/react-components"
import { Person12Regular, Production24Regular, BuildingFactory16Regular, ShoppingBag20Regular } from '@fluentui/react-icons';
import { IconCard } from "../shared/IconCard";
import mutiplechart from '../../data/mutiplechart.json';
import user01 from '../../assets/noun-user-circle-5378967.svg';
import user02 from '../../assets/noun-user-circle-close-5378966.svg';
import user03 from '../../assets/noun-user-circle-plus-5378956.svg'

const options = [
    {
        name: "Usuarios",
        icon: <Person12Regular className="text-gray-800"
            style={{ width: 22, height: 22 }}
        />
    }, {
        name: "Productos",
        icon: <Production24Regular className="text-3xl text-gray-800"
            style={{ width: 22, height: 22 }}
        />
    }, {
        name: "Ventas",
        icon: <BuildingFactory16Regular className="text-3xl text-gray-800"
            style={{ width: 22, height: 22 }}
        />
    }, {
        name: "Compras",
        icon: <ShoppingBag20Regular className="text-3xl text-gray-800"
            style={{ width: 22, height: 22 }}
        />
    }
];

const dataCards = [
    {
        title: "Total",
        subtitle: "25, 000",
        color: "green",
        icon: user01,
    },
    {
        title: "Nuevos",
        subtitle: "12",
        color: "red",
        icon: user03,
    },
    {
        title: "Inactivos",
        subtitle: "5",
        color: "red",
        icon: user02,
    }
]



export const MultipleChart = (props: Partial<DropdownProps>) => {

    const dropdownId = useId("dropdown-default");
    const [value, setValue] = useState(options[0].name)

    return (
        <Card className="grid-large">
            <div>
                <Dropdown
                    aria-labelledby={dropdownId}
                    placeholder="Select an animal"
                    className="h-12 bg-white border border-gray-300"
                    {...props}
                    value={value}
                    defaultValue={value}
                    defaultSelectedOptions={[options[0].name]}
                >
                    {options.map((option, index) => (
                        <OptionGroup key={option.name + index}
                            onClick={() => {
                                setValue(option.name)
                            }}
                        >
                            <div className="flex gap-2 items-center py-1.5 cursor-pointer">
                                {option.icon}
                                <p className="font-medium text-gray-800">

                                    {option.name}
                                </p>
                            </div>
                        </OptionGroup>
                    ))}
                </Dropdown>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center md:items-start md:justify-start">
                {dataCards.map((card) => (<IconCard {...card} key={card.title}/>))}
            </div>

            <div>
                <ReactECharts option={mutiplechart} />
            </div>
        </Card>
    )
}
