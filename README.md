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

# ユーザ情報表示エリアの実装

ユーザ情報を表示するエリアを実装します。MUIのコンポーネントを使用して実装していきます。

`[employees_id].tsx`を以下のように編集します。

```TypeScript
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Container from '@mui/material/Container';
import { Grid, Paper, TextField, Typography } from "@mui/material";


const MainPage: NextPage = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const { employees_id } = router.query;


  //ユーザ情報を暫定的に定義
  const userName = "ユーザ名１"
  const departmentName = "〇〇〇部"

  return(
    <Container>
      <Typography variant="h3" component="div">
        就業管理登録画面
      </Typography>

      <Paper>
        <Typography variant="subtitle1" component="div">
          ユーザ情報
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <TextField
              label="所属"
              defaultValue={departmentName}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              label="名前"
              defaultValue={userName}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
};

export default MainPage;
```

使用しているMUIのパーツは以下の通りです。


|  コンポーネント名称  |  説明  | 公式ページへのリンク  |
| ---- | ---- | ---- |
|  Container  |  Containerは各コンポーネントを水平に配置するレイアウトです。よく使われるレイアウトです。  | [こちら](https://mui.com/material-ui/react-container/)
|  Typography  |  Typographyは強調表示をするコンポーネントです。  |[こちら](https://mui.com/material-ui/react-typography/)
|  Paper  |  Paperコンポーネントは画面上に紙のようなレイアウト表現を可能にします。  |[こちら](https://mui.com/material-ui/react-paper/)
|  Grid  |  Gridコンポーネントは格子状のレイアウトを実装します。Gridコンポーネントを使用すると画面サイズに対応したレイアウトを提供します。  |[こちら](https://mui.com/material-ui/react-grid/)
|  TextField  |  TextFieldコンポーネントは入力可能なテキストフィールドです。  |[こちら](https://mui.com/material-ui/react-text-field/)

