import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ChevronDown28Regular } from '@fluentui/react-icons';


interface CustomDropdownProps {
    startTitleIcon?: React.ReactNode;
    title: string;
    options?: OptionProps[];
    defaultValue?: OptionProps;
    size?: size;
    onChange: (value: OptionProps) => void;
}

export type OptionProps = {
    name: string;
    value?: string | number;
    startIcon?: React.ReactNode;

}
type size = 'small' | 'medium' | 'large';

export const CustomDropdown = ({ startTitleIcon, title, options, defaultValue, onChange, size = 'medium' }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`relative ${size === 'small' ? 'w-24 text-xs' : size === 'medium' ? 'w-52' : 'w-72'}`}
        >
            <div className='px-3 py-2 rounded-lg shadow-sm ring-slate-300 ring-1
                transition duration-300
                flex items-center justify-between bg-white mt-5 cursor-pointer hover:shadow-lg hover:rounded-lg'
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    defaultValue ?
                        <>
                            <div className='flex gap-2 items-center justify-center'>
                                {defaultValue.startIcon}
                                <p className='text-primary font-semibold'>
                                    {defaultValue.name}
                                </p>
                            </div>

                            <CustomChevron size={size} />

                        </> :
                        <>
                            {startTitleIcon}
                            <p className='text-primary font-semibold'>
                                {title}
                            </p>
                            <CustomChevron size={size} />

                        </>
                }
            </div>
            {
                isOpen && (
                    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                        <div className='absolute min-w-full z-30 bg-white rounded-lg shadow-md ring-slate-300 ring-1 mt-2'
                        >
                            {
                                options?.map((option, index) => (
                                    <p className='px-3 py-2 hover:bg-blue-100 cursor-pointer' key={index}
                                        onClick={() => {
                                            onChange(option);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {option.startIcon} {option.name}
                                    </p>
                                ))
                            }

                        </div>
                    </OutsideClickHandler>

                )
            }

        </div>
    )
}

const CustomChevron = ({
    size
}: {
    size: size
}) => {
    return (
        <ChevronDown28Regular
            className="text-3xl text-blue-900"
            style={{
                width: size === 'small' ? 15 : size === 'medium' ? 20 : 25,
                height: size === 'small' ? 15 : size === 'medium' ? 20 : 25
            }}
        />
    )
}