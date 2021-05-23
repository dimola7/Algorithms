// import http, { IncomingMessage, Server, ServerResponse } from "http";
// // import * as data from "./controllers/dataController";
// import {getOrgs, getOrg, addOrg, updateOrg, deleteOrg} from "./controllers/dataController";

// const server :Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
//   if (req.url === "/api/orgs" && req.method === "GET") {
//     getOrgs(req, res);
//   } else if (req.url.match(/\/api\/orgs\/([0-9]+)/) && req.method === "GET") {
//     const id = req.url.split("/")[3];
//     getOrg(req, res, id);
//   } else if (req.url === "/api/orgs" && req.method === "POST") {
//     addOrg(req, res);
//   } else if (req.url.match(/\/api\/orgs\/([0-9]+)/) && req.method === "PUT") {
//     const id = req.url.split("/")[3];
//     updateOrg(req, res, id);
//   } else if (req.url.match(/\/api\/orgs\/([0-9]+)/) && req.method === "DELETE") {
//     const id = req.url.split("/")[3];
//     deleteOrg(req, res, id);
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "route not found" }));
//   }
//   }
// );

// const port = process.env.PORT || 3005;

// server.listen(port, ()=> console.log(`Server Running on ${port}`));
