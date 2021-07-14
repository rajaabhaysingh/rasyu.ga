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
  topic: {
    fontWeight: 500,
    color: theme.palette.common.white,
    fontSize: "1.2rem",
  },
}));

export default useGlobalStyles;
