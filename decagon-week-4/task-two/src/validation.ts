/**
 * Stretch goal - Validate all the emails in this files and output the report
 *
 * @param {string[]} inputPath An array of csv files to read
 * @param {string} outputFile The path where to output the report
 */

// get filesystem module
import fs from 'fs';
import dns from 'dns';

function validateEmailAddresses(inputPath: string[], outputFile: string) {
  console.log('Complete the implementation in src/validation.ts');

  const emails = fs.readFileSync(inputPath[0]).toString();
  let emailArr = emails.split('\n');
  emailArr = emailArr.filter((item) => item.includes('@'));
  console.log(emailArr);

  const standard = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid: string[] = [];

  for (let i = 0; i < emailArr.length; i++) {
    if (standard.test(emailArr[i])) {
      valid.push(emailArr[i]);
    }
  }
  console.log(valid);

  for (let i = 0; i < valid.length; i++) {
    const domain = valid[i].split('@')[1];
    console.log(domain);
    dns.resolve(domain, 'MX', (error, address) => {
      if (error) {
        console.log('Invalid');
      } else if (address && address.length > 0) {
        fs.appendFileSync(outputFile, `${JSON.stringify(valid[i])}\n`);
      }
    });
  }
}

// console.log(
//   validateEmailAddresses(['task-two/fixtures/inputs/small-sample.csv'], []),
// );
export default validateEmailAddresses;
