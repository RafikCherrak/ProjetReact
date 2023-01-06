import { Request, Response } from "express";



export default module.exports = function () {

    return function (req: Request, res: Response, next: () => void) {
        const { n1, n2 } = req.body;
        if (isNaN(Number(n1)) || isNaN(Number(n2)) || n1 == "" || n2 == "") {
            res.status(400);
            res.send("Bad request");
            return;
        }
        next();
    };

};