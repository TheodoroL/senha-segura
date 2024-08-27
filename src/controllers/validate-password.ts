import { Request, Response } from 'express';

export const validatePassword = (req: Request, res: Response) => {
    const { password } = req.body;
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%]).{8,}$/.test(password)) {
        res.status(400).send({ error: "Bad Request" });
        return;
    }
    res.status(204).send();
};
