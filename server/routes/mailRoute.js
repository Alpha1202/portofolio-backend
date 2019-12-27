import { Router } from 'express';
import mailController from '../controller/mailController';

const { sendMail } = mailController;

const mailRoute = Router();

mailRoute.post('/send_mail', sendMail);

export default mailRoute;
