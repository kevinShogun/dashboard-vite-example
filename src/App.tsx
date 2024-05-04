import MainLayout from './layouts/MainLayout'
import {
  HorizontalBarChart,
  MostUsedDevicesChart,
  MultipleChart,
  RangeAgesChart,
  TotalGenderChart,
  TypeUserChart
} from './components'
import './index.css'

function App() {

  return (

    <MainLayout>
      <MultipleChart />
      <TypeUserChart />
      <HorizontalBarChart />
      <MostUsedDevicesChart />
      <TotalGenderChart />
      <RangeAgesChart />
    </MainLayout>
  )
}

export default App
