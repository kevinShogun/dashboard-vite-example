import { Tooltip } from "@fluentui/react-components";
import "../../styles/progresiveBarStyle.css";
import { useThemeStore } from "../../store";

interface CustomBarProgresiveProps {
    isPrimary?: boolean;
    text: string;
    value: number;
    width?: number;
    isRange?: boolean;
}
export const CustomBarProgresive = (
    { isPrimary, text, value, width = 100, isRange = false }: CustomBarProgresiveProps
) => {
    const isDark = useThemeStore(state => state.isDark);


    return (
        <div className={`flex-center ${width > 15 ? 'gap-3' : 'justify-between relative'} `}
            style={{
                width: width > 15 ? `${width}%` : '8%'
            }}
        >
            <>
                <Tooltip
                    withArrow
                    content={isRange ? `Edad: ${text} - ${value * 10}%` : `${text} - ${value}`
                    }
                    relationship="label"
                >
                    <div className={isDark ? 'dark-bar' : 'bar'}>
                        <div className={isPrimary ? 'gradient-bar first-bar' : 'secondary-g-bar first-bar'}>
                            <p className={`${width > 25 ? 'bar-text' : 'bar-text-secondary'}`}>
                                {text}
                            </p>
                            <p className={`${width <= 25 ? 'text-white font-semibold ml-3 md:hidden' : 'hidden'}`} > - </p>
                        </div>
                    </div>
                </Tooltip>
                <p className={width > 15 ?
                    isDark ? 'dark-bar-title' : 'bar-title'
                    : isDark ? 'dark-bar-title-secondary' : 'bar-title-secondary'}>
                    {
                        isRange ? `${value * 10}%` : value
                    }
                </p>
            </>
        </div>
    )
}
