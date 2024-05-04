import DocsLayout from '../layouts/DocsLayout'
import { TypeUserChart } from '../components'

export const TypeUserFullChart = () => {
    return (
        <DocsLayout
            title='Tipo de usuario'
            description='Tipo de usuario en una gráfica de barras horizontales, con porcentajes de tipo de usuario.'
        >
            <TypeUserChart />
        </DocsLayout>
    )
}
