import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Avatar,
  useTheme,
  Container,
  Paper,
} from "@mui/material/";
import { BaseLayout } from "../../shared/layouts";
import { ListBar } from "../../shared/components";
import { useEffect, useState } from "react";

import { api } from "../../shared/services/api/axiosConfig";
import { UnicornDataProps } from "../../shared/components/crud/unicornService";

export const HomePage = () => {
  const theme = useTheme();
  const [unicorns, setUnicorns] = useState<UnicornDataProps[] | any>([]);

  useEffect(() => {
    api
      .get("unicorns")
      .then((res) => {
        setUnicorns(res.data);
      })
      .catch((err) => {
        console.error("Ops! " + err);
      });
  }, []);

  return (
    <BaseLayout title={"Home"} listBar={<ListBar showSearchInput />}>
      <Container maxWidth="sm" component={Paper}>
        <Grid
          display="flex"
          direction="row"
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={8}>
            <TableContainer>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Logo</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Since</TableCell>
                    <TableCell align="right">Colour</TableCell>
                    <TableCell align="right">City</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {unicorns.map((unicorn: UnicornDataProps) => (
                    <TableRow
                      key={unicorn.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar
                          // src={unicorn.logo}
                          sx={{
                            height: theme.spacing(8),
                            width: theme.spacing(8),
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">{unicorn.name}</TableCell>
                      <TableCell align="right">{unicorn.since}</TableCell>
                      <TableCell align="right">{unicorn.colour}</TableCell>
                      <TableCell align="right">{unicorn.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  );
};
