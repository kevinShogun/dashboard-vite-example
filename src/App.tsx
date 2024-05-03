import MainLayout from './layouts/MainLayout'
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { HorizontalBarChart, MostUsedDevicesChart, MultipleChart, TypeUserChart } from './components'
import './index.css'
import { TotalGenderChart } from './components/charts/TotalGenderChart';
import { RangeAgesChart } from './components/charts/RangeAgesChart';
import { useThemeStore } from './store';

function App() {

  const isDark = useThemeStore(state => state.isDark);

  return (

    <FluentProvider theme={
      isDark ?
        webDarkTheme
        : webLightTheme
    }>
      <MainLayout>
        <MultipleChart />
        <TypeUserChart />
        <HorizontalBarChart />
        <MostUsedDevicesChart />
        <TotalGenderChart />
        <RangeAgesChart />
      </MainLayout>
    </FluentProvider>
  )
}

export default App
