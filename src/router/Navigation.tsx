import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import App from "../App"
import { Docs } from "../Pages/Docs"
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components"
import { useThemeStore } from "../store"

export const Navigation = () => {

    const isDark = useThemeStore(state => state.isDark);

    return (
        <BrowserRouter>

            <FluentProvider theme={
                isDark ?
                    webDarkTheme
                    : webLightTheme
            }>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/docs/:id" element={<Docs />} />

                    <Route path="/*" element={<Navigate to='/' replace />} />

                </Routes>

            </FluentProvider>
        </BrowserRouter>
    )
}
