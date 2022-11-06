# 概要
バックエンドとフロントエンドを連携させて、取得したデータを画面に反映させるステップです。

# ここで構築する内容
 - graphqlファイルの作成
 - graphqlファイルからフロントで呼び出すよう関数の生成
 - フロントの画面より関数を呼び出し、バックエンドのデータを取得する。

# graphqlファイルの作成

フロントエンドからバックエンドを呼び出せるようにするため、一度graphqlファイルに定義を作成しそのファイルから
関数を生成します。
ここではまずgraphqlファイルを作成します。
## Playgroundでファイル作成補助

就業管理画面では、その月の全ての日付を表示しています。そのため、ここではカレンダーテーブルから、その月の情報を取得する必要が
あります。カレンダーテーブルからデータを複数取得するGraphQLは`CalendarList`になります。
Playgroundで`CalendarList`を呼び出します。


PRETTIFYを以下の通り、入力し
```graphql
query getCalenderList($where: calendarWhereInput!) {
  CalendarList(where: $where) {
    year_month
    day
    workday
    saturday
    holiday
  }
}
```

QUERY VARIABLESに以下を入力して実行します。

```graphql
{ 
 "where": {"year_month": {"equals": "202211"}}
}
```

実行すると先ほど登録したデータが取得されます。PRETTIFYで入力した`$where`が変数となり、QUERY VARIABLESに入力した値が変数に入り実行されます。
QUERY VARIABLESでは`year_month`が202211となっているものが取得されます。"equals"を変更することにより、部分一致や大小比較の条件に一致したデータを取得することができます。

`frontend`フォルダの下に`graphql`フォルダを作成し、`getCalenderList.graphql`を作成します。

ファイルを作成したら、以下の内容を記入します。

```graphql[getCalenderList.graphql]
query getCalenderList($where: calendarWhereInput!) {
  CalendarList(where: $where) {
    year_month
    day
    workday
    saturday
    holiday
  }
}
```

先ほどのPRETTIFYと同じ内容になります。Praygroundで実際に試した内容がgraphqlファイルになります。

# graphqlファイルからフロントで呼び出すよう関数の生成
# フロントの画面より関数を呼び出し、バックエンドのデータを取得する。