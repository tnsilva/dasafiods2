import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface DetailBarProps {
  textButtonNew?: string;

  showButtonNew?: boolean;
  showButtonReturn?: boolean;
  showButtonDelete?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndReturn?: boolean;

  btnNewLoading?: boolean;
  btnReturnLoading?: boolean;
  btnDeleteLoading?: boolean;
  btnSaveLoading?: boolean;
  btnSaveAndReturnLoading?: boolean;

  onClickNew?: () => void;
  onClickReturn?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
  onClickSaveAndReturn?: () => void;
}

export const DetailBar: React.FC<DetailBarProps> = ({
  textButtonNew = "New",

  showButtonNew = true,
  showButtonReturn = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndReturn = false,

  btnNewLoading = false,
  btnReturnLoading = false,
  btnDeleteLoading = false,
  btnSaveLoading = false,
  btnSaveAndReturnLoading = false,

  onClickNew,
  onClickReturn,
  onClickDelete,
  onClickSave,
  onClickSaveAndReturn,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {showButtonSave && !btnSaveLoading && (
        <Button
          disableElevation
          variant="contained"
          color="primary"
          onClick={onClickSave}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Save
          </Typography>
        </Button>
      )}

      {btnSaveLoading && <Skeleton width={110} height={60} />}

      {showButtonSaveAndReturn &&
        !btnSaveAndReturnLoading &&
        !smDown &&
        !mdDown && (
          <Button
            disableElevation
            variant="outlined"
            color="primary"
            onClick={onClickSaveAndReturn}
            startIcon={<Icon>save</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Save and return
            </Typography>
          </Button>
        )}

      {btnSaveAndReturnLoading && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {showButtonDelete && !btnDeleteLoading && (
        <Button
          disableElevation
          variant="outlined"
          color="primary"
          onClick={onClickDelete}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Delete
          </Typography>
        </Button>
      )}

      {btnDeleteLoading && <Skeleton width={110} height={60} />}

      {showButtonNew && !btnNewLoading && !smDown && (
        <Button
          disableElevation
          variant="outlined"
          color="primary"
          onClick={onClickNew}
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textButtonNew}
          </Typography>
        </Button>
      )}

      {btnNewLoading && !smDown && <Skeleton width={110} height={60} />}

      {showButtonReturn &&
        (showButtonNew ||
          showButtonDelete ||
          showButtonSave ||
          showButtonSaveAndReturn) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {showButtonReturn && !btnReturnLoading && (
        <Button
          disableElevation
          variant="outlined"
          color="primary"
          onClick={onClickReturn}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Return
          </Typography>
        </Button>
      )}

      {btnReturnLoading && <Skeleton width={110} height={60} />}
    </Box>
  );
};
