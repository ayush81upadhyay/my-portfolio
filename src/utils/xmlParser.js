import { XMLParser } from 'fast-xml-parser';

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });

export async function fetchXML(filename) {
  const response = await fetch(`${process.env.PUBLIC_URL}/data/${filename}`);
  const text = await response.text();
  return parser.parse(text);
}
