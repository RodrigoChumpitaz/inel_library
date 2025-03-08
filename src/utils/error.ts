import { GenericObject } from "../types";

export type ErrorProps = {
    type?: string;
    message: string | GenericObject;
    name?: string;
}

export class MainError extends Error {
    type: string = 'UnexpectedError';
    name: string = 'MainError';

    constructor(props: ErrorProps) {
        super(props.message as string);
        this.type = props.type || this.type;
        this.name = props.name || this.name;
    }
}

export class UnexpectedError extends Error {
    constructor(error: any) {
        console.error('UnexpectedError:::', error);
        super('An unexpected error occurred. Please try again later.');
        this.name = 'UnexpectedError';
    }
}