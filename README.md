# 概要
メインの就業情報を入力する画面を実装するステップです。

# ここで構築する内容
 - MUIのインストール
 - 画面の作成

# MUIのインストール
以下コマンドを実行してMUIをインストールする。

`yarn add @mui/material @emotion/react @emotion/styled`


# MUI

[MUI](https://mui.com/core/)はMaterial Designを実装したReactのコンポーネントです。使用するとまとまった画面デザインが実現できます。

# メインページ（就業管理入力画面）ファイルを作成する。

`pages`配下に`main`フォルダを作成し、メインページとなる`[employees_id].tsx`ファイルを作成します。作成したファイルは以下のように編集します。

```TypeScript
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const MainPage: NextPage = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const { employees_id } = router.query;

  return(
    <Container>
      <Box>{employees_id}</Box>
    </Container>
  )
};

export default MainPage;
```

ファイル名に[]がついている理由はパスパラメータを受け取るためです。パスパラメータを変数employees_idへ格納し画面に表示しています。
# 動作確認

以下コマンドを実行してNext.jsを起動します。

`yarn dev`
起動したら、ブラウザから[http://localhost:3000/main/pathparam](http://localhost:3000/main/pathparam)へアクセスします。「pathparam」という画面が表示できていれば正常です。

## @emotion/styledモジュールが無い場合の対処

画面にアクセスした際、@emotion/styledモジュールが足りないというエラーが出た場合、以下を実行してモジュールを追加します。

`yarn add @emotion/styled`

