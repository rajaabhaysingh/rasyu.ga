import React from "react";

// styling
import { makeStyles, Grid } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

import Divider from "../../components/Common/Divider";

// assets
import placeholder from "../../assets/placeholder.png";
import img1 from "../../assets/gf/app.png";
import img2 from "../../assets/gf/pages.png";
import img3 from "../../assets/gf/cards.png";
import img4 from "../../assets/gf/create_card.png";
import img5 from "../../assets/gf/create_page.png";

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
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.itemIntro}>
          Snippets of my work as SDE intern.
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img1} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img2} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img3} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img4} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img src={img5} className={cls.image} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={cls.itemLast}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            GramFactory intern
          </div>
          <Divider />
          <div className={clsx(globalCls.txtMdWhite, "mar_t-16")}>
            CMS portal for automatic management of dynamic pages across multiple
            apps.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
