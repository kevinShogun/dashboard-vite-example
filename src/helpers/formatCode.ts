export function formatJSXCode(code: string): string {
    let indentLevel = 0;
    const formattedCode = code
      .replace(/>\s*</g, '>\n<')
      .split('\n')
      .map((line) => {
        let formattedLine = line.trim();
        if (formattedLine.startsWith('</')) {
          indentLevel--;
        }
        if (indentLevel < 0) {
          indentLevel = 0; // Aseguramos que indentLevel no sea negativo
        }
        formattedLine = '  '.repeat(indentLevel) + formattedLine;
        if (formattedLine.startsWith('<') && !formattedLine.startsWith('</')) {
          indentLevel++;
        }
        return formattedLine;
      })
      .join('\n');
    return formattedCode;
}