import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport(process.env.MAILSERVER_URL)
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject,body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Daniel Oliveira Souza <15186872+dosza@users.noreply.github.com',
            subject: subject,
            html: body
        })
    }
}

