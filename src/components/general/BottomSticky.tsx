import { makeStyles } from "@material-ui/core";
import React from "react";

const BottomSticky:React.FC = ({children}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            position:"absolute",
            bottom:0,
            width:"100vw"
        }
      }));
    
      const classes = useStyles();

    return(
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default BottomSticky;