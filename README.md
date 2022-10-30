# 概要
バックエンドとフロントエンドを連携させる準備をするステップです。

# ここで構築する内容
 - バックエンド起動ポートの変更
 - テストデータの挿入

# バックエンドの起動ポートの変更
現在の状態ではポートがフロントエンドとバックエンドでポートが競合しているので、同時に起動ができません。

`.env`と`src/main.ts`を編集します。


`.env`には以下の行を追加します。

```SHELL
PORT=3100
```

`src/main.ts`の7行目を以下のように編集します。

```TypeScript
  await app.listen(env.PORT);
```

この変更でバックエンドの起動ポートが変わります。


# テスト用データの挿入

Playgroundからテスト用データの挿入をします。

## Playgroundの起動

まずは`backend`フォルダに移動し、次のコマンドでバックエンドを起動します。


```SHELL
yarn start
```

バックエンドが起動したら、ブラウザから`localhost:3100/graphql`へアクセスします。

## calendarテーブルへのデータ挿入

Playgroundで以下のmutationを実行します。実行するとデータが1件挿入されます。

```
mutation {
  CreateCalendar(data: {
    year_month:"202210",
    day:"01",
    workday:false,
    saturday:true,
    holiday:false
  }) {
  	day
  }
}
```
各カラムの意味は以下の通りです。

|  カラム名  |  説明  |
| ---- | ---- |
|  year_month  |  年月　例：2022年10月＝202210  |
|  day  |  日付　例：1日=01 |
|  workday  |  営業日かどうか　例：false  |
|  saturday  |  土曜日かどうか　例：true  |
|  holiday  |  日曜・休日かどうか　例：false  |


