import React from "react";

// styling
import { makeStyles } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: 8,
  },
}));

const Divider = ({ width }) => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();

  return (
    <div
      className={cls.root}
      style={{
        width: width ? width : "60%",
      }}
    ></div>
  );
};

export default Divider;
