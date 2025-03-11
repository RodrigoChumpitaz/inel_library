import jwt from 'jsonwebtoken'
import { GenericObject } from './types'
import type { StringValue } from "ms";
import { err, ok, Result } from 'neverthrow';
import { createInstanceOrError, ErrorProps, MainError, UnexpectedError } from './utils';
import { CreateTokenRequest, creaTokenSchema } from './validations';

const DEFAULT_SECRET = 'default_secret'
const DEFAULT_EXPIRES_IN = '1h'

class GenerateTokenError extends MainError {
    constructor(props: ErrorProps) {
        super(props);
        this.type = 'GenerateTokenError';
        this.name = 'GenerateTokenError';
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
    payload: GenericObject | string | Array<any>,
    secret: string = DEFAULT_SECRET,
    expiresIn: string = DEFAULT_EXPIRES_IN
): GenerateTokenResponse {
    try {
        const paramsOrError = createInstanceOrError<CreateTokenRequest>(creaTokenSchema, { payload, secret, expiresIn })
        if(paramsOrError.isErr()) {
            return err(new GenerateTokenError({ message: paramsOrError.error }))
        }
        return ok(jwt.sign(paramsOrError.value.payload, paramsOrError.value.secret!, { expiresIn: paramsOrError.value.expiresIn as StringValue, algorithm: 'HS256' }))
    } catch (error) {
        return err(new UnexpectedError(error))
    }
}