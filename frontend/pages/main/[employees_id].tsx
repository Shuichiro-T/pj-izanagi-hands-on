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