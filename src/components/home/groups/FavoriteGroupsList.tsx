import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
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
import { Group } from "../../../entities/group/Group";
import { LoadingList } from "../../general/LoadingComponents";
import GroupSelector from "./GroupSelector";
import { GroupList } from "./groupListTypes";

const FavoriteGroupListItem: React.FC<{ group: Group }> = ({
    children,
    group
}) => {
    const useStyles = makeStyles({
        root: {
            width: 150,
            margin: 10,
            flexShrink: 0
        },
        media: {
            margin: "0 auto"
        }
    });

    const classes = useStyles();

    return (
        <GroupSelector group={group}>
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
        </GroupSelector>

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
            <Accordion expanded={true /*we dont care about minimizing this one*/}>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Favorites</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {containedGroups ? (
                        <div className={classes.horizBox}>
                            {containedGroups ? (
                                containedGroups.map((group, idx) => {
                                    return <FavoriteGroupListItem group={group} key={idx} />;
                                })
                            ) : (
                                <LoadingList />
                            )}
                        </div>
                    ) : (
                        <LoadingList />
                    )}
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default FavoriteGroupsList;
