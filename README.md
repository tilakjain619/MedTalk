# MedTalk

MedTalk is a smart healthcare app that lets users upload prescriptions and get simplified medical insights through AI-powered chat. It helps patients understand medicines, usage instructions, and provides contextual responses based on uploaded content.

## Features

- Upload prescription images
- OCR-powered extraction of medicine details
- AI chat for follow-up questions
- Summary of Prescription
- Responsive design with Tailwind CSS

## Tech Stack

- React + Tailwind CSS (Frontend)
- Node.js + Express (Backend)
- OCR integration via Puter
- Google Gemma for intelligent chat and summaries

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/tilakjain619/MedTalk.git
   ```

2. Navigate to project folders and install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Start frontend and backend:
   ```bash
   cd server
   node app.js

   cd ../client
   npm run dev
   ```