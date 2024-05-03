import { Tooltip } from "@fluentui/react-components";

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


    return (
        <div className={`flex items-center justify-center mb-2
        ${width > 15 ? 'gap-3' : ' justify-between relative'}
        `}
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
                    <div className='w-full h-8 bg-gray-200 cursor-pointer rounded-lg shadow-none hover:shadow-lg transition duration-300 ease-in-out'>
                        <div className={
                            isPrimary ? 'h-full bg-gradient-to-r  from-primary to-[#24798c] rounded-lg items-center flex first-bar'
                                : 'h-full bg-gradient-to-r from-[#4d9f34] to-[#94c460] rounded-lg items-center flex first-bar'
                        }>
                            <p className={`${width > 25 ? 'text-white font-semibold text-xs md:text-base absolute ml-3' : 'hidden md:block text-white font-semibold text-xs md:text-base absolute ml-3'}`}> 
                                {text} 
                            </p>
                            <p className={`${width <= 25 ? 'text-white font-semibold ml-3 md:hidden':'hidden'}`} > - </p>
                        </div>
                    </div>
                </Tooltip>
                <p className={ width > 15 ? 'text-primary text-xs md:text-lg font-semibold' : 'text-primary text-xs md:text-lg font-semibold absolute right-[-70%] -mt-0.5'}>
                    {
                        isRange ? `${value * 10}%` : value
                    }
                </p>
            </>
        </div>
    )
}
