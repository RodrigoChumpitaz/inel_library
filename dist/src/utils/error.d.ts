import { GenericObject } from "../types";
export type ErrorProps = {
    type?: string;
    message: string | GenericObject;
    name?: string;
};
export declare class MainError extends Error {
    type: string;
    name: string;
    constructor(props: ErrorProps);
}
export declare class UnexpectedError extends Error {
    constructor(error: any);
}
