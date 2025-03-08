import { GenericObject } from "../types";
import { generateToken } from "../generateToken"

describe('Generate Token', () => {

    const genericPayload: GenericObject = {
        id: 1,
        name: 'John Doe',
        email: 'jhon.doe@gmail.com'
    }
    
    it('Should generate a token without errors', () => {
        const token = generateToken(genericPayload);
        expect(token.isOk()).toBe(true);
    })

    it('Should generate a token with a secret', () => {
        const token = generateToken(genericPayload, 'secret')
        expect(token.isOk()).toBe(true);
    })

    it('Should generate a token with an expiration time', () => {
        const token = generateToken(genericPayload, 'secret', '1h')
        expect(token.isOk()).toBe(true);
    })

    it('Should return an error if the payload is empty', () => {
        const token = generateToken({})
        expect(token.isErr()).toBe(true);
        expect((token as any).error.name).toBe('GenerateTokenError');
    })
})