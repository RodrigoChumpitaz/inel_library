import Joi from "joi";
import { GenericObject } from "../types";

export interface CreateTokenRequest {
    payload: GenericObject | string | Array<any>;
    secret?: string;
    expiresIn?: string | number;
}

export const creaTokenSchema = Joi.object<CreateTokenRequest>({
    payload: Joi.alternatives(
        Joi.object(), Joi.string(), Joi.array())
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
    secret: Joi.string().optional(),
    expiresIn: Joi.alternatives(Joi.string(), Joi.number()).optional()
});