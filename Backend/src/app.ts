import cors from "cors";
import express from "express";
import appConfig from "./2-utils/appConfig";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
// import expressRateLimit from "express-rate-limit";
import helmet from "helmet";
import router from "./6-routes/personal-data-routes";
import expressFileUpload from "express-fileupload";


const server = express();

// server.use(expressRateLimit({
//     windowMs: 5000,
//     max: 10,
//     message: "Are you a hacker from Anonymous ?"
// }));
// server.use(helmet());
server.use(cors());

server.use(express.json());
server.use(expressFileUpload())
server.use("/api", router);

server.use("*", routeNotFound);
server.use(catchAll);


server.listen(appConfig.port, () => console.log(`listening to http://localhost:${appConfig.port}`)
)
