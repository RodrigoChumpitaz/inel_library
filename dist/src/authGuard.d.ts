import { GenericObject } from "./types";
export interface UserPayload {
    userId: string;
    email: string;
    roles: GenericObject[];
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
export declare function AuthGuard({ accessTokenSecret }: {
    accessTokenSecret: string;
}): (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
