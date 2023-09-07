# 概要
フロントエンドを構築するステップです。

# ここで構築する内容
 - Next.jsのインストール
 - Next.jsプロジェクトの作成

# インストール
npm install --global @create-next-app/core

# プロジェクトの作成

`frontend`フォルダに移動する。
```
cd　.\frontend\
```

プロジェクトはからのフォルダに作成する必要があるため、`.gitkeep`を削除する。

以下のコマンドを実行してNext.jsプロジェクトを作成する。
```
npx create-next-app . --typescript
```

エラーが出た場合、JavaScriptでプロジェクトが作成されてしまった場合、以下を実行する。

## 対処１：npx配下のpolyfills.jsの修正

ローカルにあるnpxフォルダを検索する。

見つかったフォルダの下にある`node_modules\npm\node_modules\graceful-fs`フォルダを開く。

`polyfills.js`を開き、62～64行目をコメントアウトする。

```JavaScript
  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  //  fs.stat = statFix(fs.stat)
  //  fs.fstat = statFix(fs.fstat)
  //  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)
```

再度、コマンドを実行してプロジェクトを作成する。

上記の対処１を実施してもJavaScriptでプロジェクトが作成されてしまった場合、対処２を試す。

## 対処２：@latestを使用する

frontendフォルダを削除後、下記コマンドを実行してプロジェクトを作成する。

```
npx create-next-app@latest
```

各種設定は下記の通り

√ What is your project named? ... frontend
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use src/ directory? ... No
√ Would you like to use App Router? (recommended) ... No
√ Would you like to customize the default import alias? ... No


## 作成されたもの

[Next.js](https://nextjs.org/)はReactベースのフレームワークです。サーバーサードレンダリングの機能など、Reactをさらに便利に使うための機能があります。

プロジェクトの作成で作られたものは以下の通り。

|  ファイル名・フォルダ名  |  役割  |
| ----------- | --------- |
|  pages  |  画面を構成するソース・APIを構成するソースを置くフォルダ、ファイル名・フォルダ構成がルーティングされる  |
|  public  |  静的なファイルを置くフォルダ  |
|  styles |  画面のデザインを決めるスタイルシートを置くフォルダ  |
|  .eslintrc  |  ソースを静的に解析する定義ファイル  |
|  next-env.d.ts  |  Next.js用のファイル、削除や編集は行わない  |
|  next.config.js  |  Next.JSの設定を行うソース  |


# Next.jsの起動

Next.jsを起動してみます。以下のコマンドを実行します。

```
yarn dev
```

Next.jsが起動したら[http://localhost:3000](http://localhost:3000)へアクセスします。「Welcome to Next.js!」というページが表示されていれば正常に起動しています。
このページの内容は `pages/index.tsx`の内容になっています。

次に[http://localhost:3000/api/hello](http://localhost:3000/api/hello)へアクセスします。「{"name":"John Doe"}」が表示されます。

このページの内容は`pages/api/hello.ts`の内容になっています。`pages`配下のソースはフォルダ構成とともにNext.jsにルーティングされ、公開されます。