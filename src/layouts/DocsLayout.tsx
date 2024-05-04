import { PropsWithChildren } from "react"
import { HeadTitle } from "../components"
import { ThemeSwitcher } from "../components/shared/ThemeSwitcher"

interface Props extends PropsWithChildren {
    title: string
}
const DocsLayout = ({ children, title }: Props) => {
    return (
        <main
            className="container mx-auto px-4 py-8"
        >
            <ThemeSwitcher />

            <HeadTitle title={title} />
            <br />
            {children}
        </main>
    )
}

export default DocsLayout