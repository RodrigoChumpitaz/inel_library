"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const neverthrow_1 = require("neverthrow");
const utils_1 = require("./utils");
const DEFAULT_SECRET = 'default_secret';
const DEFAULT_EXPIRES_IN = '1h';
class GenerateTokenError extends utils_1.MainError {
    constructor(props) {
        super(props);
        this.type = 'GenerateTokenError';
    }
}
/**
 * Generate a token
 * @param payload - The payload to sign
 * @param secret - The secret to sign the token
 * @param expiresIn - The expiration time of the token
 * @returns The generated token or an error
 */
function generateToken(payload, secret = DEFAULT_SECRET, expiresIn = DEFAULT_EXPIRES_IN) {
    try {
        if (typeof payload === 'object' && Object.keys(payload).length === 0) {
            console.log('Payload is empty', payload);
            return (0, neverthrow_1.err)(new GenerateTokenError({ message: 'Payload is required' }));
        }
        if (!secret) {
            return (0, neverthrow_1.err)(new GenerateTokenError({ message: 'Secret is required' }));
        }
        if (!expiresIn) {
            return (0, neverthrow_1.err)(new GenerateTokenError({ message: 'ExpiresIn is required' }));
        }
        return (0, neverthrow_1.ok)(jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expiresIn }));
    }
    catch (error) {
        return (0, neverthrow_1.err)(new utils_1.UnexpectedError(error));
    }
}
