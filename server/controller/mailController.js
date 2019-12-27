import mg from '../helpers/mailgun';

export default class MailController {
	static async sendMail(req, res) {
		try {
			const { email, subject, body } = req.body;

			const msg = {
				to: email,
				from: 'info@zuby.io',
				subject: subject,
				text: body
			};

			mg.messages().send(msg, (error, body) => {
				if (error) {
					console.log(error);
				}

				return res.status(200).json({
					message: 'Email Sent'
				});
			});
		} catch (error) {
			// catch any error
			return res.status(500).json({ message: error.message });
		}
	}
}
