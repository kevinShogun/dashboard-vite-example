import DocsLayout from '../layouts/DocsLayout'
import { MostUsedDevicesChart } from '../components'

export const MostUsedDevicesFullChart = () => {
  return (
    <DocsLayout
        title='Dispositivos más utilizados'
        description='Dispositivos más utilizados en una gráfica de barras horizontales, con porcentajes de dispositivos más utilizados.'
    >
        <MostUsedDevicesChart/>
    </DocsLayout>
  )
}
