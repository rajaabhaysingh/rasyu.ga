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
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "128px",
    [theme.breakpoints.down("sm")]: {
      padding: "32px",
    },
  },
  left: {
    position: "relative",
    display: "flex",
    backgroundColor: theme.palette.background.dark,
    width: "100%",
    padding: "128px !important",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      order: 1,
      padding: "64px !important",
    },
  },
  leftContent: {
    backgroundColor: theme.palette.primary.main,
    padding: "32px",
    boxSizing: "border-box",
    color: theme.palette.common.white,
    fontWeight: 500,
    flex: 1,
  },
  leftOutline: {
    border: `2px solid ${theme.palette.primary.main}`,
    position: "absolute",
    top: 16,
    left: 16,
    margin: "128px !important",
    height: "calc(100% - 256px)",
    width: "calc(100% - 256px)",
    [theme.breakpoints.down("sm")]: {
      margin: "64px !important",
      height: "calc(100% - 128px)",
      width: "calc(100% - 128px)",
      top: 12,
      left: 12,
    },
  },
  right: {
    flexDirection: "column",
    width: "100%",
    padding: "0 0 0 128px !important",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      order: -1,
      padding: "32px !important",
    },
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: "none",
    marginLeft: 16,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Projects = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <Grid container spacing={8}>
        <Grid item sm={12} md={6} className={cls.left}>
          <div className={cls.leftContent}>
            "Your vision should be something that can equally inspire everyone
            who is associated with your project and not just you."
          </div>
          <div className={cls.leftOutline}></div>
        </Grid>
        <Grid item sm={12} md={6} className={cls.right}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Projects to go aww with...
          </div>
          <Divider width="60%" />
          <div className="mar_t-32 fcol">
            <div className={globalCls.topic}>Blue/Gray collar job portal</div>
            <div className={clsx(globalCls.txtMdWhite, "mar_t-8")}>
              Portal to search and post job opportunies for unorganized and
              semi-organized sectors. <em>[MERN stack]</em>
              <a
                href="https://www.wilswork.ml"
                target="_blank"
                rel="noopener noreferrer"
                className={cls.link}
              >
                {"<<"}Link{">>"}
              </a>
            </div>
          </div>
          <div className="mar_t-16 fcol">
            <div className={globalCls.topic}>Digital Graphics Solutions</div>
            <div className={clsx(globalCls.txtMdWhite, "mar_t-8")}>
              One-stop solution to avail all kinds of graphics designing
              services (Both B2B {"&"} B2C). <em>[MERN stack]</em>
              <a
                href="https://www.rabsstudio.ml"
                target="_blank"
                rel="noopener noreferrer"
                className={cls.link}
              >
                {"<<"}Link{">>"}
              </a>
            </div>
          </div>
          <div className="mar_t-16 fcol">
            <div className={globalCls.topic}>
              Real-time Sign Language Translation
            </div>
            <div className={clsx(globalCls.txtMdWhite, "mar_t-8")}>
              A mobile application that helps specially-abled subjects to
              communicate. <em>[Tensorflow + React Native]</em>
            </div>
          </div>
        </Grid>
      </Grid>
      <div
        className="fcol"
        style={{ maxWidth: 520, marginTop: 160, alignSelf: "center" }}
      >
        <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
          Project snippets...
        </div>
        <Divider width="60%" />
      </div>
    </div>
  );
};

export default Projects;
