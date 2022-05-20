import express from 'express'
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './useCases/submitFeedbacksUseCase'
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter'

export const routes = express.Router()

routes.get('/', async (req, res) => {
    return res.status(200).json({
        title: "Hello World !!",
        message: ["Welcome to Widget Feedback  API rest!!",
            "Read more about API on https://github.com/dosza/nlw-return#api-rest"
        ]
    })
})
routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeebackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )
    
    try {
        await submitFeebackUseCase.execute({
            type,
            comment,
            screenshot
        })
    }catch(error){
        console.log(error)
        return res.status(500).send()
    }


    return res.status(201).send()

})