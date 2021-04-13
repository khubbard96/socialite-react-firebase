import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import useApplicationView from "../../store/useApplicationView";
import ApplicationViewType from "./ApplicationViewType";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <>
      {/*<div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
            </div>*/}
      {children}
    </>
  );
}

const SocialiteViewNavigator: React.FC<{ children: any[] }> = ({
  children
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%"
    }
  }));
  const classes = useStyles();

  const { viewId } = useApplicationView();

  return <div className={classes.root}>{children[viewId]}</div>;
};

export const SocialiteApplicationViewComponent: React.FC<{
  viewType: ApplicationViewType;
}> = ({ children, viewType }) => {
  const viewId = useApplicationView((state) => state.viewId);

  return (
    <TabPanel value={viewId} index={viewType.valueOf()}>
      {children}
    </TabPanel>
  );
};

export default SocialiteViewNavigator;
