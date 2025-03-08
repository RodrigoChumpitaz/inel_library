import Joi from "joi";
import { Result } from "neverthrow";
import { GenericObject } from "../types";
export declare function createInstanceOrError<T>(schema: Joi.ObjectSchema<any>, data: GenericObject): Result<T, string>;
