

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
   console.log("timestamp",new Date())
    console.log( "Htpp method",req.method)
    console.log("requested url",req.originalUrl)
    next();
  }
}
