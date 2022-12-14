# 概要
このステップでは、画面に入力された値でバックエンドを更新処理を実装します。

# ここで構築する内容
 - 作業時間の入力補助
 - 更新するためのバックエンドの実装
 - フロントとバックを連携させる。

# 作業時間の入力補助

始めに作業時間の入力を補助するための機能を実装します。

## 時間を計算するためのライブラリをインストール

`frontend`フォルダで以下コマンドを入力し、時間を計算するようのライブラリをインストールします。

```shell
yarn add date-fns
```

## 各入力項目のuseStateを用意する

始めに入力された時刻を監視するために、useStateで変数を宣言します。`components\DailyRowComponents.tsx`
を以下のように編集します。開始時間、終了時間、作業内容１時間、作業時間２時間についてuseStateを編集します。

```components\DailyRowComponents.tsx
  const [startTime, setStartTime] = useState("09:00")

  const [endTime, setEndTime] = useState("17:30")

  const [operationTime1, setOperationTime1] = useState("00:00")

  const [operationTime2, setOperationTime2] = useState("00:00")
```

## 時刻の差分を計算する関数を作成する

時刻を計算する関数を作成します。HH:mm型式のパラメータを二つ受け取り、差分を計算してHH:mm型式で返却します。
以下のような関数を追加します。

```components\DailyRowComponents.tsx
  //HH:MM形式の差分を計算し、HH:MM形式で返す。
  const diffTime = (startTime:string, endTime:string) => {
    
    const startDate = new Date(`1972-01-01 ${startTime}`)  

    const endDate = new Date(`1972-01-01 ${endTime}`)  

    const diffDate = new Date(endDate.getTime() - startDate.getTime())

    //TZを外せなかったので、9時間減らす
    return format(subHours(diffDate, 9), "HH:mm")
  }
```

一度、Dateを使用して差分を求め、先ほどインストールしたライブラリを使用してフォーマットを変更しています。
（タイムゾーンを考慮したフォーマットができなかったため、日本時間の9時間を引いています。）

## 時刻の入力時に動く関数を実装する

時刻が変更された際に動く関数を作成します。`components\DailyRowComponents.tsx`を以下のように編集します。

```components\DailyRowComponents.tsx
 //開始時刻が変更された場合
  const startTimeChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value)
    setOperationTime1(diffTime(event.target.value, endTime, 9))
    setOperationTime2("00:00")
  }

  //終了時刻が変更された場合
  const endTimeChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value)
    setOperationTime1(diffTime(startTime, event.target.value))
    setOperationTime2("00:00")
  }

  //作業１の時間が変更された場合
  const operationTime1ChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setOperationTime1(event.target.value)
  }

  //作業２の時間が変更された場合
  const operationTime2ChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setOperationTime2(event.target.value)

    //残りの時間を作業1の時間へ反映させる
    setOperationTime1(diffTime(event.target.value, operationTime1))
  }
```

開始時刻が変更された場合は、差分を計算して作業時間１へ反映させます。作業時間２は0へ初期化します。

終了時刻が変更された場合は、同様に差分を計算して作業時間１へ反映させます。作業時間２は0へ初期化します。

作業時間１が変更された場合は、変数に値を格納のみします。

作業時間２が変更された場合は、作業時間１から入力された値を引いて作業時間１へ格納します。

## 時刻変更時に関数を呼び出す

値の変更時に関数が呼び出されるようにonChangeに関数を設定します。

```components\DailyRowComponents.tsx
      <TableCell>
        <TextField
          id="startTime"
          type="time"
          value={startTime}
          onChange = {startTimeChangeHandler}
        />
      </TableCell>
      <TableCell>
        <TextField
          id="endTime"
          type="time"
          value={endTime}
          onChange = {endTimeChangeHandler}
        />
      </TableCell>
...
      <TableCell>
        <TextField
          id="operationTime1"
          type="time"
          disabled
          value={operationTime1}
          onChange = {operationTime1ChangeHandler}
        />
      </TableCell>
...
      <TableCell>
        <TextField
          id="operationTime2"
          type="time"
          value={operationTime2}
          onChange = {operationTime2ChangeHandler}
        />
      </TableCell>
```

