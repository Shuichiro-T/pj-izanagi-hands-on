# 概要
このステップでは、画面の項目をコンポーネント化します。

# ここで構築する内容
 - 各日別の画面項目をコンポーネント化する
 - コンポーネント化した部品でも情報を共有できるようにする

# 日別の入力欄をコンポーネント化する

ここでは日付の分繰り返さ絵れる入力欄をコンポーネント化します。コンポーネント化することで、色んな処理が一つのファイルに集中せずに
必要な項目と関数が別々のファイルにまとめることができます。

## 個別のコンポーネントを作成する

`components`フォルダを作成し、`DailyRowComponents.tsx`ファイルを作成します。このファイルに入力用のコンポーネントを作成していきます。

`[employees_id].tsx`のTableRowをコンポーネントに移します。


### getDayname関数

まずは、`DailyRowComponents.tsx`にgetDayname関数を移します。

### Props（引数）の設定

DailyRowComponentsは引数を受け取りたいので、引数の型を定義します。

`components/DailyRowComponents.tsx`へ以下を追加します。

```components/DailyRowComponents.tsx
type Props = {
  yearMonth:string
  day:string
};
```

これがこのコンポートのProps（引数）になります。
### 入力項目の移行

次に入力項目をコンポーネントに移します。

`components/DailyRowComponents.tsx`を以下のように編集します。TableRowの中を移しているだけですが、Propsを使用するように変更しています。

```components/DailyRowComponents.tsx
const DailyRowComponents = (props: Props) => {
  return (
    <TableRow key={props.day}>
      <TableCell>
        {props.yearMonth.slice(0,4) + "年" + 
          props.yearMonth.slice(4,6) + "月" + 
          props.day + "日"}
      </TableCell>
      <TableCell>
        {getDayname(props.yearMonth, props.day)}
      </TableCell>
      <TableCell>
        <TextField
          id="startTime"
          type="time"
          defaultValue="09:00"
        />
      </TableCell>
      <TableCell>
        <TextField
          id="endTime"
          type="time"
          defaultValue="17:30"
        />
      </TableCell>
      <TableCell>
        {/* <Select
          labelId="label-operation1"
          id="operation1"
          value={"1"}
        >
          {operationData?.OperationList.map((operationItem) => (
            <MenuItem 
              key={"key-operation1-" + operationItem.operation_id} 
              value={operationItem.operation_id}
              >
              {operationItem.operation_name}
            </MenuItem>
          ))}
        </Select> */}
      </TableCell>
      <TableCell>
        <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
      </TableCell>
      <TableCell>
        {/* <Select
          labelId="label-operation1"
          id="operation1"
          value={"2"}
        >
          {operationData?.OperationList.map((operationItem) => (
          <MenuItem 
            key={"key-operation1-" + operationItem.operation_id} 
            value={operationItem.operation_id}
            >
            {operationItem.operation_name}
          </MenuItem>
          ))}
        </Select> */}
      </TableCell>
      <TableCell>
        <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
      </TableCell>
    </TableRow>
  )
}

export default DailyRowComponents;
```

DailyRowComponentsの引数にPropsを指定し、コンポーネント自体に引数をうけとるようにしています。

Selectをコメントアウトしているのは、この後書き換えるためです。


### コンポーネントの呼び出し


`pages/main/[employees_id].tsx`からコンポーネントを呼び出すよう、以下のように編集します。


```pages/main/[employees_id].tsx
...
            <TableBody>
              {calenderDays?.CalendarList.sort((n1, n2) => (n2.day < n1.day ? 1 : -1))
                .map((calenderDay) => (
                  <DailyRowComponents
                    yearMonth={calenderDay.year_month} 
                    day={calenderDay.day}
                    key={calenderDay.day}
                  />  
              ))}
            </TableBody>
...
```

Propsに指定した引数が指定できるようになっています。keyはmapの中で使用するため、ユニークになるものを指定します。

# 共有する情報の受け渡し

Propsで年と月、日を受け渡すようにしました。作業内容は全てのコンポーネントで共通で使用されます。共通で使用する情報はuseContextという仕組みで情報を共有します。

## 情報の格納

まずは共通して使う情報を格納します。`pages/main/[employees_id].tsx`を以下の様に編集します。MainPageの外側に追加するように編集してください。


```pages/main/[employees_id].tsx
import {
  createContext
} from "react";

type ContextType = {
  operationData:GetOperationListQuery | undefined
  employees_id:number
  userName?:string
  department_id?:number
  departmentName?:string
}


export const MainContext = createContext<ContextType>(
  {
    operationData:undefined,
    employees_id:0,
    userName:"",
    department_id:0,
    departmentName:""
  }
);
```

createContextを使用して共通して使用する情報をコンテキストに格納します。MainContextをexportして、他のコンポーネントでも使用できるようにします。
格納する値が複雑になるので、型を定義しcreateContext呼び出し時の引数にデフォルト値を格納しています。

次に、実際にコンテキストに格納する値を定義します。MainPageのreturn直前に以下を追加します。


```pages/main/[employees_id].tsx
  const contextValues = {
    operationData:operationData,
    employees_id:Number(employees_id),
    userName:userName,
    department_id:employeesData?.Employees?.department_id,
    departmentName:departmentName
  }
```

実際にバックエンドから取得した値を格納しています。


最後に、各コンポーネントからコンテキストが使えるようにします。Providerを使い、その配下（タグの中にある）コンポーネントから
コンテキストに格納した値にアクセスできるようにします。

```pages/main/[employees_id].tsx
            <MainContext.Provider value={contextValues}>
              <TableBody>
                {calenderDays?.CalendarList.sort((n1, n2) => (n2.day < n1.day ? 1 : -1))
                  .map((calenderDay) => (
                    <DailyRowComponents
                      yearMonth={calenderDay.year_month} 
                      day={calenderDay.day}
                      key={calenderDay.day}
                    />  
                ))}
              </TableBody>
            </MainContext.Provider>
```



## 情報の取得

コンポーネントから、コンテキストの情報を取得します。`components/DailyRowComponents.ts`のDailyRowComponentsの中に以下を追加します。



```components/DailyRowComponents.tsx
...
  const { operationData } = useContext(MainContext);
...
```

useContextを使い先ほどexportしたMainContextを通じて情報を取得します。そのあと、コメントアウトしたSelectのコメントを外します。

これでコンテキストを通じて情報のやりとりをコンポーネント同士で行うことができました。