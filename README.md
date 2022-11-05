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

Playgroundで以下のmutationを実行します。実行するとデータが1件挿入されます。mutationはGraphQLでデータを更新される場合に
仕様され、バックエンドに用意した名称とパラメータを使ってデータの更新を行います。

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

### 一括で登録する

複数のデータを挿入する場合は、コマンドで一括で実行するとはやいです。HTTPリクエストを送ればよいので、PowerShellの場合、以下のように実行します。

```PowerShell
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
  "query":"mutation{CreateCalendar(data: {year_month:\"202210\",day:\"01\",workday:false,saturday:true,holiday:false}){day}}"
 }' -ContentType 'application/json'
```

２２年１１月のデータは以下の通りになります。

```PowerShell
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"01\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"02\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"03\",workday:false,saturday:false,holiday:true}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"04\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"05\",workday:false,saturday:true,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"06\",workday:false,saturday:false,holiday:true}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"07\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"08\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"09\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"10\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"11\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"12\",workday:false,saturday:true,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"13\",workday:false,saturday:false,holiday:true}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"14\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"15\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"16\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"17\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"18\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"19\",workday:false,saturday:true,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"20\",workday:false,saturday:false,holiday:true}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"21\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"22\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"23\",workday:false,saturday:false,holiday:true}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"24\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"25\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"26\",workday:false,saturday:true,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"27\",workday:false,saturday:false,holiday:true}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"28\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"29\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'
> Invoke-RestMethod -Method Post -Uri http://localhost:3100/graphql -Headers $headers -Body '{ 
"query":"mutation{CreateCalendar(data: {year_month:\"202211\",day:\"30\",workday:true,saturday:false,holiday:false}){day}}"
}' -ContentType 'application/json'

```






