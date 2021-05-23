// import fs from "fs";

// const writeDataToFile = (filename, content) => {
//   fs.writeFileSync(filename, JSON.stringify(content), "utf8");
// };

// const getPostData = (req) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let body = "";

//             req.on("data", (chunk) => {
//                 body += chunk.toString();
//             })

//             req.on("end", () => {
//                 resolve(body);
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// export {
//   writeDataToFile,
//   getPostData
// };
