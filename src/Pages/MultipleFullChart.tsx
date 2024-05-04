import DocsLayout from '../layouts/DocsLayout'
import { MultipleChart } from '../components'

export const MultipleFullChart = () => {
    return (
        <DocsLayout
            title='Gráfica múltiple'
            description='Gráfica múltiple con diferentes tipos de gráficas.'
        >
            <MultipleChart />
        </DocsLayout>
    )
}
