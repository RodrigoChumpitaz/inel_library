import { decodeTokenData } from "../decodeTokenData";

describe('Decode Token Data', () => {
    const accessToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2NlNzNlNmIwMDg4NTk2MjI2ZTc5OTkiLCJ0b2tlblZlcnNpb24iOjAsImlhdCI6MTc0MTg0MTAzOCwiZXhwIjoxNzQyNDQ1ODM4fQ.PvqVpBa2sCKdSQ6lPRsF2iTCAUA7q6dIia4B7U317s4'

    it('Should decode a token without errors and return correct type properties', () => {
        const decoded = decodeTokenData<{ userId: string, tokenVersion: number }>(accessToken);
        expect(decoded.isOk()).toBe(true);
        expect((decoded as any).value).toHaveProperty('userId');
        expect((decoded as any).value).toHaveProperty('tokenVersion');
    });

    // it('Should return an error if the token is invalid', () => {
    //     const decoded = decodeTokenData<{ userId: string, tokenVersion: number }>('');
    //     expect(decoded.isErr()).toBe(true);
    //     expect((decoded as any).error.name).toBe('SignOutError');
    // });
})