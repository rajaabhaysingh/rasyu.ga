import React from "react";
import clsx from "clsx";

// styling
import { Grid, makeStyles } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";

// comp
import Divider from "../../components/Common/Divider";

// assets
import talentio from "../../assets/talentio.png";
import gramfactory from "../../assets/gf.png";
import a2z from "../../assets/a2z.png";
import iiits from "../../assets/iiits.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  bgSecUp: {
    padding: 128,
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: 48,
      minHeight: "240px",
    },
    minHeight: "360px",
    width: "100%",
  },
  bgSecDown: {
    padding: "0 128px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 32px 16px 32px",
    },
    width: "100%",
    background: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
  },
  item: {
    background: theme.palette.primary.main,
    margin: 16,
    width: "100%",
    position: "relative",
    top: -80,
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  imgItem: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
  itemFooter: {
    position: "absolute",
    bottom: -18,
    background: theme.palette.background.dark,
    color: theme.palette.common.white,
    width: "80%",
    padding: "8px",
    boxSizing: "border-box",
    textAlign: "center",
    fontWeight: 900,
  },
}));

const Intro = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <div className={cls.bgSecUp}>
        <div className="fcol mar-auto" style={{ maxWidth: 360 }}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            I've worked with...
          </div>
          <Divider width="60%" />
        </div>
      </div>
      <div className={cls.bgSecDown}>
        <Grid spacing={4} container className="w-100 rel" justify="center">
          <Grid item xs={5} sm={5} md={2} className={cls.item}>
            <a className="fcc w-100 h-100" href="https://www.gramfactory.com">
              <img src={gramfactory} alt="" className={cls.imgItem} />
            </a>
            {/* <div className={cls.itemFooter}>SDE - intern</div> */}
          </Grid>
          <Grid item xs={5} sm={5} md={2} className={cls.item}>
            <a className="fcc w-100 h-100" href="https://www.talentio.in">
              <img src={talentio} alt="" className={cls.imgItem} />
            </a>
            {/* <div className={cls.itemFooter}>SDE - freelance</div> */}
          </Grid>
          <Grid item xs={5} sm={5} md={2} className={cls.item}>
            <a
              className="fcc w-100 h-100"
              href={`https://play.google.com/store/apps/details?id=com.a2zcustomizedproducts.application&hl=en_IN&gl=US`}
            >
              <img src={a2z} alt="" className={cls.imgItem} />
            </a>
            {/* <div className={cls.itemFooter}>SDE - freelance</div> */}
          </Grid>
          <Grid item xs={5} sm={5} md={2} className={cls.item}>
            <a className="fcc w-100 h-100" href="https://www.iiits.ac.in">
              <img src={iiits} alt="" className={cls.imgItem} />
            </a>
            {/* <div className={cls.itemFooter}>Graphics</div> */}
          </Grid>
        </Grid>
        <div
          className="fcol"
          style={{
            maxWidth: 520,
            marginTop: 60,
            marginBottom: 120,
            alignSelf: "center",
          }}
        >
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            So, here's a sneak-peak...
          </div>
          <Divider width="60%" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
