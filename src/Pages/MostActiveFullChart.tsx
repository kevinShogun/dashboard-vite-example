import { HorizontalBarChart } from '../components'
import DocsLayout from '../layouts/DocsLayout'

export const MostActiveFullChart = () => {
    return (
        <DocsLayout
            title='Usuarios más activos'
            description='Usuarios más activos en una gráfica de barras horizontales, con porcentajes de usuarios activos.'
        >
            <HorizontalBarChart/>
        </DocsLayout>
    )
}
