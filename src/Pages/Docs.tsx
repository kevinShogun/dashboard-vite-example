import { Body2, Subtitle2Stronger, Body1Strong, Table, TableHeader, TableBody, TableRow, Caption1Strong } from '@fluentui/react-components';
import DocsLayout from '../layouts/DocsLayout';
import { useParams } from 'react-router-dom';
import { getByIdDocsInformationData } from '../helpers/findDocsInformationData';
import { CodeBlock } from '../components/docs/CodeBlock';
// import { CodeBlock } from '../components/docs/CodeBlock'

export const Docs = () => {

  // get params from url
  const { id } = useParams();

  if (!id) return (<div>Not Found</div>)

  const idNumber = parseInt(id);

  const data = getByIdDocsInformationData(idNumber);
  if (!data) return (<div>Not Found</div>)


  return (
    <DocsLayout
      title={data.title}
    >
      <div className='mx-5'>
        <Body2 className='w-full'
          style={{
            whiteSpace: 'pre-wrap',
            lineHeight: '1.5'
          }}
        >
          {data.summary}
        </Body2>
      </div>
      <CodeBlock
        code={data.exampleCode}
        isJSX
      />
      <div className='w-full mx-5 flex flex-col '>
        <Table arial-label="Default table">
          <TableHeader>
          </TableHeader>
          <TableBody>
            {
              data.listFlow.map((flow, index) => (
                <TableRow key={index} >
                  <div className='w-full flex my-1 gap-4 p-2'>
                    <Subtitle2Stronger>{flow.id}. </Subtitle2Stronger>
                    <Body1Strong>{flow.text}</Body1Strong>
                  </div>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <br/>
        <Caption1Strong>
          Estos datos son esenciales para que el gráfico funcione correctamente y proporcione información precisa.
        </Caption1Strong>
        <br/>
        <CodeBlock
          code={data.dataExample}
        />
      </div>
    </DocsLayout>
  )
}
