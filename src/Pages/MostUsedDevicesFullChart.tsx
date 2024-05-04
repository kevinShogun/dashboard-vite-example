import DocsLayout from '../layouts/DocsLayout'
import { MostUsedDevicesChart } from '../components'

export const MostUsedDevicesFullChart = () => {
  return (
    <DocsLayout
        title='Dispositivos más utilizados'
    >
        <MostUsedDevicesChart/>
    </DocsLayout>
  )
}
