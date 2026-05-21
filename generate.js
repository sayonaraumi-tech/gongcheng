exports.handler = async function(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "ANTHROPIC_API_KEY が設定されていません" })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        system: `あなたは施工通知書を自動生成するアシスタントです。
ユーザーが施工内容を説明したら、以下のJSON形式のみで返してください。
JSONのみ返してください。前置き・説明文・マークダウンは一切不要です。

{
  "building": "マンション名",
  "unit": "部屋番号（例：1212号室）",
  "address": "住所",
  "content": "工事内容（例：クロス張替（壁紙交換））",
  "dateFrom": "YYYY-MM-DD",
  "dateTo": "YYYY-MM-DD",
  "timeFrom": "HH:MM",
  "timeTo": "HH:MM",
  "company": "施工会社名",
  "contact": "担当者名　TEL：電話番号",
  "finishDate": "YYYY年M月D日",
  "days": [{"label": "M/D（曜）"}],
  "steps": [{"name": "工程名", "checked": [1,0,0], "note": ""}]
}

daysは施工日ごとの配列。
stepsのcheckedはdays配列と同じ長さで、その日に作業するなら1、しないなら0。
工程は施工内容に合わせて現実的に5〜8工程作成。
情報が不足している場合は合理的に推測してください。`,
        messages: messages
      })
    });

    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message })
    };
  }
};
