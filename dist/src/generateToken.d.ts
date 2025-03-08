import { GenericObject } from './types';
import { Result } from 'neverthrow';
import { ErrorProps, MainError, UnexpectedError } from './utils';
declare class GenerateTokenError extends MainError {
    constructor(props: ErrorProps);
}
type GenerateTokenResponse = Result<string, GenerateTokenError | UnexpectedError>;
/**
 * Generate a token
 * @param payload - The payload to sign
 * @param secret - The secret to sign the token
 * @param expiresIn - The expiration time of the token
 * @returns The generated token or an error
 */
export declare function generateToken(payload: GenericObject | string, secret?: string, expiresIn?: string): GenerateTokenResponse;
export {};
