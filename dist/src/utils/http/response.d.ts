import { Response } from 'express';
import { GenericObject, StatusCode } from '../../types';
declare function response(res: Response, data: GenericObject | any | undefined, status: StatusCode, type?: string): void;
export { response };
