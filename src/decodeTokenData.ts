import jwt from "jsonwebtoken";
import { err, ok, Result } from "neverthrow";
import { MainError, UnexpectedError } from "./utils";

type DecodeResponse<Response> = Result<Response | null, SignOutError | UnexpectedError>;
class SignOutError extends MainError {
    constructor(message: string) {
        super({ message });
        this.name = 'SignOutError';
        this.type = 'SignOutError';
    }
}

/**
 * Decode token data
 * @param token - The token to decode
 * @returns The decoded token data or an error
 */
export function decodeTokenData<Response>(token: string): DecodeResponse<Response> {
    try {
        return ok(jwt.decode(token) as Response);
    } catch (error: Error | any) {
        console.log("Error in decodeTokenData:::", error);
        return err(new SignOutError(error.message || 'An error occurred while decoding the token.'));
    }
}