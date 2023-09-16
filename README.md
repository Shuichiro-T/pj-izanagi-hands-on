# 概要
バックエンドとフロントエンドを連携させて、取得したデータを画面に反映させるステップです。前ステップではCalendarテーブルからデータを取得して画面に表示させましたが、
今ステップでは、Department、Employeesの情報を取得して画面に表示させます。

# ここで構築する内容
 - テストデータの作成（Department、Employees、Operation）
 - graphqlファイルからフロントで呼び出すよう関数の生成（Department、Employees、Operation）
 - フロントの画面より関数を呼び出し、バックエンドのデータを取得する。

# テストデータの作成

http://localhost:3100/graphqlへアクセスしPlaygroudを使用してテストデータを作成します。

## Departmentの作成

以下のmutationを実行し、Departmentのデータを作成します。

```graphql
mutation {
  CreateDepartment(data:{
    department_id:1
    department_name:"組織１"
  }) {
    department_id
  }
}
```

```graphql
mutation {
  CreateDepartment(data:{
    department_id:2 
    department_name:"組織２"
  }) {
    department_id
  }
}
```

## Employeesの作成

以下のmutationを実行し、Employeesのデータを作成します。

```graphql
mutation {
  CreateEmployees(data:{
    employees_id:1
    employees_name:"テストユーザ１"
    department:{
      connect:{
        department_id:1
      }
    }
  }) {
    employees_id
  }
}
```

```graphql
mutation {
  CreateEmployees(data:{
    employees_id:2
    employees_name:"テストユーザ２"
    department:{
      connect:{
        department_id:2
      }
    }
  }) {
    employees_id
  }
}
```


```graphql
mutation {
  CreateEmployees(data:{
    employees_id:3
    employees_name:"テストユーザ３"
    department:{
      connect:{
        department_id:1
      }
    }
  }) {
    employees_id
  }
}
```

EmployeesはDepartmentを外部キー参照しているので、入れ子になってデータを入れる必要があります。
## Operationの作成

以下のmutationを実行し、Operationのデータを作成します。

```graphql
mutation {
  CreateOperation(data:{
    operation_id:1
    operation_name:"作業１"
  }) {
    operation_id
  }
}
```

```graphql
mutation {
  CreateOperation(data:{
    operation_id:2
    operation_name:"作業２"
  }) {
    operation_id
  }
}
```

```graphql
mutation {
  CreateOperation(data:{
    operation_id:3
    operation_name:"作業３"
  }) {
    operation_id
  }
}
```

# graphqlファイルの作成

frontendフォルダでバックエンドを呼び出すためのgraphqlファイルを作成します。ファイルは全て`graphql`フォルダ配下
に作成します。

## Departmentを取得するためのgraphqlファイル

Departmentのデータはは一件取得すればよいので、GraphQLのDepartmentを使用します。
`getDepartment.graphql`ファイルを作成し、以下のように編集します。


```graphql/getDepartment.graphql
query getDepartment($where:departmentWhereUniqueInput!){
  Department(where:$where) {
    department_id
    department_name
  }
}
```

## Employeesを取得するためのgraphqlファイル

Employeesのデータも一件取得すればよいので、GraphQLのEmployeesを使用します。
`getEmployees.graphql`ファイルを作成し、以下のように編集します。


```graphql/getEmployees.graphql
query getEmployees($where:employeesWhereUniqueInput!){
  Employees(where:$where) {
    employees_id
    employees_name
    department_id
  }
}
```

## Operationを取得するためのgraphqlファイル

Operationのデータは複数取得する必要があるので、GraphQLのOperationListを使用します。
`getOperationList.graphql`ファイルを作成し、以下のように編集します。


```graphql/getOperationList.graphql
query getOperationList($where:operationWhereInput!) {
  OperationList(where:$where) {
    operation_id
    operation_name
  }
}
```

## コードの生成

以下のコマンドを使い、graphqlファイルからコードを生成します。

```
yarn generate
```

`@generated/graphql.ts`に関数が追加されます。


# ユーザの情報をバックエンドから取得して画面に反映させる

ここからはフロントエンドからバックエンドを呼び出して画面へ反映させます。

## ユーザ名の取得

`pages/main/[employees_id].tsx`を以下のように編集してバックエンドから名前を取得し、画面に表示させるようにします。


```pages/main/[employees_id].tsx
import { useGetCalenderListQuery, useGetEmployeesQuery } from "../../@generated/graphql";
...

  //ユーザ情報を取得
  const {data: employeesData, isLoading:isLoadingEmployees} = useGetEmployeesQuery (
    gqlClient,
    {
      where: {
        employees_id: Number(employees_id)
      }
    }
  )
  const userName = employeesData?.Employees?.employees_name
...
          <Grid item md={4}>
            <TextField
              label="名前"
              defaultValue={"名前"}
              value={userName}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
```

はじめに先ほど作成した関数を呼び出してバックエンドへURLから取得したIDを使用して、ユーザ名を取得します。
取得したユーザ名をTextfiledのvalueに設定し、表示しています。

### パスパラメータ取得を同期化する

NextJSのnext/routerを使ってパスパラメータを取得していますが、タイミングによってうまく値が取得できません。

`pages/_app.tsx`を以下のように編集します。

```pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

MyApp.getInitialProps = async () => ({ pageProps: {} })

export default MyApp
```

## 組織の取得

`pages/main/[employees_id].tsx`を以下のように編集して、組織を取得するようにします。ユーザの時とほぼ同じ修正になります。


```pages/main/[employees_id].tsx
import { useGetCalenderListQuery, useGetDepartmentQuery, useGetEmployeesQuery } from "../../@generated/graphql";
...
  //所属情報を取得
  const {data:deparmentData,isLoading:isLoadingDepartment} = useGetDepartmentQuery (
    gqlClient,
    {
      where: {
        department_id: employeesData?.Employees?.department_id
      }
    },
    {
      enabled: !isLoadingEmployees
    }
  )
  const departmentName = deparmentData?.Department?.department_name
...
            <TextField
              label="所属"
              defaultValue={"所属"}
              value={departmentName}
              InputProps={{
                readOnly: true,
              }}
            />
```

バックエンドから取得したdepartment_idを用いて、バックエンドから組織名を取得して画面に表示しています。

# 実際に画面を確認する

フロントとバックを起動した後、ブラウザで[http://localhost:3000/main/1](http://localhost:3000/main/1)へアクセスして画面を確認します。うまく連携できていれば、ユーザ情報の組織と名前が表示されています。

表示されるデータは先ほど作成したテストデータの内容になります。URLの1を2,3に変更すると表示される値が変わります。

