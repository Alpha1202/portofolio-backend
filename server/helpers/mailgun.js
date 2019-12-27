import mailgun from 'mailgun-js';

require('dotenv').config();

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;

const mg = mailgun({
    apiKey: API_KEY,
    domain:  DOMAIN
});

export default mg;