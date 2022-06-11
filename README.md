# 概要
バックエンド構築のステップです。

# ここで構築する内容
 - [NestJS](https://nestjs.com/)のインストール
 - NestJSプロジェクトの作成
 - [prisma](https://www.prisma.io/)のインストール

# NestJSのインストール
以下コマンドを実行する。NestJSのコマンドラインインターフェース（CLI）が使えるようになる。
```
npm install -g @nestjs/cli
```


# NestJSプロジェクトの作成
NestJSはNode.jsのサーバサイドフレームワークです。CLIを使いプロジェクトを作成します。

```
nest n backend -l TS -p yarn
```

## 動作確認
以下コマンド実行し、起動できるかを確認する。

```
cd backend
yarn run start
```

起動後、localhost:3000へアクセスし、「Hello World!」が表示されることを確認する。

## 生成されたもの

`./src`フォルダに4つのファイルが作成されている。作成されたファイルの役割は以下の通り。


|  ファイル名  |  役割  |
| ----------- | --------- |
|  app.controller.ts  |  Controllers、HTTPリクエストメソッドに紐づける処理を記述する  |
|  app.module.ts  |  Modules、使用するControllersやProvidersを指定する  |
|  app.service.ts  |  Providers、実際の処理を記述する  |
|  main.ts  |  NestJSを起動するためのファイル。起動時のポート番号等の設定をする  |

各役割は、こちらの[サイト](https://zenn.dev/morinokami/articles/nestjs-overview)をご参照ください。

# Prismaのインストール

以下コマンドを実行する。NestJSプロジェクトからPrismaが使えるようになる。
```
yarn add prisma --save-dev
```

# PrismaをDBへ接続してソースを生成する

PrismaはNode.jsとTypeScriptのためのORMツールです。

以下コマンドを実行して初期設定ファイルを生成します。
```
yarn prisma init
```

## 生成されたもの

`./backend`フォルダを基準として、ファイルが2つ作成されている。作成されたファイルの役割は以下の通り。


|  ファイル名  |  役割  |
| ----------- | --------- |
|  .env  |  環境変数を定義するファイル  |
|  prisma/schema.prisma  |  Prismaの定義を設定するファイル  |


# DB接続定義の編集と接続

`.env`ファイルを以下のように編集し、構築したDBへ接続できるようにする。DB構築を別の方法で実施した場合は、適宜定期を修正する。

```shell:.env
DATABASE_URL="postgresql://izanagi_db:password@localhost:5432/izanagi_db"
```

## DBに作成したテーブルからテーブル定義を取得する

以下のコマンドを実行し、PrismaとDBの接続、DBに存在するテーブルからPrismaのテーブル定義を取得する。

```
yarn prisma db pull
```


## 更新されたファイル

`prisma/schema.prisma`がDBのテーブル定義に基づき更新されています。