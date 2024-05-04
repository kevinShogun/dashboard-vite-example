import { RangeAgesChart } from "../components"
import DocsLayout from "../layouts/DocsLayout"

export const RangeAgesFullChart = () => {
    return (
        <DocsLayout
            title='Rango de edades'
            description='Rango de edades en una gráfica de barras horizontales, con porcentajes de rango de edades.'
        >
            <RangeAgesChart />
        </DocsLayout>
    )
}
