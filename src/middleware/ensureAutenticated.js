"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticate(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        request.userId = sub;
        return next();
    }
    catch (error) {
        return response.status(401).json({ errorCode: "token.expired" });
    }
}
exports.ensureAuthenticate = ensureAuthenticate;
