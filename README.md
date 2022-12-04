# 概要
画面に入力補助や見た目を入れるステップです。

# ここで構築する内容
 - 曜日を画面に表示するようにします
 - 時間の入力補助
 - 作業内容がドロップダウンで選択できるようにします

# 曜日を画面に表示

ここでは曜日を出力するようにします。

## 曜日を取得する関数の作成

まずは曜日を取得するための関数を作成します。`pages/main/[employees_id].tsx`に以下の関数を追加します。

```pages/main/[employees_id].tsx
  //曜日を取得する関数
  const getDayname = (yearMonth: string, day: string) => {
    const parameterDate = new Date(yearMonth.slice(0,4) + "/" + 
      yearMonth.slice(4,6) + "/" + 
      day)
    const dayNames = ['日','月','火','水','木','金','土']
    return dayNames[parameterDate.getDay()]
  }
```

バックエンドから取得した値をいったんDateオブジェクトに変換し、getDay()関数を呼び出し曜日の文字列へ変換しています。

## 表示部分へ関数を呼び出す。

表示箇所で関数を呼び出します。`pages/main/[employees_id].tsx`を以下のように編集します。


```pages/main/[employees_id].tsx
...
                    <TableCell>
                      {calenderDay.year_month.slice(0,4) + "年" + 
                        calenderDay.year_month.slice(4,6) + "月" + 
                        calenderDay.day + "日"}
                    </TableCell>
                    <TableCell>
                      {getDayname(calenderDay.year_month, calenderDay.day)}
                    </TableCell>
...
```

画面を確認すると今まで空白だった曜日に曜日が出力されています。