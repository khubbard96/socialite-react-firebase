import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, createStyles, IconButton, makeStyles, TextField, Theme, Toolbar, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Group } from "../../entities/group/Group";
import useFirestore from "../../store/useFirestore";
import { classToPlain } from "class-transformer";
import useModalStore from "../../store/useModalStore";

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

    const setOpenModal = useModalStore((state)=>state.setCurrentModal);


    const [groupName, setGroupName] = useState("");
    
    const fs = useFirestore((state) => state.fs);
    const groupsRef = fs?.collection("groups");

    const handleClose = () => {
        setOpenModal(null);
    };

    const handleCreateGroup = () => {
        const name = groupName;
        const group = new Group();
        group.title = name;
        groupsRef?.add(classToPlain(group));
        setGroupName("");
        handleClose();
    }

    return (
        <>
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
        </>
    );
}

export default CreateGroup;