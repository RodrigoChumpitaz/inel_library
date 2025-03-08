"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstanceOrError = createInstanceOrError;
const neverthrow_1 = require("neverthrow");
function requestValidator(schema, data) {
    return schema.validate(data, { abortEarly: false, convert: false });
}
function createInstanceOrError(schema, data) {
    const { error } = requestValidator(schema, data);
    if (error) {
        const errors = error.details.map((detail) => detail.message).join(". ");
        return (0, neverthrow_1.err)(errors);
    }
    return (0, neverthrow_1.ok)(data);
}
