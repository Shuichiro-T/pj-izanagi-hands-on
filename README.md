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