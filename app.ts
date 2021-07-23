import Routes from "./src/server/routes/routes";
import {Server} from "./server";
import article from "./src/server/database/model/Article";

Routes.build()

Server.start()

//article.query.findById(1).then(data => console.log(data))

