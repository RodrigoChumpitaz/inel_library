import Joi from "joi";
import { GenericObject } from "../types";
export interface CreateTokenRequest {
    payload: GenericObject | string | Array<any>;
    secret?: string;
    expiresIn?: string | number;
}
export declare const creaTokenSchema: Joi.ObjectSchema<CreateTokenRequest>;
