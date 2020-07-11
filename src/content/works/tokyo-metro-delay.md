---
title: 東京メトロ、遅れてる？
introduction: 東京メトロ9路線の遅延状況と、遅延証明書へのリンクを表示するWebアプリ
url: https://metro.chikoku.net/
thumbnailUrl: https://pbs.twimg.com/media/Ecncw7XU4AAvtzN?format=png&name=medium
---

## アプリ概要

2017年制作

東京メトロ9路線の遅延状況と、過去の遅延証明書へのリンクを表示するアプリ


## こだわりポイント

### レスポンシブデザイン

PCでも・スマホでも・スマホを横にしても最適な表示を。

昨今のWebサービスは、横長時の挙動を考慮していない邪悪なサービスが多いため、  
ささやかな抵抗としてちゃんと実装。  
未来のあもんへの戒めとしても。


### 東京メトロ利用者が見慣れたナンバリングを使用

東京メトロと言えば洗練された案内サイン  
利用者が見慣れているナンバリング画像を大きく使用


## 担当

ゼミにて個人制作  
すべて (企画・デザイン・フロントエンド・バックエンド)


## 技術


### フロントエンド

<repo-button href="https://github.com/amotarao/tokyo-metro-delay-frontend" type="github">GitHub Repository</repo-button>

特にフレームワークは使用せず  
単純な HTML5, CSS3, JavaScript で実装


### バックエンド

<repo-button href="https://github.com/amotarao/tokyo-metro-delay-api" type="github">GitHub Repository</repo-button>

- App Engine にデプロイした PHP スクリプトを cron job で定期実行
  - リアルタイムデータは、[東京メトロオープンデータ](https://developer.tokyometroapp.jp/info)から取得
  - 遅延証明書データは、[遅延証明書 | 東京メトロ](https://www.tokyometro.jp/delay/history/ginza.html)からスクレイピングで取得
- データは Firebase Realtime Database に保存


## 裏テーマ

通っていた大学では、遅延証明書の提出さえすれば、記載時間分までのの遅刻が出席として認められていた。

合法な遅刻を推進して、真面目に生きる学生を支援。
