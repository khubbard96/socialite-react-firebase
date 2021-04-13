import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, createStyles, IconButton, makeStyles, TextField, Theme, Toolbar, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Group } from "../../entities/group/Group";
import useFirestore from "../../store/useFirestore";
import { classToPlain } from "class-transformer";
import useModalStore from "../../store/useModalStore";

const EditGroup: React.FC = () => {
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

    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography align="left" variant="h6" className={classes.title}>
                        Edit Group
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.groupForm} justifyContent="center">
        
            </Box>
        </>
    );
}

export default EditGroup;