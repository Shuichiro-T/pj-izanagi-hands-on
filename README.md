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