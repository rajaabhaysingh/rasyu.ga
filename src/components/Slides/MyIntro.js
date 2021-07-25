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
            "A life portfolio offers a compelling alternative to traditional
            retirement. It is a new way of thinking and living in extended
            middle age. A typical portfolio is a balanced mix of some work,
            ongoing learning, recreation, travel and avocations, reconnecting
            with family and friends, and giving back."
          </div>
        </Grid>
        <Grid item sm={12} md={6} className={cls.right}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Okay! Lemme introduce...
          </div>
          <Divider width="60%" />
          <p className={clsx(globalCls.txtMdWhite, "mar_t-32")}>
            I'm currently a final-year undergrad, who loves to design and
            develop application softwares (web and native) and solve existing
            problems wih the help of technology.
          </p>
          <p className={clsx(globalCls.txtMdWhite, "mar_t-16")}>
            I like to spend my free time in planning for new startup ideas and
            research about financial investments. Sometimes, I practise playing
            musical instruments like guitars, flutes, etc. I also enjoy plying
            badminton and football.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyIntro;
