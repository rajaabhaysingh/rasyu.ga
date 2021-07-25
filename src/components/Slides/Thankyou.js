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
      padding: "32px 32px 48px 32px",
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
  mainTxtContainer: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  mainTxtWhite: {
    color: theme.palette.common.white,
    fontWeight: 900,
    fontSize: "7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
    },
    textAlign: "center",
  },
  mainTxtPri: {
    marginLeft: 32,
    color: theme.palette.primary.main,
    fontWeight: 900,
    fontSize: "7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      marginLeft: 0,
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
    fontSize: "6rem",
    color: "#ffffff22",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Intro = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <div className={cls.containerWrapper}>
        <div className={cls.container}>
          <div className={cls.mainTxtContainer}>
            <div className={cls.mainTxtWhite}>THANK</div>
            <div className={cls.mainTxtPri}>YOU</div>
          </div>
          <i className={clsx("fas fa-chevron-up mar-t-32", cls.icon)}></i>
          <a className={cls.txtWhite} href="mailto:rajaabhaysingh233@gmail.com">
            Contact me :)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
