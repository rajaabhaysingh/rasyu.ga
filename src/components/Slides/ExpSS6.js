import React from "react";

// styling
import { makeStyles, Grid } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

import Divider from "../../components/Common/Divider";
import { openImage } from "../../helpers";

// assets
import placeholder from "../../assets/placeholder.png";
import img1 from "../../assets/ww/SS1.png";
import img2 from "../../assets/ww/SS4.png";
import img3 from "../../assets/ww/SS3.png";
import img4 from "../../assets/ww/SS2.png";
import img5 from "../../assets/ww/SS5.png";

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
          Snippets of the website...
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img
            onClick={() => openImage(img1)}
            src={img1}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img
            onClick={() => openImage(img2)}
            src={img2}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img
            onClick={() => openImage(img3)}
            src={img3}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img
            onClick={() => openImage(img4)}
            src={img4}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={cls.item}>
          <img
            onClick={() => openImage(img5)}
            src={img5}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={cls.itemLast}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Job portal for semi-organised sector
          </div>
          <Divider />
          <div className={clsx(globalCls.txtMdWhite, "mar_t-16")}>
            A portal to connect demand and supply of all kinds of
            unskilled/semi-skilled workers in a local setup.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
