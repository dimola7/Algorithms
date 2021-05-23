// import data from '../database.json';
// import{ v4: uuidv4 } from "uuid";

// const { writeDataToFile } = require("../utils");

// const findAll = () => {
//   return new Promise((resolve, reject) => {
//     resolve(data);
//   });
// };

// const findById = (id) => {
//   return new Promise((resolve, reject) => {
//     const org = data.find((o) => o.id === id);
//     resolve(org);
//   });
// };

// const create = (org:string) => {
//   return new Promise((resolve, reject) => {
//     const addOrg = { id: uuidv4(), ...org };
//     data.push(addOrg);
//     writeDataToFile("./server/database.json", data);
//     resolve(addOrg);
//   });
// };

// const update = (id, org) => {
//   return new Promise((resolve, reject) => {
//     const index = data.findIndex((p) => p.id === +id);
//     data[index] = { ...data[index], ...org };
//     console.log(id, index);
//     writeDataToFile("./server/database.json", data);
//     resolve(data[index]);
//   });
// };

// const remove = (id) => {
//   return new Promise((resolve, reject) => {
//     data = data.filter((org) => org.id !== id);
//     writeDataToFile("./server/database.json", data);
//     resolve();
//   });
// };

// export {
//   findAll,
//   findById,
//   create,
//   update,
//   remove
// }