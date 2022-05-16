import { MailAdapter, SendMailData } from '../adapters/mailAdapter';
import { FeedbacksRepository } from '../repositories/feedbacksRepository'
interface SubmitFeebackUseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter : MailAdapter
    ) { }

    async execute(request: SubmitFeebackUseRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })


        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
             body : [
                `<div style="font-family: sans-serif;font-size: 16px; color: #111;">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário ${comment}</p>`,
                '</div>'
            ].join('\n'),
        } as SendMailData)
    }
}