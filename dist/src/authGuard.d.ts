export interface UserPayload {
    userId: string;
    email: string;
    roles: Array<{
        name: string;
        description: string;
        permissions: Array<string>;
    }>;
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
 */
export declare function AuthGuard({ accessTokenSecret }: {
    accessTokenSecret: string;
}): (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
