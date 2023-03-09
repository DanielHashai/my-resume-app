class ErrorModel {
    public constructor(public status: number, public message: string) {

    }
}


export class RouteNotFound extends ErrorModel {

    public constructor(route: string) {
        super(404, `I am sorry but the route at ${route} was not found`);
    }

}

export class idNotFound extends ErrorModel {

    public constructor(id: number) {
        super(404, `I am sorry but the id at ${id} was not found`);
    }

}

export class validationError extends ErrorModel {

    public constructor(validMessage: string) {
        super(404, validMessage);
    }

}
export class UnauthorizedError extends ErrorModel {
    public constructor(message: string) {
        super(401,message);
    }
}





