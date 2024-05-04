import { PropsWithChildren } from "react"
import { Button } from "@fluentui/react-components"
import { ArrowDownFilled } from "@fluentui/react-icons"
import { ThemeSwitcher } from "../components/shared/ThemeSwitcher"
import { HeadTitle } from "../components"
import { useNavigate } from "react-router-dom"

interface Props extends PropsWithChildren {
    title: string
}
const DocsLayout = ({ children, title }: Props) => {

    const navigate = useNavigate();

    return (
        <main
            className="container mx-auto px-4 py-8"
        >
            <ThemeSwitcher />

            <HeadTitle title={title} />
            <br />

            <Button appearance="subtle" icon={<ArrowDownFilled className="rotate-90"/>}
                onClick={() => navigate('/')}
            >
                Regresar
            </Button>
            <br />
            <br />
            {children}
        </main>
    )
}

export default DocsLayout