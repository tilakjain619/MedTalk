import fetch from "node-fetch";

export const askGemma = async (input) => {
  const isGemma = typeof input === "string"; // plain prompt
  const payload = isGemma
    ? {
        model: "google/gemma-3-27b-it",
        prompt: input,
        fallback: ["mistralai/mistral-7b-instruct:free"],
      }
    : {
        model: "google/gemma-3-27b-it",
        messages: input,
        fallback: ["mistralai/mistral-7b-instruct:free"],
      };

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("OpenRouter API Error:", data);
    throw new Error(data.error?.message || "API error");
  }

  const content = data.choices?.[0]?.message?.content || data.choices?.[0]?.text;
  if (!content) {
    console.error("Invalid API response format:", data);
    throw new Error("Invalid response from AI model");
  }

  return content;
};
