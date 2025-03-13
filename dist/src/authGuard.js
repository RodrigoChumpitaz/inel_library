"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = AuthGuard;
const types_1 = require("./types");
const utils_1 = require("./utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * AuthGuard decorator
 * @param accessTokenSecret - The secret to sign the token
 * @returns The generated token or an error
 */
function AuthGuard({ accessTokenSecret }) {
    return function (_target, _propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (req, res, next) {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            if (!token) {
                return (0, utils_1.response)(res, 'Access Token is required.', types_1.StatusCode.UNAUTHORIZED, 'UnauthorizedError');
            }
            try {
                const decoded = jsonwebtoken_1.default.verify(token, accessTokenSecret);
                req.user = decoded;
                return originalMethod.apply(this, [req, res, next]);
            }
            catch (error) {
                if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
                    return (0, utils_1.response)(res, 'Access Token has expired.', types_1.StatusCode.UNAUTHORIZED, 'ExpiredTokenError');
                }
                return (0, utils_1.response)(res, 'Invalid Access Token.', types_1.StatusCode.FORBIDDEN, 'ForbiddenError');
            }
        };
        return descriptor;
    };
}
