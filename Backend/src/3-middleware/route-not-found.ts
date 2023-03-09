import { Request, Response, NextFunction } from "express";
import { RouteNotFound } from "../4-models/error-model";


function routeNotFound(request: Request, response: Response, next: NextFunction): void {
    const errorMessage = new RouteNotFound(request.originalUrl);
    next(errorMessage);
}
export default routeNotFound;
