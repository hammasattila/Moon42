import { Request, Response, NextFunction, RequestHandler } from "express";


export let magic: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    let input: string = '';
    if (typeof req.query.input === 'string') {
        input = req.query.input;
    }

    let items = input.split(/\s+/)
    let first = items.shift();

    switch (first) {
        case 'first':
            items = items.sort()
                .map((e: string) => e.slice(0, -1))
                .filter((e: string) => e);
            break;
        case 'second':
            items = items.sort()
                .reverse()
                .map((e: string) => e + "A");
            break
        default:
            res.sendStatus(400); // Bad request
            return;
    }

    res.send(JSON.stringify(items));
    

}