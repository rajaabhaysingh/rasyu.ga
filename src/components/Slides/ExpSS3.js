import React from "react";

// styling
import { makeStyles, Grid } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

import Divider from "../Common/Divider";

// assets
import placeholder from "../../assets/placeholder.png";
import img1 from "../../assets/a2z/screen-1.jpg";
import img2 from "../../assets/a2z/screen-2.jpg";
import img3 from "../../assets/a2z/screen-5.jpg";
import img4 from "../../assets/a2z/screen-6.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    boxSizing: "border-box",
    padding: 128,
    [theme.breakpoints.down("sm")]: {
      padding: "32px 32px 48px 32px",
    },
  },
  container: {
    // width: "calc(100% - 256px)",
    width: "100%",
  },
  itemIntro: {
    fontWeight: 900,
    color: theme.palette.common.white,
    fontSize: "1.5rem",
    padding: 32,
    boxSizing: "border-box",
  },
  item: {
    width: "100%",
    padding: 8,
  },
  itemLast: {
    display: "flex",
    flexDirection: "column",
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      order: -1,
    },
  },
  image: {
    // height: "100%",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
}));

const Intro = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <Grid container className={cls.container}>
        <Grid item xs={6} sm={6} md={2} lg={2} className={cls.item}>
          <img src={img1} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2} className={cls.item}>
          <img src={img2} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2} className={cls.item}>
          <img src={img3} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2} className={cls.item}>
          <img src={img4} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} className={cls.itemLast}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Android App Dev
          </div>
          <Divider />
          <div className={clsx(globalCls.txtMdWhite, "mar_t-16")}>
            E-commerce app for selling customized products.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
