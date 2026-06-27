# LiftLog

## アプリ概要

LiftLogは、筋トレの記録を管理するためのWebアプリです。  
ユーザー登録・ログイン後、自分のトレーニング記録を追加・一覧表示・詳細確認・編集・削除できます。

また、ダッシュボード上で今週の記録数、ストリーク、Personal Recordsを表示し、筋トレの継続状況や成長を確認できるようにしています。

---

## アプリイメージ

![アプリ画面1](https://github.com/yuki-n190/MyRepo/blob/a05c8224431980d916306f9e7594d41d06ebd14f/docs/%E3%82%A2%E3%83%97%E3%83%AA%E7%94%BB%E9%9D%A22.png?raw=true)

![アプリ画面2](https://github.com/yuki-n190/MyRepo/blob/a05c8224431980d916306f9e7594d41d06ebd14f/docs/%E3%82%A2%E3%83%97%E3%83%AA%E7%94%BB%E9%9D%A21.png?raw=true)

![アプリ画面3](https://github.com/yuki-n190/MyRepo/blob/a05c8224431980d916306f9e7594d41d06ebd14f/docs/%E3%82%A2%E3%83%97%E3%83%AA%E7%94%BB%E9%9D%A23.png?raw=true)

---

## URL

- ポートフォリオURL：  
  https://liftlog-portfolio.vercel.app/

- GitHub URL：  
  https://github.com/yuki-n190/liftlog-portfolio

---

## 使用技術

- フロントエンド：Next.js、React、TypeScript、Tailwind CSS、shadcn/ui
- バックエンド：Next.js Route Handler
- データベース：PostgreSQL、AWS RDS
- ORM：Prisma
- 認証：JWT、httpOnly Cookie、bcryptjs、jose
- デプロイ：Vercel
- バージョン管理：Git、GitHub
- テスト・デバッグ：DevTools（Chrome）
- CI/CD：GitHub Actions（ESLint）

---

## 設計ドキュメント

- [要件定義・基本設計・詳細設計の一覧_Googleスプレッドシート](https://docs.google.com/spreadsheets/d/1a0xnYEhYJok-ni0gk58ublJnKdo-uonTuQ5c0f577K4/edit?usp=sharing)
- [ワークフロー図](docs/LiftLog_ワークフロー図.png)
- [ER図](docs/LiftLog_ER図.png)
- [ワイヤーフレーム](docs/LiftLog_ワイヤーフレーム.png)

---

## 機能一覧

### 認証機能

- ユーザー登録
- ログイン
- ログアウト
- 認証チェック

### 筋トレ記録機能

- 筋トレ記録の追加
- 筋トレ記録の一覧表示
- 筋トレ記録の詳細表示
- 筋トレ記録の編集
- 筋トレ記録の削除
- タグ・メモの登録
- 入力バリデーション

### ダッシュボード機能

- 今週の記録数表示
- ストリーク表示
- Personal Records表示
- 直近の記録表示

---

## テスト・修正の設計及び実施書

- [テスト・修正の設計及び実施書_Googleスプレッドシート](https://docs.google.com/spreadsheets/d/13-3rVArbezQnb8PENJ-RzTgTgRFOJVklw-QgvfY2Mew/edit?usp=sharing)

---

## アプリの改善案

- [アプリの改善案_Googleスプレッドシート](https://docs.google.com/spreadsheets/d/1PllN1bwxwAztqOGOJE8tATFy1n3FjVtRBTEIfADb2X8/edit?usp=sharing)

---

## GitHub Actions実行結果

- [ESLintの実行結果_GitHub Actions](https://github.com/yuki-n190/liftlog-portfolio/actions)

GitHub Actionsを使用し、pushまたはpull request時にESLintを自動実行しています。  
コードの静的解析を行い、構文エラーやLintルール違反を確認できるようにしています。

---

## 活用した生成AIとその用途

- ChatGPT：要件定義、設計内容の整理、エラー原因の整理
- v0：アプリのプロトタイプ作成、画面UIのたたき台作成
- GitHub Copilot Chat：ローカル環境でのコード修正相談、実装中のエラー調査、リファクタリング相談

---

## 工夫した点

### 認証機能

JWTをhttpOnly Cookieに保存し、ログイン状態を管理しています。  
パスワードはbcryptjsでハッシュ化し、平文では保存しないようにしています。

### ユーザーごとのデータ管理

WorkoutLogにはuserIdを紐づけ、自分の記録だけを表示・編集・削除できるようにしています。  
API側でもuserIdを確認し、他ユーザーの記録を操作できないようにしています。

### 継続状況の可視化

Dashboardでは、今週の記録数、ストリーク、Personal Recordsを表示しています。  
筋トレ記録を保存するだけでなく、継続や成長が見えるようにしました。

### CI/CDの設定

GitHub ActionsでESLintを実行し、コードの静的解析を自動化しています。  
pushまたはpull request時にチェックが走るようにし、基本的なコード品質を確認できるようにしています。

---

## リファクタリングの規則

- 2つ以上のファイルで使うUIコンポーネントは `components` フォルダに移行する
- 2つ以上のファイルで使う関数は `lib` フォルダに移行する
- 変数名で2つ以上の単語を使う場合は、`isPublished` のようにキャメルケースで命名する
- 認証処理やバリデーション処理など、再利用する処理は関数化して管理する
- 自動生成されたPrisma Clientは直接編集せず、Prisma Schemaをもとに管理する

---

## 今後の改善

- パスワードリセット機能
- タグ別・カテゴリ別の絞り込み表示
- グラフによる重量推移の可視化
- AIコーチ機能
- ECS + RDS構成への移行