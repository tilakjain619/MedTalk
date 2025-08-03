# MedTalk

MedTalk is an AI-powered healthcare assistant that helps users understand their prescriptions. Upload a prescription image, and MedTalk extracts medicine details, provides a summary, and enables a conversational chat to answer follow-up questions in simple language.

---

## Features

- **Upload Prescription Images:** Snap or upload a photo of your prescription.
- **OCR Extraction:** Automatically reads and extracts medicine names and instructions.
- **AI Chat:** Ask questions about your medicines, usage, side effects, and more.
- **Prescription Summary:** Get a concise, patient-friendly summary of your prescription.
- **Responsive UI:** Built with Tailwind CSS for a seamless experience on any device.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **OCR:** Puter.ai
- **AI:** Google Gemma (for chat and summaries)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tilakjain619/MedTalk.git
cd MedTalk
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3. Set Up Environment Variables

- Create a `.env` file in both `client` and `server` folders as needed.
- For example, in `client/.env`:
  ```
  VITE_BACKEND_URL=http://localhost:5000
  ```
- In `server/.env`, add your Openrouter API key:
  ```
  OPENROUTER_API_KEY=your_api_key
  ```

### 4. Start the Application

```bash
# Start backend
cd server
node app.js

# In a new terminal, start frontend
cd ../client
npm run dev
```

---

## Usage

1. Upload a prescription image on the main page.
2. Wait for the app to extract and summarize the prescription.
3. Use the chat to ask questions like:
   - "What is this medicine for?"
   - "Are there any side effects?"
   - "How should I take these medicines?"

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Contact

For questions or support, contact [@tilakjain619](https://github.com/tilakjain619).