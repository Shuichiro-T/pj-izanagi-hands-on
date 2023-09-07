# 概要
残りのバックエンドサービスを構築し、GraphQLでアクセスするステップです。

# ここで構築する内容
 - Calender以外のバックエンドサービスの実装

# 残りのリゾルバとサービスを作成する
前のステップではcalenderテーブル用のリゾルバとサービスだけ作成しました。ここでは残りの5テーブル用のリゾルバとサービスを作成します。

|  テーブル名  |  リゾルバ・サービス構築済  |
| ----------- | --------- |
|  calendar  |  済  |
|  daily_itemized_reports  |  未  |
|  daily_reports  |  未  |
|  employees  |  未  |
|  operation  |  未  |


calenderと同様に`./src/database`フォルダにデータベース名のディレクトリを作成し、リゾルバとサービスを作成する。中身はcalenderと同じで使用するClientのクラスを変更します。

当ブランチを参考に作成します。

# モジュールへ追加する
`./src/database/database_module.ts`へ作成したリゾルバとサービスを追加します。
以下の用に修正し、追加します。

```TypeScript
@Module({
  imports: [PrismaModule],
  providers: [
    CalendarResolver,
    CalendarService,
    DailyItemizedReportsResolver,
    DailyItemizedReportsService,
    DailyReportsResolver,
    DailyReportsService,
    DepartmentResolver,
    DepartmentService,
    EmployeesResolver,
    EmployeesService,
    OperationResolver,
    OperationService
  ],
  exports: [CalendarService, 
    DailyItemizedReportsService,
    DailyReportsResolver,
    DepartmentService,
    EmployeesService,
    OperationService
  ],
})
export class DatabaseModule {}
```

モジュール追加することでGraphQLのサービスとして動くようになります。

# 動作確認
以下コマンド実行し、バックエンドサービスが起動できるかを確認する。

```
yarn start
```

起動後、localhost:3000/graphqlへアクセスし、Playgroundが起動することを確認する。

※「@apollo/server」関連のエラーが発生する場合、以下のコマンドを実行し、再度`yarn start`を実行する。

```
yarn add @apollo/server
```

## PlaygroundでGraphQLを実行する

Playgroundからバックエンドサービスを呼び出すことができます。左上のクエリ記入欄に以下のクエリを入れ、

```json
query getCalender($where: calendarWhereUniqueInput!) {
  calender: Calendar(where: $where) {
    year_month,
    day
  }
}
```

下のQUERY VALIABLESに以下を入れる。

```json
{ 
 "where": {"year_month_day": {"year_month": "200433", "day": "02"}}
}
```

三角の実行ボタンを押し、クエリを実行する。エラーがなく実行でき、取得できるデータが無ければ正常にバックエンドサービスが稼働し、GraphQLとしてサービスが提供されています。

## Playgroundの使い方
右側にあるDOCSをクリックすると呼び出せるクエリや、パラメータの型、戻り値の型が確認できる。Playgorund上で任意に呼び出せるので、呼び出したいクエリを指定して実行する。

クエリに後付けのパラメータを入れたい場合は$でパラメータを宣言し、下のQUERY VALIABLESでパラメータの実の値を入れる。