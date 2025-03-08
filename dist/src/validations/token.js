"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creaTokenSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.creaTokenSchema = joi_1.default.object({
    payload: joi_1.default.alternatives(joi_1.default.object(), joi_1.default.string(), joi_1.default.array())
        .custom((value, helpers) => {
        if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
            return helpers.error('any.required');
        }
        if (Array.isArray(value) && value.length === 0) {
            return helpers.error('any.required');
        }
        if (typeof value === 'string' && value.trim().length === 0) {
            return helpers.error('any.required');
        }
        if (!value) {
            return helpers.error('any.required');
        }
        return value;
    }).messages({
        'any.required': 'Payload is required'
    }),
    secret: joi_1.default.string().optional(),
    expiresIn: joi_1.default.alternatives(joi_1.default.string(), joi_1.default.number()).optional()
});
