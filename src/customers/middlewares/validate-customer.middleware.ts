import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
    use(req:Request, res:Response, next:NextFunction){
        console.log(" i'm inside the middleware.");

        const {authorization} = req.headers;
        if (!authorization){
            return res.status(401).json({message: "Unauthorized"});
        }
        
        next();
    }
}