import { useRouter } from "next/router";
import type { NextPage } from "next";
import Container from '@mui/material/Container';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

import { useGetCalenderListQuery } from "../../@generated/graphql";
import createGqlClient from "../../utils/createGqlClient";


const MainPage: NextPage = () => {
  const router = useRouter();
  // パスパラメータから値を取得
  const { employees_id } = router.query;

  
  //GraphQL用クライアントの作成
  const gqlClient = createGqlClient()

  //ユーザ情報を暫定的に定義
  const userName = "ユーザ名１"
  const departmentName = "〇〇〇部"

  // 今月のカレンダー日付、暫定的に定義
  const {data: calenderDays, isLoading:isLoadingCalender} = useGetCalenderListQuery(
    gqlClient,
    {
      where: {
        year_month: {
          equals: "202211" 
        },
      },
    }
  )

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
      <Paper>
        <Typography variant="subtitle1" component="div">
          就業情報
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>日付</TableCell>
                <TableCell>曜日</TableCell>
                <TableCell>開始時間</TableCell>
                <TableCell>終了時間</TableCell>
                <TableCell>作業内容１</TableCell>
                <TableCell>作業内容１時間</TableCell>
                <TableCell>作業内容２</TableCell>
                <TableCell>作業内容２時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calenderDays?.CalendarList.sort((n1, n2) => (n2.day < n1.day ? 1 : -1))
                .map((calenderDay) => (
                  <TableRow key={calenderDay.day}>
                    <TableCell>
                    {calenderDay.year_month.slice(0,4) + "年" + 
                      calenderDay.year_month.slice(4,6) + "月" + 
                      calenderDay.day + "日"}
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" inputProps={{maxLength: 10, size:10}}></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" inputProps={{maxLength: 10, size:10}}></TextField>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" inputProps={{maxLength: 5, size:5}}></TextField>
                    </TableCell>
                  </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  )
};

export default MainPage;