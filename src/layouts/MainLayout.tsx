import { PropsWithChildren } from 'react'
import { HeadTitle } from '../components'
import '../styles/style.css'
import { ThemeSwitcher } from '../components/shared/ThemeSwitcher'

interface Props extends PropsWithChildren {
    headTitle?: boolean
}
const MainLayout = ({
    children,
    headTitle = true,
}: Props) => {
    return (
        <main className='mainContainer'>
            {headTitle && <HeadTitle title={'Usuarios'} />}
            <ThemeSwitcher />
            <div className='grid grid-cols-12 gap-4 p-4 justify-items-center'>
                {children}
            </div>
        </main>
    )
}

export default MainLayout