import { Button } from '@mui/material'
import React, {useEffect} from 'react'
import { useTheme } from "@mui/material/styles";

const CommonButton = ({children}) => {
    const theme = useTheme();

    const ButtonStyles = {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
      borderRadius: theme.spacing(2),
      textTransform: "none",
      fontWeight: "bold",
      fontSize:'1rem',
      py: theme.spacing(1),
      px: theme.spacing(2),
    };

    useEffect(() => {
      console.log(theme);
      console.log(theme.palette.primary.main);
    }, [])

  return <Button sx={ButtonStyles}>{children}</Button>;
}

export default CommonButton