import React from "react";

// styling
import { makeStyles, Grid } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

import Divider from "../Common/Divider";
import { openImage } from "../../helpers";

// assets
import placeholder from "../../assets/placeholder.png";
import img1 from "../../assets/graphics/i1.jpg";
import img2 from "../../assets/graphics/p1.jpg";
import img3 from "../../assets/graphics/p2.jpg";

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
        <Grid item xs={12} sm={12} md={2} lg={2} className={cls.item}>
          <img
            onClick={() => openImage(img2)}
            src={img2}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} className={cls.item}>
          <img
            onClick={() => openImage(img1)}
            src={img1}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className={cls.item}>
          <img
            onClick={() => openImage(img3)}
            src={img3}
            className={cls.image}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} className={cls.itemLast}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Graphic designs...
          </div>
          <Divider />
          <div className={clsx(globalCls.txtMdWhite, "mar_t-16")}>
            Well, it's all about posters, banners, cards, covers, ... and the
            list goes on...
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
