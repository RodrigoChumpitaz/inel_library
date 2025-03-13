import { Result } from "neverthrow";
import { MainError, UnexpectedError } from "./utils";
type DecodeResponse<Response> = Result<Response | null, SignOutError | UnexpectedError>;
declare class SignOutError extends MainError {
    constructor(message: string);
}
/**
 * Decode token data
 * @param token - The token to decode
 * @returns The decoded token data or an error
 */
export declare function decodeTokenData<Response>(token: string): DecodeResponse<Response>;
export {};
