"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = exports.MainError = void 0;
class MainError extends Error {
    type = 'UnexpectedError';
    name = 'MainError';
    constructor(props) {
        super(props.message);
        this.type = props.type || this.type;
        this.name = props.name || this.name;
    }
}
exports.MainError = MainError;
class UnexpectedError extends Error {
    constructor(error) {
        console.error('UnexpectedError:::', error);
        super('An unexpected error occurred. Please try again later.');
        this.name = 'UnexpectedError';
    }
}
exports.UnexpectedError = UnexpectedError;
