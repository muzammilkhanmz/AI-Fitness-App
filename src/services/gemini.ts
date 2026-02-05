import { GoogleGenerativeAI } from "@google/generative-ai";

// replace this with the API Key you saved earlier
const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");

export async function analyzeFoodImage(imageBase64: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Identify the food in this image. Provide an estimate of calories, protein, carbs, and fats. Return ONLY a clean JSON object like this: { \"foodName\": \"\", \"calories\": 0, \"protein\": 0, \"carbs\": 0, \"fats\": 0 }";

  const result = await model.generateContent([
    prompt,
    {
      inlineData: {
        data: imageBase64,
        mimeType: "image/jpeg",
      },
    },
  ]);

  const response = await result.response;
  return response.text();
}