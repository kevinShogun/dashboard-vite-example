import { TotalGenderChart } from "../components"
import DocsLayout from "../layouts/DocsLayout"

export const GenderFullChart = () => {
    return (
        <DocsLayout
            title='Total de género'
        >
            <TotalGenderChart />
        </DocsLayout>
    )
}
