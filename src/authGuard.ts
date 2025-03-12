import { GenericObject, StatusCode } from "./types";
import { NextFunction, Request, Response } from 'express';
import { response } from "./utils";
import jwt from 'jsonwebtoken';

export interface UserPayload {
    userId: string;
    email: string
    roles: GenericObject[]
    status: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

/**
 * AuthGuard decorator
 * @param accessTokenSecret - The secret to sign the token
 * @returns The generated token or an error
 * @example
 * ```ts
 * @AuthGuard ({ accessToken })
 * async function get(req: Request, res: Response) {
 *  return res.json({ message: 'Hello World!' });
 * }
 * ```
 */

export function AuthGuard({ accessTokenSecret }: { accessTokenSecret: string }) {
    return function (
        _target: any,
        _propertyKey: string,   
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (
            req: Request,
            res: Response,
            next: NextFunction
        ) {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                return response(res, 'Access Token is required.', StatusCode.UNAUTHORIZED, 'UnauthorizedError');
            }

            try {
                const decoded = jwt.verify(token, accessTokenSecret) as UserPayload;
                req.user = decoded;
                return originalMethod.apply(this, [req, res, next]);
            } catch (error) {
                if (error instanceof jwt.TokenExpiredError) {
                    return response(res, 'Access Token has expired.', StatusCode.UNAUTHORIZED, 'UnauthorizedError');
                }
                return response(res, 'Invalid Access Token.', StatusCode.FORBIDDEN, 'UnauthorizedError');
            }
        }
        return descriptor;
    }
}