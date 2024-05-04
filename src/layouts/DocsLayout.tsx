import { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"
import {Helmet} from "react-helmet"
import { Button } from "@fluentui/react-components"
import { ArrowDownFilled } from "@fluentui/react-icons"
import { ThemeSwitcher } from "../components/shared/ThemeSwitcher"
import { HeadTitle } from "../components"

interface Props extends PropsWithChildren {
    title: string;
    description?: string;
}
const DocsLayout = ({ children, title, description }: Props) => {

    const navigate = useNavigate();

    return (
        <main
            className="container mx-auto px-4 py-8"
        >
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#000000" />
                <meta name="keywords" content="React, TypeScript, TailwindCSS, FluentUI, Charts" />
                <meta name="author" content="Kevin García" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.facebook.com/profile.php?id=100009365110374" />
                <meta property="og:image" content="https://res.cloudinary.com/devsing/image/upload/v1714863009/gov8vkpduuie0ey4mwio.png" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@gkevin_y" />
                <meta name="twitter:creator" content="@gkevin_y" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://res.cloudinary.com/devsing/image/upload/v1714863009/gov8vkpduuie0ey4mwio.png" />
            </Helmet>
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