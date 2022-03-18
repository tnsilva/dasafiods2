import { ReactNode } from "react";
import {
  Box,
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAuthContext, useDrawerContext } from "../hooks";

interface BaseLayoutProps {
  title: string;
  listBar?: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  title,
  listBar,
}) => {
 
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  


  return (
    <Box height="100%" display="flex" flexDirection="column" gap={2}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipses"
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
        >
          {title}
        </Typography>
      </Box>

      {listBar && <Box>{listBar}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
