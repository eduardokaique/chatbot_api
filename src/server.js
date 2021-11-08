"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
let port = process.env.PORT || 3000;
app_1.serverHttp.listen(port, () => console.log(`🚀 Server is run on PORT ${port}`));
