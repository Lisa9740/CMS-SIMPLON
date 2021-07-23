import Routes from "./src/server/routes/routes";
import {Server} from "./src/server/core/Server/server";
import ApiRoutes from "./src/server/routes/api/ApiRoutes";

Routes.build()
ApiRoutes.buildApi()
Server.start()


