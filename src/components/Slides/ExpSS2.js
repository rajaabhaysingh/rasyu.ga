import React from "react";

// styling
import { makeStyles, Grid } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

import Divider from "../Common/Divider";

// assets
import placeholder from "../../assets/placeholder.png";
import img1 from "../../assets/talentio/courses.png";
import img2 from "../../assets/talentio/users.png";
import img3 from "../../assets/talentio/content.png";
import img4 from "../../assets/talentio/cart.png";
import img5 from "../../assets/talentio/course.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
    padding: 16,
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
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img1} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img2} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img3} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.itemIntro}>
          Snippets of my work as SDE freelancer.
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={cls.itemLast}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Talentio freelance
          </div>
          <Divider />
          <div className={clsx(globalCls.txtMdWhite, "mar_t-16")}>
            LMS portal for both management and selling of academic/non-academic
            courses.
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img4} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img5} className={cls.image} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
