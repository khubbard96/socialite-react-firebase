import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    makeStyles
} from "@material-ui/core";
import { GroupList as GroupListType } from "./groupListTypes";
import { Group } from "../../../entities/group/Group";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { LoadingList } from "../../general/LoadingComponents";
import GroupSelector from "./GroupSelector";

const DefaultGroupListItem: React.FC<{
    group: Group;
    withDivider: boolean;
}> = ({ children, group, withDivider }) => {
    return (
        <>
            <ListItem button alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary={group.title}
                    secondary={group.preview}
                ></ListItemText>
            </ListItem>
            {withDivider ? <Divider variant="inset" component="li" /> : ""}
        </>
    );
};

const GroupList: React.FC<GroupListType> = ({ children, containedGroups }) => {
    const useStyle = makeStyles({
        nestList: {
            width: "100%"
        }
    });
    const className = useStyle();

    return (
        <>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Groups</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {containedGroups ? (
                        <List className={className.nestList}>
                            {containedGroups?.map((group, idx) => {
                                return (
                                    <GroupSelector group={group}>
                                        <DefaultGroupListItem
                                            group={group}
                                            key={idx}
                                            withDivider={idx !== containedGroups.length - 1}
                                        />
                                    </GroupSelector>

                                );
                            })}
                        </List>
                    ) : (
                        <LoadingList />
                    )}
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default GroupList;
