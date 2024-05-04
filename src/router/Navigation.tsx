import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import App from "../App"
import { Docs } from "../pages/Docs"
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components"
import { useThemeStore } from "../store"
import { MultipleFullChart } from "../pages/MultipleFullChart"
import { TypeUserFullChart } from "../pages/TypeUserFullChart"
import { MostActiveFullChart } from "../pages/MostActiveFullChart"
import { MostUsedDevicesFullChart } from "../pages/MostUsedDevicesFullChart"
import { RangeAgesFullChart } from "../pages/RangeAgesFullChart"
import { GenderFullChart } from "../pages/GenderFullChart"

export const Navigation = () => {

    const isDark = useThemeStore(state => state.isDark);

    return (
        <BrowserRouter>

            <FluentProvider theme={
                isDark ?
                    teamsDarkTheme
                    : teamsLightTheme
            }>
                <Routes>
                    <Route path="/" element={<App />} />

                    <Route path="/docs/:id" element={<Docs />} />

                    <Route path="/full-type-user" element={<TypeUserFullChart />} />
                    <Route path="/full-multiple" element={<MultipleFullChart />} />
                    <Route path="/full-most-active" element={<MostActiveFullChart />} />
                    <Route path="/full-most-used-devices" element={<MostUsedDevicesFullChart />} />
                    <Route path="/full-range-ages" element={<RangeAgesFullChart />} />
                    <Route path="/full-gender" element={<GenderFullChart />} />

                    <Route path="/*" element={<Navigate to='/' replace />} />

                </Routes>

            </FluentProvider>
        </BrowserRouter>
    )
}
