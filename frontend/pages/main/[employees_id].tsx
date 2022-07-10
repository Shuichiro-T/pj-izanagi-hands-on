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