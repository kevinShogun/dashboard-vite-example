import { TotalGenderChart } from "../components"
import DocsLayout from "../layouts/DocsLayout"

export const GenderFullChart = () => {
    return (
        <DocsLayout
            title='Total de género'
            // crea un descripción para la página super interesante
            description='Total de género en una gráfica de dona, con porcentajes de hombres y mujeres.'
        >
            <TotalGenderChart />
        </DocsLayout>
    )
}
