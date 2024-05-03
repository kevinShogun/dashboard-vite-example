import React, { useCallback, useEffect, useState } from 'react'
import { Switch } from '@fluentui/react-components';
import { useThemeStore } from '../../store';

export const ThemeSwitcher = () => {

    const [checked, setChecked] = useState(true);
    const setIsDark = useThemeStore(state => state.setIsDark);

    useEffect(() => {
        
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setChecked(false);
            setIsDark(true);
        }

    }, [setIsDark])
    

    const onChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(ev.currentTarget.checked);
            setIsDark(checked);
            localStorage.setItem('theme', ev.currentTarget.checked ? 'light' : 'dark');
        },
        [setChecked, setIsDark, checked]
    );
    return (
        <div className='absolute top-5 right-5 z-50'>
            <Switch
                checked={checked}
                onChange={onChange}
                label={checked ? "Light Theme" : "Dark Theme"}
            />
        </div>
    )
}
