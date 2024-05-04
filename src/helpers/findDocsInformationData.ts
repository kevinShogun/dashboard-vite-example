import { DataDocs, DocsInformationData } from "../interfaces";
import docsData from "../data/docsData.json";
export const getByIdDocsInformationData = (
	id: number
): DataDocs | undefined => {
	const data: DocsInformationData = JSON.parse(JSON.stringify(docsData));

	const dataDocs = data.data.find((doc) => doc.id === id);

	return dataDocs;
};
