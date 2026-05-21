━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
施工通知書 AI自動生成システム
セットアップ手順
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【必要なもの】
- GitHub アカウント（無料）
- Netlify アカウント（無料）→ https://netlify.com
- Anthropic API Key → https://console.anthropic.com/settings/keys

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1：GitHub にアップロード
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. GitHub を開く → https://github.com
2. 右上の「+」→「New repository」
3. Repository name: koji-notice（なんでもOK）
4. 「Create repository」をクリック
5. 「uploading an existing file」をクリック
6. このフォルダの中身を全部ドラッグ＆ドロップ
   （netlify/ フォルダ、public/ フォルダ、netlify.toml）
7. 「Commit changes」をクリック

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2：Netlify でデプロイ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. https://netlify.com を開く
2. 「Sign up」→「GitHub でログイン」
3. 「Add new site」→「Import an existing project」
4. 「GitHub」を選択
5. さっき作ったリポジトリを選択
6. 設定はそのまま「Deploy site」をクリック
7. デプロイ完了（1〜2分）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3：API Key を設定（重要！）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Netlify のサイト管理画面を開く
2. 「Site configuration」→「Environment variables」
3. 「Add a variable」をクリック
4. Key:   ANTHROPIC_API_KEY
   Value: sk-ant-api03-xxxxxxx（あなたのAPIキー）
5. 「Save」をクリック
6. 「Deploys」→「Trigger deploy」→「Deploy site」
   （再デプロイして設定を反映）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4：完成！
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Netlify が自動でURLを発行します：
例）https://amazing-site-123.netlify.app

このURLを誰でも手機・PCで開けます！

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【使い方】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. URLを開く
2. 施工内容を日本語で入力
   例：「西新宿タワー60・1212号室、5月1〜3日、
       9〜18時、クロス張替、月輪合同会社、林興」
3. AIが自動で通知書を生成
4. 内容を確認・編集
5. 「通知書を生成する」→ 画像保存 or PDF印刷

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【わからないことがあれば】
Claude に聞いてください！
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
