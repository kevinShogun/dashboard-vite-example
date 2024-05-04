import { LargeTitle } from "@fluentui/react-components";
export const HeadTitle = ({ title }: { title: string }) => {
    return (
        <header>
            <LargeTitle className="mb-3" as="h1">
                {title}
            </LargeTitle>
            <hr />
        </header>
    )
}
