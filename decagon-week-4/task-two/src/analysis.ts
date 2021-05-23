/**
 * First task - Read the csv files in the inputPath and analyse them
 *
 * @param {string[]} inputPaths An array of csv files to read
 * @param {string} outputPath The path to output the analysis
 */

// get filesystem module
import fs from 'fs';
// const fs = require("fs")

interface NewObj {
  'valid-domains': string[];
  totalEmailsParsed: number;
  totalValidEmails: number;
  categories: Record<string, number>;
}

function analyseFiles(inputPaths: string[], outputPath: string) {
  console.log('Complete the implementation in src/analysis.ts');

  const emails = fs.readFileSync(inputPaths[0]).toString();
  console.log(emails);
  let emailArr = emails.split('\n');
  emailArr = emailArr.filter((item) => item.includes('@'));

  const standard = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const valid: string[] = [];

  const catObj: Record<string, number> = {};

  for (let i = 0; i < emailArr.length; i++) {
    if (standard.test(emailArr[i])) {
      const domain: string = emailArr[i].split('@')[1];
      catObj[domain] = (catObj[domain] || 0) + 1;
      valid.push(domain);
    }
  }

  //get unique domains
  const validArr = [...new Set(valid)];

  const newObj: NewObj = {
    'valid-domains': validArr,
    totalEmailsParsed: emailArr.length,
    totalValidEmails: valid.length,
    categories: catObj,
  };

  fs.writeFile(
    outputPath,
    JSON.stringify(newObj, null, 2),
    (err) => err && console.log(err),
  );
}

export default analyseFiles;
