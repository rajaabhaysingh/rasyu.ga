import React from "react";

// styling
import { makeStyles } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: 128,
    [theme.breakpoints.down("sm")]: {
      padding: 32,
      minHeight: "80vh",
    },
  },
  containerWrapper: {
    flex: "1",
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      padding: 16,
    },
    boxSizing: "border-box",
    border: `1px dashed ${theme.palette.primary.main}`,
  },
  container: {
    backgroundColor: theme.palette.background.paperDark,
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 128,
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: 32,
    },
  },
  mainTxt: {
    color: theme.palette.primary.main,
    fontWeight: 900,
    fontSize: "7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
    },
    textAlign: "center",
  },
  txtWhite: {
    marginTop: 32,
    fontWeight: 100,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    color: theme.palette.common.white,
    textAlign: "center",
  },
  icon: {
    fontSize: "4rem",
    color: "#ffffff22",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Home = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <div className={cls.containerWrapper}>
        <div className={cls.container}>
          <div className={cls.mainTxt}>RAS YUGA</div>
          <i className={clsx("fas fa-chevron-up mar-t-32", cls.icon)}></i>
          <div className={cls.txtWhite}>The yuga of my professional life.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
