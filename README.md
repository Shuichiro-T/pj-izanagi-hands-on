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

作成したgraphqlファイルから関数を自動生成します。
## 必要なライブラリのインストール

まずは生成に必要なライブラリとGraphQLを呼び出すのに必要なライブラリのインストールをします。生成に必要ライブラリのうち、ほとんどが開発時にしか必要がないので、`-D`オプションを指定してインストールしています。
コードの生成には[GraphQL Code Generator](https://the-guild.dev/graphql/codegen)を使用します。

 ```shell
 yarn add  -D @graphql-codegen/typescript @graphql-codegen/typescript-graphql-request @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query @graphql-codegen/add
 ```

```shell
yarn add -D typescript @graphql-codegen/cli
```

```shell
yarn add graphql-request graphql @tanstack/react-query
```

## 設定ファイルの記述

ライブラリのインストールが完了したら、生成するコードの設定をするファイルを作成します。

`codegen.yml`というファイルを作成し、以下のように記述します。

```codegen.yml
overwrite: true
config: 
  fetcher: graphql-request
  exposeQueryKeys: true
schema: "../backend/schema.graphql"
generates:
  ./@types/graphql.d.ts:
    plugins:
      - typescript
    config:
      noExport: true
      enumsAsTypes: true
  ./@generated/graphql.ts:
    documents: "graphql/*.graphql"
    plugins:
      - add
      - typescript-operations
      - typescript-react-query
    config:
      content:
        - // @ts-nocheck
```

実際に呼び出すクライアントや、どこにファイルに出力するかを設定しています。
### 生成コマンドの設定

生成の設定が完了しましたが、生成に複雑なコマンドを指定する必要があります。コマンドをシンプルに指定するために、スクリプトで実行できるようにします。
'package.json'を開き、scriptsの中に以下を追加します。

`"generate": "graphql-codegen --config codegen.yml",`

これを追加することで、シンプルなコマンドで生成を行うことができるようになります。

## コードの生成

設定が完了したので実際にコードを作成します。以下のコマンドを実行します。

```shell
yarn generate
```

これにより先ほど登録したスクリプトが動作し、コードを生成されます。以下の二つが作成されます。

| ファイル | ファイルの中身 | 
| ------------- | ------------- | 
| @generated/graphql.d.ts  | 実際にバックエンドを呼び出すための関数が書かれているファイル  |
| @types/graphql.d.ts  | バックエンドと共通した型が定義されたファイル  |

# フロントの画面より関数を呼び出し、バックエンドのデータを取得する。

作成されたコードを使用して、実際に画面から呼び出せるよう実装を行います。
## バックエンドの設定変更

始めにバックエンドの設定を変更します。`backend/src/main.ts`を開き7行目に以下を追加します。


```backend/src/main.ts
app.enableCors();
```

フロントエンドとバックエンドが異なるドメインで動く際に、必要な設定で今回は異なるポート番号で動いているため必要になります。
引数でオプションを設定することができ、今回のように何も渡さない場合のデフォルトの構成は次の通りとなります。

```
{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
```

アスタリスクは全てを受け入れる設定なので、本来であれば受け入れるべきドメインのみ記述します。既にバックエンドを起動していた場合、再起動してください。

## GraphQL用クライアント作成関数

次にフロントエンドで、バックエンドを呼び出すためのGraphQL用クライアントを作成します。`utils/createGqlClient.ts`というファイルを作成し、以下のように記述します。


```utils/createGqlClient.ts
import { GraphQLClient } from "graphql-request";

export default function createGqlClient() {
  const gqlClient = new GraphQLClient("http://localhost:3100/graphql");

  return gqlClient;
}
```

バックエンドのエンドポイントを指定していて、GraphQLClientを作成しているだけですが、共通的に使われるクライアントなので別のクラスに定義しています。


## QueryClientの指定

バックエンドの呼び出しはReact Queryという仕組みを使用します。クライアントに何を使用するかを指定する必要があるので`pages/_app.tsx`を以下の要に編集します。



```pages/_app.tsx
...
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

...

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
...
```

QueryClientProviderで使用するクライアントを指定しています。

## 画面の編集

実際に画面からバックエンドを呼び出す準備が整いました。ここからは`pages/main/[employees_id].tsx`を編集していきます。

### インポートする

まずは、作成した関数とクライアントを作成する関数をインポートします。以下2行を追加します。

```pages/main/[employees_id].tsx
import { useGetCalenderListQuery } from "../../@generated/graphql";
import createGqlClient from "../../utils/createGqlClient";
```

### バックエンドを呼び出す

変数calenderDaysを作成している箇所を以下の様に編集します。

```pages/main/[employees_id].tsx
  //GraphQL用クライアントの作成
  const gqlClient = createGqlClient()

  //ユーザ情報を暫定的に定義
  const userName = "ユーザ名１"
  const departmentName = "〇〇〇部"

  // 今月のカレンダー日付、暫定的に定義
  const {data: calenderDays, isLoading:isLoadingCalender} = useGetCalenderListQuery(
    gqlClient,
    {
      where: {
        year_month: {
          equals: "202211" 
        },
      },
    }
  )
```

GraphQL用のクライアントを作成し、useGetCalenderListQuery関数を呼び出してバックエンドを呼び出しています。可変の引数を指定して、検索条件を指定しています。useGetCalenderListQueryは戻り値を二つ返し、一つ目は取得したデータ、二つ目は呼び出し中であるかどうかのステータスを表す真偽値です。二つ目の戻り値は、バックエンドを呼び出している際に画面にローディングを意味するグルグルや砂時計を出すために使用します。

### 画面に表示する

85行目付近のmapを使用してループをさせている部分を以下のように編集します。

```pages/main/[employees_id].tsx
              {calenderDays?.CalendarList.sort((n1, n2) => (n2.day < n1.day ? 1 : -1))
                .map((calenderDay) => (

```

取得したデータをsortを使用し、dayの値でソートをさせています。その後、map関数でループさせて入力用のコンポーネントを日付分画面に表示させています。