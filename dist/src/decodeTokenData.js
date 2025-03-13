"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTokenData = decodeTokenData;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const neverthrow_1 = require("neverthrow");
const utils_1 = require("./utils");
class SignOutError extends utils_1.MainError {
    constructor(message) {
        super({ message });
        this.name = 'SignOutError';
        this.type = 'SignOutError';
    }
}
/**
 * Decode token data
 * @param token - The token to decode
 * @returns The decoded token data or an error
 */
function decodeTokenData(token) {
    try {
        return (0, neverthrow_1.ok)(jsonwebtoken_1.default.decode(token));
    }
    catch (error) {
        console.log("Error in decodeTokenData:::", error);
        return (0, neverthrow_1.err)(new SignOutError(error.message || 'An error occurred while decoding the token.'));
    }
}
