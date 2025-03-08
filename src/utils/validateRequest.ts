import Joi, { ValidationResult } from "joi";
import { err, ok, Result } from "neverthrow";
import { GenericObject } from "../types";

function requestValidator<T>(
  schema: Joi.ObjectSchema<any>,
  data: GenericObject
): ValidationResult<T> {
  return schema.validate(data, { abortEarly: false, convert: false });
}

export function createInstanceOrError<T>(
  schema: Joi.ObjectSchema<any>,
  data: GenericObject
): Result<T, string> {
  const { error } = requestValidator<T>(schema, data);
  if (error) {
    const errors = error.details.map((detail) => detail.message).join(". ");
    return err<T>(errors);
  }
  return ok<T>(data as T);
}

