/**
 * Minimal Gemini client for the "Ask Viky AI" assistant.
 * Plain fetch against the generative-language REST API with automatic multi-model fallback.
 */

const SYSTEM_PROMPT = `You are "Viky AI", the personal knowledge assistant embedded in Viky Aditama's
professional profile website. Answer questions about Viky's work, research,
projects (Madulingo, Astrova), roles (Duta Budaya Madura, Duta Kampus
Universitas PGRI Sumenep, CEO of KEMUT Foundation, Editor-in-Chief of KEMUT
News, teacher, researcher, full-stack engineer) using ONLY the context
provided below. Be concise, warm, and professional. If the answer isn't in
the context, say you don't have that information yet rather than inventing
details.`;

const FALLBACK_MODELS = [
  "gemini-3.5-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
  "gemini-flash-lite-latest",
  "gemini-3.8-flash",
];

export async function askViky(question: string, context: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      answer:
        "The AI assistant isn't configured yet — add GEMINI_API_KEY to your environment to enable Ask Viky AI.",
      error: "missing_api_key",
    };
  }

  const configuredModel = process.env.GEMINI_MODEL;
  const modelsToTry = [
    ...(configuredModel ? [configuredModel] : []),
    ...FALLBACK_MODELS,
  ].filter((m, idx, arr) => arr.indexOf(m) === idx);

  let lastError: Error | null = null;

  for (const model of modelsToTry) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\n--- CONTEXT ---\n${context}\n\n--- QUESTION ---\n${question}`,
                },
              ],
            },
          ],
          generationConfig: { temperature: 0.4, maxOutputTokens: 500 },
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`Gemini model ${model} returned ${res.status}: ${errText}`);
        lastError = new Error(`Gemini API error (${res.status}): ${errText}`);
        continue;
      }

      const data = await res.json();
      const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (answer) {
        return { answer };
      }
    } catch (err: any) {
      console.warn(`Error querying Gemini model ${model}:`, err?.message || err);
      lastError = err instanceof Error ? err : new Error(String(err));
    }
  }

  throw (
    lastError ||
    new Error("All candidate Gemini models failed to generate content.")
  );
}
