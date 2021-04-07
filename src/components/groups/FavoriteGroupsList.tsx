import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  ListItemAvatar,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import { Group } from "../../entities/group/Group";
import { LoadingList } from "../general/LoadingComponents";
import { GroupList } from "./groupListTypes";

const FavoriteGroupListItem: React.FC<{ group: Group }> = ({
  children,
  group
}) => {
  const useStyles = makeStyles({
    root: {
      width: 150,
      margin: 5,
      flexShrink: 0
    },
    media: {
      margin: "0 auto"
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Avatar className={classes.media} variant="rounded" />
          <Typography noWrap={true} variant="subtitle1">
            {group.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const FavoriteGroupsList: React.FC<GroupList> = ({
  children,
  containedGroups
}) => {
  const useStyles = makeStyles({
    horizBox: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      overflowX: "scroll"
    }
  });
  const classes = useStyles();

  return (
    <>
      <div className={classes.horizBox}>
        {containedGroups ? (
          containedGroups.map((group, idx) => {
            return <FavoriteGroupListItem group={group} key={idx} />;
          })
        ) : (
          <LoadingList />
        )}
      </div>
    </>
  );
};

export default FavoriteGroupsList;
