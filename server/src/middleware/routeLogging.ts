import { NextFunction, Request, Response } from 'express';
import { createLogger } from '../helper/logger';

const logger = createLogger('routes');

export default () => {
  return function (req: Request, res: Response, next: NextFunction) {
    const logObject = {
      method: req.method,
      referrer: req.get('Referrer') || 'Missing',
      path: req.path,
      params: req.params,
      query: req.query,
      ip: req.ip,
    };
    logger.info({ ...logObject });
    return next();
  };
};