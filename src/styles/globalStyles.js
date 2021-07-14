import { makeStyles } from "@material-ui/core";

const useGlobalStyles = makeStyles((theme) => ({
  headerWhite: {
    fontWeight: 900,
    color: theme.palette.common.white,
    fontSize: "2rem",
  },
  txtMdWhite: {
    fontWeight: 200,
    color: theme.palette.common.white,
    fontSize: "1rem",
  },
}));

export default useGlobalStyles;
