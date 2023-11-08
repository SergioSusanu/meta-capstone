import { useTheme } from "@mui/material/styles";

const ReservationFormStyles = () => {
      const theme = useTheme();

  return ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    width: 380,
    marginLeft: "auto",
    marginRight: "auto",
  })
}

export default ReservationFormStyles