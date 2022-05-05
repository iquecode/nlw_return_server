import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a3907a400e577",
      pass: "7b492ad56fb5b5",
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
         await transport.sendMail({
             from: 'Equipe Feedget <oi@feedget.com>',
             to: 'Ique Dev <iquecode@gmail.com>',
             subject,
             html: body,
         })
    };
}