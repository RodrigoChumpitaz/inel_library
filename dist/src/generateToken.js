"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var neverthrow_1 = require("neverthrow");
var utils_1 = require("./utils");
var DEFAULT_SECRET = 'default_secret';
var DEFAULT_EXPIRES_IN = '1h';
var GenerateTokenError = /** @class */ (function (_super) {
    __extends(GenerateTokenError, _super);
    function GenerateTokenError(props) {
        var _this = _super.call(this, props) || this;
        _this.type = 'GenerateTokenError';
        return _this;
    }
    return GenerateTokenError;
}(utils_1.MainError));
/**
 * Generate a token
 * @param payload - The payload to sign
 * @param secret - The secret to sign the token
 * @param expiresIn - The expiration time of the token
 * @returns The generated token or an error
 */
function generateToken(payload, secret, expiresIn) {
    if (secret === void 0) { secret = DEFAULT_SECRET; }
    if (expiresIn === void 0) { expiresIn = DEFAULT_EXPIRES_IN; }
    try {
        if (!payload) {
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
