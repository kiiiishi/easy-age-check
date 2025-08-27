

モダンな技術スタックを使用した、美しく高機能な年齢確認ページアプリケーションです。

## 🚀 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: Radix UI
- **アイコン**: Lucide React
- **状態管理**: React Hooks
- **開発環境**: ESLint + TypeScript

## ✨ 主な機能

- 🎨 **モダンなUIデザイン** - 美しいグラデーション背景とアニメーション
- 📱 **完全レスポンシブ** - モバイル・タブレット・デスクトップ対応
- 🔒 **ローカルストレージ** - 24時間有効な年齢確認セッション
- ⏰ **自動カウントダウン** - 年齢確認完了後の自動リダイレクト
- 🌐 **日本語対応** - 完全な日本語UI
- 🎭 **3つの画面状態** - 年齢確認・完了・アクセス拒否
- 🎯 **アクセシビリティ** - Radix UIによる高品質なコンポーネント

## 🛠️ セットアップ

### 前提条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

### 開発サーバー

開発サーバーを起動すると、自動的にブラウザが開き `http://localhost:3000` でアプリケーションにアクセスできます。

## 📁 プロジェクト構成

```
easy-age-checker/
├─ src/
│  ├─ components/
│  │  └─ ui/
│  │     └─ button.tsx          # ボタンコンポーネント
│  ├─ lib/
│  │  └─ utils.ts               # ユーティリティ関数
│  ├─ App.tsx                   # メインアプリケーション
│  ├─ main.tsx                  # エントリーポイント
│  └─ index.css                 # グローバルスタイル
├─ index.html                   # HTMLテンプレート
├─ package.json                 # 依存関係とスクリプト
├─ tsconfig.json                # TypeScript設定
├─ vite.config.ts               # Vite設定
├─ tailwind.config.js           # Tailwind CSS設定
├─ postcss.config.js            # PostCSS設定
├─ _headers                     # Netlify用セキュリティヘッダー
├─ README.md                    # このファイル
├─ .gitignore                   # Git除外設定
└─ LICENSE                      # MITライセンス
```

## 🎮 使用方法

### 基本的な年齢確認フロー

1. **年齢確認画面**: ユーザーが18歳以上かどうかを選択
2. **完了画面**: 年齢確認完了後の確認画面（5秒カウントダウン）
3. **アクセス拒否画面**: 18歳未満の場合の表示

### カスタマイズ

#### 年齢制限の変更

`src/App.tsx`内の年齢確認メッセージを編集：

```tsx
<p className="text-lg text-gray-600 leading-relaxed">
  このコンテンツは18歳以上の方を対象としています。<br />
  あなたは18歳以上ですか？
</p>
```

#### リダイレクト先の設定

年齢確認完了後のリダイレクト先を設定：

```tsx
// 年齢確認完了後、メインページにリダイレクト
window.location.href = '/main';
```

#### セッション有効期限の変更

現在は24時間に設定されています。変更するには：

```tsx
// 24時間以内の場合は年齢確認をスキップ
if (hoursDiff < 24) {
  // 24の部分を変更
}
```

## 🎨 デザインシステム

### カラーパレット

- **プライマリ**: 青系グラデーション（年齢確認画面）
- **成功**: 緑系グラデーション（完了画面）
- **警告**: 赤系グラデーション（アクセス拒否画面）

### コンポーネント

- **Button**: 複数のバリアント（default, outline, destructive等）
- **カード**: 白い背景に影付きのモダンなデザイン
- **アイコン**: Lucide Reactによる一貫性のあるアイコン

## 🔧 開発

### コード品質

- **ESLint**: コード品質の自動チェック
- **TypeScript**: 型安全性の確保
- **Prettier**: コードフォーマットの統一

### スクリプト

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
npm run lint     # ESLintによるコードチェック
```

## 🚀 デプロイ

### Netlify

1. リポジトリをGitHubにプッシュ
2. Netlifyでリポジトリを接続
3. ビルドコマンド: `npm run build`
4. 公開ディレクトリ: `dist`

### Vercel

1. リポジトリをGitHubにプッシュ
2. Vercelでリポジトリを接続
3. フレームワークプリセット: Vite
4. ビルドコマンド: `npm run build`

## 📱 ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 🔒 セキュリティ

- XSS攻撃対策
- クリックジャッキング対策
- コンテンツタイプスニッフィング対策
- 適切なCSP（Content Security Policy）設定

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は`LICENSE`ファイルを参照してください。

## 🤝 貢献

バグ報告や機能要望、プルリクエストを歓迎します。

## 📝 更新履歴

- v1.0.0 (2024-08-26): React + TypeScript + Vite + Tailwind CSS + Radix UI構成で初回リリース

---

© 2024 Easy Age Checker. All rights reserved.

