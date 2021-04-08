import React, { useState } from "react";
import SocialiteModal, { SocialiteModalType } from "./SocialiteModal";
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from '@material-ui/core/transitions';
import useCurrentModal from "../../store/useCurrentModal";
import { AppBar, Box, Button, createStyles, IconButton, makeStyles, TextField, Theme, Toolbar, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Group } from "../../entities/group/Group";
import useFirestore from "../../store/useFirestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MODAL_TYPE: SocialiteModalType = "CREATE_GROUP"

const CreateGroup: React.FC = () => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            appBar: {
                position: 'relative',
            },
            title: {
                marginLeft: theme.spacing(2),
                flex: 1,
            },
            groupForm: {
                margin: theme.spacing(2)
            },
            groupFormInput: {
                width: "100%"
            }
        }),
    );
    const classes = useStyles();

    const openModal = useCurrentModal((state) => state.modal);
    const setOpenModal = useCurrentModal((state) => state.setCurrentModal);

    const [groupName, setGroupName] = useState("");
    
    const fs = useFirestore((state) => state.fs);
    const groupsRef = fs.collection("groups");

    const handleClickOpen = () => {
        //setOpen(true);
    };

    const handleClose = () => {
        setOpenModal(null);
    };

    const handleCreateGroup = () => {
        const name = groupName;
        const group:Group = {
            title:name,
            preview: "No preview available.",
            createdAtUtc: Date.now()
        }
        groupsRef.add(group);
        setGroupName("");
        handleClose();
    }

    return (
        <Dialog fullScreen open={openModal === MODAL_TYPE} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography align="left" variant="h6" className={classes.title}>
                        Create Group
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.groupForm} justifyContent="center">
                <TextField onChange={(e)=>setGroupName(e.currentTarget.value)} className={classes.groupFormInput} id="outlined-basic" label="Group name" variant="outlined" />
                <Button onClick={handleCreateGroup} variant="contained" color="primary">
                    Continue
                </Button>            
            </Box>
        </Dialog>
    );
}

export default CreateGroup;