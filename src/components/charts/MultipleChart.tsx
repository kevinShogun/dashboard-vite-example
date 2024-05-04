import { useState } from "react";
import ReactECharts from 'echarts-for-react';
import { Card, Dropdown, DropdownProps, OptionGroup, useId, Body1 } from "@fluentui/react-components"
import { Person12Regular, Production24Regular, BuildingFactory16Regular, ShoppingBag20Regular } from '@fluentui/react-icons';
import { IMultipleChartData } from "../../interfaces";
import { IconCard } from "../shared/IconCard";
// icons
import user01 from '../../assets/noun-user-circle-5378967.svg';
import user02 from '../../assets/noun-user-circle-close-5378966.svg';
import user03 from '../../assets/noun-user-circle-plus-5378956.svg'
//data
import mutiplechart from '../../data/mutiplechart.json';
import { CustomMenu } from "../shared/CustomMenu";

const options = [
    {
        name: "Usuarios",
        icon: <Person12Regular style={{ width: 22, height: 22 }} />
    }, {
        name: "Productos",
        icon: <Production24Regular style={{ width: 22, height: 22 }} />
    }, {
        name: "Ventas",
        icon: <BuildingFactory16Regular style={{ width: 22, height: 22 }} />
    }, {
        name: "Compras",
        icon: <ShoppingBag20Regular style={{ width: 22, height: 22 }} />
    }
];

const dataCards = [
    { title: "Total", subtitle: "25, 000", color: "green", icon: user01 },
    { title: "Nuevos", subtitle: "12", color: "red", icon: user03 },
    { title: "Inactivos", subtitle: "5", color: "red", icon: user02 }
]


export const MultipleChart = (props: Partial<DropdownProps>) => {

    const multipleChartData: IMultipleChartData = JSON.parse(JSON.stringify(mutiplechart));
    const { data } = multipleChartData;

    const objChart = {
        title: { text: "", subtext: "" },
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: data.months,
        },
        yAxis: {
            type: "value",
            axisLabel: { formatter: "{value}" },
            axisPointer: { snap: false },
            splitLine: { show: false }
        },
        series: [
            {
                name: "Usuarios", type: "line", smooth: true, showSymbol: false,
                data: data.SalesLine1,
                itemStyle: { color: "#18444d" },
                markArea: {
                    itemStyle: { color: "rgba(221, 231, 219, 0.8)" },
                    data: data.CurretMonth
                }
            },
            {
                name: "Consumo",
                type: "line",
                smooth: true,
                showSymbol: false,
                itemStyle: {
                    color: "#f1872c"
                },
                data: data.SalesLine2
            }
        ]
    }

    const dropdownId = useId("dropdown-default");
    const [value, setValue] = useState(options[0].name)



    return (
        <Card className="grid-large relative">
            <div>
                <CustomMenu 
                    docsRoute="/docs/1"
                    fullScreenRoute="/full-multiple"
                />
            </div>
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
                                <Body1>

                                    {option.name}
                                </Body1>
                            </div>
                        </OptionGroup>
                    ))}
                </Dropdown>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center md:items-start md:justify-start">
                {dataCards.map((card) => (<IconCard {...card} key={card.title} />))}
            </div>

            <div>
                <ReactECharts option={objChart} />
            </div>
        </Card>
    )
}
