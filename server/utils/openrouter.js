import fetch from "node-fetch";

export const askGemma = async (messages) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemma-3-27b-it:free",
      messages,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("OpenRouter API Error:", data);
    throw new Error(data.error?.message || "API error");
  }

  if (!data.choices || !data.choices[0]?.message?.content) {
    console.error("Invalid API response format:", data);
    throw new Error("Invalid response from AI model");
  }

  return data.choices[0].message.content;
};
