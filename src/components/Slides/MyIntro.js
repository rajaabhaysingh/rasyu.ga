import React from "react";
import clsx from "clsx";

// assets
import intro from "../../assets/intro.jpg";

// styling
import { Grid, makeStyles } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";

// comp
import Divider from "../../components/Common/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    boxSizing: "border-box",
    padding: "0 128px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 32px",
      minHeight: "80vh",
    },
  },
  left: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  imgLeft: {
    width: "100%",
    height: "100%",
    minHeight: 420,
    objectFit: "cover",
    objectPosition: "center",
  },
  imgPara: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: 16,
    position: "absolute",
    bottom: 32,
    left: 32,
    maxWidth: "60%",
    fontWeight: 300,
    fontSize: "1rem",
  },
  right: {
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      order: -1,
    },
  },
}));

const MyIntro = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <Grid container spacing={8}>
        <Grid item sm={12} md={6} className={cls.left}>
          <img src={intro} alt="" className={cls.imgLeft} />
          <div className={cls.imgPara}>
            Nisi cupidatat adipisicing nulla est officia quis voluptate nulla ad
            nostrud esse laboris. Laboris minim consequat sunt ex cupidatat ex
            ea adipisicing sint aliquip. Est mollit elit cupidatat voluptate id
            elit. Eiusmod ullamco qui nisi incididunt amet.
          </div>
        </Grid>
        <Grid item sm={12} md={6} className={cls.right}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Okay! Lemme introduce...
          </div>
          <Divider width="60%" />
          <p className={clsx(globalCls.txtMdWhite, "mar_t-32")}>
            Nisi cupidatat adipisicing nulla est officia quis voluptate nulla ad
            nostrud esse laboris. Laboris minim consequat sunt ex cupidatat ex
            ea adipisicing sint aliquip. Est mollit elit cupidatat voluptate id
            elit. Eiusmod ullamco qui nisi incididunt amet.
          </p>
          <p className={globalCls.txtMdWhite}>
            Nisi cupidatat adipisicing nulla est officia quis voluptate nulla ad
            nostrud esse laboris. Laboris minim consequat sunt ex cupidatat ex
            ea adipisicing sint aliquip. Est mollit elit cupidatat voluptate id
            elit. Eiusmod ullamco qui nisi incididunt amet.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyIntro;
