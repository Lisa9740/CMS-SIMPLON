import Routes from "./src/server/routes/routes";
import {Server} from "./src/core/Server/server";
import ApiRoutes from "./src/server/routes/api/ApiRoutes";

Routes.build()
ApiRoutes.buildApi()
Server.start()


