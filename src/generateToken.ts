import jwt from 'jsonwebtoken'
import { GenericObject } from './types'
import type { StringValue } from "ms";
import { err, ok, Result } from 'neverthrow';
import { ErrorProps, MainError, UnexpectedError } from './utils';

const DEFAULT_SECRET = 'default_secret'
const DEFAULT_EXPIRES_IN = '1h'

class GenerateTokenError extends MainError {
    constructor(props: ErrorProps) {
        super(props);
        this.type = 'GenerateTokenError';
    }
}

type GenerateTokenResponse = Result<string, GenerateTokenError | UnexpectedError>

/**
 * Generate a token
 * @param payload - The payload to sign
 * @param secret - The secret to sign the token
 * @param expiresIn - The expiration time of the token
 * @returns The generated token or an error
 */
export function generateToken(
    payload: GenericObject | string,
    secret: string = DEFAULT_SECRET,
    expiresIn: string = DEFAULT_EXPIRES_IN
): GenerateTokenResponse {
    try {
        if (typeof payload === 'object' && Object.keys(payload).length === 0) {
            return err(new GenerateTokenError({ message: 'Payload is required' }))
        }
        if (!secret) {
            return err(new GenerateTokenError({ message: 'Secret is required' }))
        }
        if (!expiresIn) {
            return err(new GenerateTokenError({ message: 'ExpiresIn is required' }))
        }
        return ok(jwt.sign(payload, secret, { expiresIn: expiresIn as StringValue }))
    } catch (error) {
        return err(new UnexpectedError(error))
    }
}