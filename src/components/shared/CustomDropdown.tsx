import { useState } from 'react';
import { Body1 } from '@fluentui/react-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { ChevronDown28Regular } from '@fluentui/react-icons';
import { useThemeStore } from '../../store';
import '../../styles/dropDownStyle.css';

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
    const isDark = useThemeStore(state => state.isDark);


    return (
        <div className={`relative ${size === 'small' ? 'w-24 text-xs' : size === 'medium' ? 'w-52' : 'w-72'}`}
        >
            <div className='white-dropdown'
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    defaultValue ?
                        <>
                            <div className='flex gap-2 items-center justify-center'>
                                {defaultValue.startIcon}
                                <Body1> {defaultValue.name} </Body1>
                            </div>
                            <CustomChevron size={size} />

                        </> :
                        <>
                            {startTitleIcon}
                            <Body1> {title} </Body1>
                            <CustomChevron size={size} />
                        </>
                }
            </div>
            {
                isOpen && (
                    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                        <div className={isDark ? 'dark-dropdown-body' : 'white-dropdown-body'}>
                            {
                                options?.map((option, index) => (
                                    <p className={isDark ? 'dark-dropdown-body-item' : 'white-dropdown-body-item'} key={index}
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
    const isDark = useThemeStore(state => state.isDark);

    return (
        <ChevronDown28Regular
            className={
                isDark ? 'text-3xl text-blue-100' : 'text-3xl text-blue-900'
            }
            style={{
                width: size === 'small' ? 15 : size === 'medium' ? 20 : 25,
                height: size === 'small' ? 15 : size === 'medium' ? 20 : 25
            }}
        />
    )
}