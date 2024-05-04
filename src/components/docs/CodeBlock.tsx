import { CodeBlock as Code, materialLight as themeLight, vscDarkPlus as themeDark } from '@react-email/code-block';
import { useThemeStore } from '../../store';
import { formatJSXCode } from '../../helpers/formatCode';

interface CodeBlockProps {
    code: string;
    isJSX?: boolean;
}

export const CodeBlock = ({ code, isJSX = false }: CodeBlockProps) => {
    const isDark = useThemeStore(state => state.isDark);
    // foramtted code block
    const formattedCode = code.replace(/;/g, ';\n').replace(/{/g, '{\n');

    return (
        <div className='w-full flex flex-col my-5'>
            <Code
                code={
                    isJSX ? formatJSXCode(code) :
                        formattedCode
                }
                theme={
                    isDark ?
                        themeDark
                        : themeLight
                }
                language="typescript"
                style={{
                    width: '90vw',
                    borderRadius: '10px',
                    margin: '0 auto',
                    overflowX: 'auto',
                    boxShadow: isDark ? '0 0 10px rgba(0,0,0,0.3)' : '0 0 10px rgba(0,0,0,0.1)'
                }}
            />
        </div>
    );
}
