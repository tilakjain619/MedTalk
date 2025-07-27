import express from 'express';
import { askGemma } from '../utils/openrouter.js'; // this will use gemini now!

const router = express.Router();

router.post('/upload', async (req, res) => {
    try {
        const { prescriptionText } = req.body;
        if (!prescriptionText) {
            return res.status(400).json({ error: 'No prescription text provided' });
        }
        const prompt = [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `You are a knowledgeable and concise medical assistant. Analyze the following prescription text, identify medicines and explain each listed medicine in clear, simple terms. For each medicine, describe what it is used for, how it should be taken, and any important side effects. Do not mention the prescription or its formatting. Do not include disclaimers, diagnoses, or any medical advice. Do not add any unrelated or extra information — focus only on the medicines listed. Use proper heading markdown for medicine names. Here is the prescription text: ${prescriptionText}`,
                    },
                ]
            }
        ];

        const result = await askGemma(prompt);
        res.json({ summary: result });
    } catch (error) {
        console.error('Error processing prescription text:', error);
        res.status(500).json({ error: 'Failed to process the prescription text' });
    }
});



router.post("/chat", async (req, res) => {
    const { history, question } = req.body;

    const prompt = [
        {
            role: "system",
            content:
                "You are a medical assistant. Based on the following prescription summary, answer the user's question in simple language. Provide clear explanations and avoid technical jargon. Don't give extra information or disclaimers.",
        },
        {
            role: "user",
            content: history,
        },
        {
            role: "user",
            content: question,
        },
    ];

    try {
        const reply = await askGemma(prompt);
        res.json({ response: reply });
    } catch (err) {
        res.status(500).json({ error: "Chat error" });
    }
});

export default router;
