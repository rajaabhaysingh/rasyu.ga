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
}));

const Projects = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div className={cls.root}>
      <Grid container spacing={8}>
        <Grid item sm={12} md={6} className={cls.left}>
          <div className={cls.leftContent}>
            Nisi cupidatat adipisicing nulla est officia quis voluptate nulla ad
            nostrud esse laboris.
          </div>
        </Grid>
        <Grid item sm={12} md={6} className={cls.right}>
          <div className={clsx(globalCls.headerWhite, "mar_b-16")}>
            Projects to go aww with...
          </div>
          <Divider width="60%" />
          <div className="mar_t-32 fcol">
            <div className={globalCls.topic}>
              Nisi cupidatat adipisicing nulla
            </div>
            <div className={clsx(globalCls.txtMdWhite, "mar_t-8")}>
              Nisi cupidatat adipisicing nulla est officia quis voluptate nulla
              ad nostrud esse laboris. Laboris minim consequat sunt ex cupidatat
              ex ea adipisicing sint aliquip.
            </div>
          </div>
          <div className="mar_t-16 fcol">
            <div className={globalCls.topic}>
              Nisi cupidatat adipisicing nulla
            </div>
            <div className={clsx(globalCls.txtMdWhite, "mar_t-8")}>
              Laboris minim consequat sunt ex cupidatat ex ea adipisicing sint
              aliquip. Est mollit elit cupidatat voluptate id elit. Eiusmod
              ullamco qui nisi incididunt amet.
            </div>
          </div>
          <div className="mar_t-16 fcol">
            <div className={globalCls.topic}>
              Nisi cupidatat adipisicing nulla
            </div>
            <div className={clsx(globalCls.txtMdWhite, "mar_t-8")}>
              Consequat sunt ex cupidatat ex ea adipisicing sint aliquip. Est
              mollit elit cupidatat voluptate id elit. Eiusmod ullamco qui nisi
              incididunt amet.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
