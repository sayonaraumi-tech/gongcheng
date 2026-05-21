exports.handler = async function(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" }, body: "" };
  }
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) return { statusCode: 500, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ error: "API key not set" }) };
  try {
    const { messages } = JSON.parse(event.body);
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, system: `あなたは施工通知書を自動生成するアシスタントです。ユーザーが施工内容を説明したら、以下のJSON形式のみで返してください。JSONのみ、前置き・説明文は一切不要です。\n\n{"building":"マンション名","unit":"部屋番号","address":"住所","content":"工事内容","dateFrom":"YYYY-MM-DD","dateTo":"YYYY-MM-DD","timeFrom":"HH:MM","timeTo":"HH:MM","company":"施工会社名","contact":"担当者名　TEL：電話番号","finishDate":"YYYY年M月D日","days":[{"label":"M/D（曜）"}],"steps":[{"name":"工程名","checked":[1,0,0],"note":""}]}`, messages })
    });
    const data = await response.json();
    return { statusCode: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }, body: JSON.stringify(data) };
  } catch(err) {
    return { statusCode: 500, headers: { "Access-Control-Allow-Origin": "*" }, body: JSON.stringify({ error: err.message }) };
  }
};
