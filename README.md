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

# yarnのインストール
以下コマンドを実行する。yarnのコマンドラインインターフェース（CLI）が使えるようになる。
```
npm install -g yarn
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

# Prisma ClientのインストールとClientの作成

以下のコマンドを実行し、Prisma Clientのインストールを行う。

```
yarn add @prisma/client
```

インストール後、Prisma Clientを以下コマンドを実行して作成する。

```
yarn prisma generate
```

Prisma ClientはPrismaが`schema.prisma`を元に自動作成したテーブルへアクセスするためのAPIです。


# GraphQL用パッケージのインストール

以下のコマンドを実行して、GraphQL用パッケージのインストールを行う。
```
yarn add @nestjs/graphql @nestjs/apollo graphql apollo-server-express
yarn add class-transformer
yarn add prisma-nestjs-graphql --dev
```

GraphQLはクエリ言語で、バックエンドとフロントエンドを連携させるプロトコルとして使用しています。
GraphQLを用いると、呼び出したいバックエンドの機能が返す型やパラメータの型と構造を連携でき、より型安全な開発が行えるようになります。

# サービスとモジュールの作成

これまでで、バックエンドアプリケーションがDBに接続する準備と、接続するためのClient（API）の作成が終わりました。
ここから、フロントエンドからアクセスできるようにするためのGraphQLを作成します。

ここではNestJSのサービスとモジュールを作成します。

以下のnestコマンドで作成します。

```
nest g mo prisma
nest g s prisma
```

作成されるファイルは以下の通り。`app.module.ts`にモジュールが自動でインポートされます。

|  ファイル名  |  役割  |
| ----------- | --------- |
|  prisma/prisma.module.ts  |  NestJSからPrismaを呼ぶようのモジュール  |
|  prisma/prisma.service.spec.ts  |  prisma.serviceのテスト  |
|  prisma/prisma.service.ts  |  NestJSからPrismaを呼ぶようのサービス  |


# prisma.serviceの編集

`src/prisma/prisma.service.ts`を以下の通りに編集を行う。

```TypeScript
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: ['info', 'warn', 'error'] });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
```


# schema.prismaの編集

`prisma/schema.prisma`の定義を以下の文を追加する。

```json
generator nestgraphql {
  provider                        = "node node_modules/prisma-nestjs-graphql"
  output                          = "../src/@generated/prisma-nestjs-graphql"
  emitSingle                      = "true"
}
```


追加した定義に従い、以下コマンドでClientを作成する。

```
yarn prisma generate
```


# リゾルバとサービスを作成する

## サービスの作成
`src/database/calendar`ディレクトリを作成し配下に`calendar.service.ts`を作成し、以下の通りにする。


```TypeScript
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CalendarService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: Prisma.calendarFindUniqueArgs) {
    return this.prisma.calendar.findUnique(args);
  }

  async findFirst(args: Prisma.calendarFindFirstArgs) {
    return this.prisma.calendar.findFirst(args);
  }

  async findMany(args: Prisma.calendarFindManyArgs) {
    return this.prisma.calendar.findMany(args);
  }

  async create(args: Prisma.calendarCreateArgs) {
    return this.prisma.calendar.create(args);
  }

  async update(args: Prisma.calendarUpdateArgs) {
    return this.prisma.calendar.update(args);
  }

  async delete(args: Prisma.calendarDeleteArgs) {
    return this.prisma.calendar.delete(args);
  }
}
```

サービスで先ほど生成したClientを呼び出し、DB更新処理を実装する。実装した処理はCALENDARテーブルのCRUD機能、Rに関してはPKで取得する処理、検索条件を指定して複数件数取得する処理。

## リゾルバに作成

同様に、`calendar.resolver.ts`を作成し、以下のように編集を行う。

```TypeScript
import {
    CreateOnecalendarArgs,
    DeleteOnecalendarArgs,
    FindFirstcalendarArgs,
    FindManycalendarArgs,
    FindUniquecalendarArgs,
    calendar,
    UpdateOnecalendarArgs,
} from '../../@generated/prisma-nestjs-graphql/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CalendarService } from './calendar.service';

@Resolver()
export class CalendarResolver {
  constructor(private readonly service: CalendarService) {}

  @Query(() => calendar, { name: 'Calendar', nullable: true })
  async calendar(@Args() args: FindUniquecalendarArgs) {
    return this.service.findUnique({ ...args });
  }

  @Query(() => calendar, { name: 'CalendarFirst', nullable: true })
  async calendarFirst(@Args() args: FindFirstcalendarArgs) {
    return this.service.findFirst({ ...args });
  }

  @Query(() => [calendar], { name: 'CalendarList' })
  async calendarList(@Args() args: FindManycalendarArgs) {
    return this.service.findMany({ ...args });
  }

  @Mutation(() => calendar, { name: 'CreateCalendar' })
  async createCalendar(@Args() args: CreateOnecalendarArgs) {
    return this.service.create({ ...args });
  }

  @Mutation(() => calendar, { name: 'UpdateCalendar' })
  async updateCalendar(@Args() args: UpdateOnecalendarArgs) {
    return this.service.update({ ...args });
  }

  @Mutation(() => calendar, { name: 'DeleteCalendar' })
  async deleteCalendar(@Args() args: DeleteOnecalendarArgs) {
    return this.service.delete({ ...args });
  }
}
```

リゾルバで先ほど作成したサービスとGraphQLとして提供するサービスのバインドを行う。ここでバインドしたサービスがGraphQLとして提供される。

# モジュールを作成する

`src/database`ディレクトリ配下に`database_module.ts`を作成し、以下の通りにする。


```TypeScript
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CalendarResolver } from './calendar/calendar.resolver';
import { CalendarService } from './calendar/calendar.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CalendarResolver,
    CalendarService
  ],
  exports: [CalendarService],
})
export class DatabaseModule {}
```

このモジュールで先ほど作成したサービスとリゾルバをNestJSから呼び出せるようにします。


# PrismaServiceのエクスポート

`src/prisma/prisma.module.ts`を以下のように編集する。


```TypeScript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

# GraphQLModuleの追加とDatabaseModuleのインポートを行う。

`src/app.module.ts`を以下のように編集する。

```TypeScript
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database_module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground:true,
      autoSchemaFile: join(process.cwd(), 'schema.graphql'),
    }),
    PrismaModule, 
    DatabaseModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

AppModuleにGraphQLを追加し、NestJSでGraphQLを使用できるように実装します。先ほど作成したDatabaseModuleモジュールもインポートし、NestJSから使用できるようにします。

# prettierが改行に関してエラーを出す場合の対処法。

`.package.json`のscriptsにある`lint`の設定を以下のように編集する。

```json
"lint": "eslint \"{src,apps,libs,test}/**/*.ts\" \"{src,apps,libs,test}/**/**/*.ts\" --fix",
```
その後以下コマンドを使用して、改行コードを変換する。
```
yarn lint
```