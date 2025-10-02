# ラストダイエット書籍 Spec-Driven Writing System

## 概要
このディレクトリは「ラストダイエット」書籍執筆をSpec-Driven Developmentの手法で管理するためのシステムです。章ごとに仕様を定義し、仕様 → 清書 → 品質検証の流れを標準化して、いつでも同じ水準でプロレベルの原稿を作成できるようにします。

## ディレクトリ構造
```
.specify/
├── README.md                   # このファイル
├── memory/
│   └── constitution.md         # 執筆憲法（基本原則・品質基準・共通チェックリスト）
├── plans/
│   └── writing-flow.md         # 仕様作成〜清書〜校正の進行管理
├── prompts/
│   ├── chapter_clean_draft_prompt.md  # 章清書用の共通AIプロンプト
│   └── revision_check_prompt.md       # 校正・再確認用プロンプト
├── specs/                      # 章ごとの詳細仕様書
│   ├── _template.md            # 仕様書テンプレート
│   ├── common-style.md         # 全章共通のスタイル・用語・数値指針
│   ├── ch01-foundations/
│   │   └── specification.md
│   ├── ch02-mechanism/
│   │   └── specification.md
│   ├── ch03-roles/
│   │   └── specification.md
│   ├── ch04-minimal-steps/
│   │   └── specification.md
│   ├── ch05-diet/
│   │   └── specification.md
│   ├── ch06-exercise/
│   │   └── specification.md
│   ├── ch07-habits/
│   │   └── specification.md
│   ├── ch08-measurement/
│   │   └── specification.md
│   ├── ch09-plateau/
│   │   └── specification.md
│   ├── ch10-application/
│   │   └── specification.md
│   ├── ch11-family/
│   │   └── specification.md
│   └── ch12-maintenance/
│       └── specification.md
└── tasks/
    ├── chapter_spec_checklist.md    # 仕様書作成時のチェックリスト
    └── final_qc_checklist.md        # 清書後の最終品質チェックリスト
```

## 標準ワークフロー
1. **準備**
   - `memory/constitution.md` で執筆方針・文体・品質基準を再確認
   - `specs/common-style.md` で共通用語・数値・定型表現を確認
2. **章仕様の更新**
   - `specs/_template.md` を参照し、該当章の `specification.md` を最新化
   - ドラフト（`40-drafts/`）、インタビュー（`25-sessions/`）、実体験記（`30-research/`）から必要情報を抜き出して仕様に反映
   - `tasks/chapter_spec_checklist.md` を使って網羅性を確認
3. **清書**
   - `prompts/chapter_clean_draft_prompt.md` をもとにAIへ指示し、仕様に沿って原稿を作成
   - 清書原稿は `45-final/` に保存（章ごとのMarkdown）
4. **品質検証**
   - `prompts/revision_check_prompt.md` でセルフレビューまたはAIレビューを実施
   - `tasks/final_qc_checklist.md` を使って出版基準を満たしているか確認
5. **進行管理**
   - `plans/writing-flow.md` に進捗と次のアクションを記録

## 役割分担の考え方
- **仕様作成**: 章の目的、読者課題、使用データ、構成骨子を明確化
- **清書**: 仕様を満たした文章化。口調・用語・構文は共通ガイドに準拠
- **レビュー**: 安全性・継続性・読者配慮・数値整合性を検証

## 重要原則
- **安全性最優先**: 医学的事項は必ず専門家相談を促す
- **個人差尊重**: 「人それぞれですが」など配慮文を意識的に挿入
- **継続性重視**: 読者が無理なく実践できる提案のみ掲載
- **実体験基盤**: 実際のデータ・記録に根ざした説得力を担保
- **再現性**: 同じ仕様・プロンプトを使えば誰が実行しても同水準の清書が得られる状態を維持
