import ReactECharts from 'echarts-for-react';
interface DonutChartProps {
    totalUsers: string | number;
    // colocas el tipo unknown para que no te marque error
    // ya que mapear el json que require echarts es un poco complicado
    option: unknown;
    percent1: number;
    percent2: number;
    labelPercent1: string;
    labelPercent2: string;
    titleIsBig?: boolean;
}

export const DonutChart = ({
    labelPercent1,
    labelPercent2,
    option,
    totalUsers,
    percent1,
    percent2,
    titleIsBig = false
}: DonutChartProps) => {
    return (
        <>
            <h2
                className={`absolute text-center left-[0%] text-4xl font-semibold w-full
                    ${!titleIsBig ? 'top-[40.5%] md:top-[37.5%]' : 'top-[41.5%]'}
                `}
            >
                {totalUsers}
                <br />
                <span className='text-gray-500 text-base text-pretty font-normal'>Total de usuarios</span>
            </h2>

            <div>
                <ReactECharts option={option} />
            </div>
            <hr />
            <div>
                <div className='flex text-sm font-medium items-center justify-center gap-4 w-full'>
                    <div className='flex items-center mt-8'>
                        <div className={`w-7 h-5 bg-[#21535e] rounded-md mr-2`}></div>
                        <p>{percent1 * 100}% {labelPercent1}</p>
                    </div>
                    <div className='flex items-center mt-8'>
                        <div className='w-7 h-5 bg-[#57a43a] rounded-md mr-2'></div>
                        <p>{percent2 * 100}% {labelPercent2}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
