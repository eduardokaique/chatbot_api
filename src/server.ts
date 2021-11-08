import { serverHttp } from "./app";

let port = process.env.PORT || 8080;
serverHttp.listen(port, () => console.log(`🚀 Server is run on PORT ${port}`));