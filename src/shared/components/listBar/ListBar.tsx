import { Box, Button, Paper, TextField, useTheme, Icon } from "@mui/material";

import { Environment } from "../../environment";

interface ListBarProps {
  searchText?: string;
  showSearchInput?: boolean;
  onChangeText?: (newText: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  onClickNew?: () => void;
}

export const ListBar: React.FC<ListBarProps> = ({
  searchText = "",
  onChangeText,
  showSearchInput = false,
  onClickNew,
  newButtonText = "New",
  showNewButton = true,
}) => {
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
      {showSearchInput && (
        <TextField
          placeholder={Environment.SEARCH_INPUT}
          size="small"
          value={searchText}
          onChange={(e) => onChangeText?.(e.target.value)}
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={onClickNew}
            endIcon={<Icon>add</Icon>}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