開始時間と終了時間は関数を指定するのみで、作業時間１と２は時刻入力の設定をしています。作業時間１は入力する必要がないので、入力しないような
設定をしています。


# 更新のためのバックエンド実装

次に、更新するようのバックエンドを作成します。
作業時間はなんどか更新される可能性があるので、Upsertという無ければ作成、あれば更新をするための関数をバックエンドに実装して呼び出すようにします。

## Upsertの実装

バックエンドの`daily_itemized_reports.resolver.ts`と`daily_itemized_reports.service.ts`を以下のように編集します。


```src\database\daily_itemized_reports\daily_itemized_reports.resolver.ts
...
  @Mutation(() => daily_itemized_reports, { name: 'UpsertDailyItemizedReports' })
  async upsertDailyItemizedReports(@Args() args: UpsertOnedailyItemizedReportsArgs) {
    return this.service.upsert({ ...args });
  }
...
```

```src\database\daily_itemized_reports\daily_itemized_reports.resolver.ts
...
  async upsert(args: Prisma.daily_itemized_reportsUpsertArgs) {
    return this.prisma.daily_itemized_reports.upsert(args);
  }
...
```
Prismaには自動的にUpsertが作られていますので、バックエンドで提供されるように呼び出すだけの処理を実装しています。


## 呼び出し用のGraphQLファイルを作成

次にフロントエンドにバックエンドを呼び出すようにgrapqhqlファイルを作成します。

`upsertDailyItemizedReports.graphql`ファイルを作成し以下のように編集します。

```graphql\upsertDailyItemizedReports.graphql

mutation upsertDailyItemizedReports(
  $year_month:String!, 
  $day:String!, 
  $employees_id:Int!, 
  $operation_id:Int!, 
  $operation_time:DateTime!, 
  $start_time:DateTime!, 
  $end_time:DateTime!,
  $work_time:DateTime!) 
{
  UpsertDailyItemizedReports(
  	where:{
      year_month_day_employees_id_operation_id: {
        year_month:$year_month,
        day:$day,
        employees_id:$employees_id,
        operation_id:$operation_id
      }
  	}, 
    create:{
      operation_time:$operation_time,
      operation: {
        connect: {
          operation_id: $operation_id
        }
      },
      daily_reports: {
        connectOrCreate: {
          where: {
            year_month_day_employees_id :{
       				year_month:$year_month,
     					day:$day,
              employees_id:$employees_id
            }
          },
          create: {
            start_time:$start_time,
            end_time:$end_time,
            work_time:$work_time,
            employees:{
              connect: {
                employees_id:$employees_id
              }
            },
            calendar: {
              connect: {
                year_month_day: {
                  year_month: $year_month,
                  day:$day
                }
              }
            }
          }
        }
      }
    },
    update:{
      operation_time:{set:$operation_time},
      operation: {
        connect: {
          operation_id: $operation_id
        }
      },
      daily_reports:{
        upsert:{
          create:{
            start_time:$start_time,
            end_time:$end_time,
            work_time:$work_time,
          	employees:{
              connect: {
                employees_id:$employees_id
              }
            },
            calendar: {
              connect: {
                year_month_day: {
                  year_month: $year_month,
                  day:$day
                }
              }
            }
          },
          update:{
            start_time:{set:$start_time},
            end_time:{set:$end_time},
            work_time:{set:$work_time},
          	employees:{
              connect: {
                employees_id:$employees_id
              }
            },
            calendar: {
              connect: {
                year_month_day: {
                  year_month: $year_month,
                  day:$day
                }
              }
            }
          }
        }
      }
    }
  ) {
  	year_month
    day
    employees_id
    operation_id
    operation_time
  }
}

```

少し長くなっています。Upsertはパラメータを三つとり、Whereのデータが存在するかしないかで実行する処理を変更します。
データがあればCreatのデータでデータを作成し、あればUpdateの内容で更新をします。

DailyItemizedReportsはDailyReportsに外部キー制約があるので、同時にDailyReportsのUpsertを実行するmutationになっています。

## コードを生成

以下のコマンドを実行しgraphqlファイルからコードを生成します。

```
yarn generate  
```