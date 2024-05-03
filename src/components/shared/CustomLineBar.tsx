import { Body1Strong, Subtitle2Stronger, Tooltip } from "@fluentui/react-components"

interface CustomLineBarProps {
    text: string;
    percentValue: number;

}

export const CustomLineBar = ({
    text,
    percentValue: value
}: CustomLineBarProps) => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex justify-between pr-5">
                <Body1Strong>
                    {text}
                </Body1Strong>
                <Subtitle2Stronger>
                    {value}%
                </Subtitle2Stronger>
            </div>


            <Tooltip
                withArrow
                content={`${text} - ${value}`}
                relationship="label"
            >
                <div
                    className="flex relative w-full h-2 bg-gray-200 rounded-sm mt-1.5 "
                >
                    <div className="first-bar">
                        <div className="bg-primary z-10 h-full rounded-sm"
                            style={{ width: `${value}%` }}
                        />
                    </div>
                </div>
            </Tooltip>
        </div>
    )
}
