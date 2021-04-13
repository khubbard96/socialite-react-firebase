import { Button, Container, Icon, makeStyles, Typography } from "@material-ui/core";
import firebase from "firebase";
import React, { useState } from "react";
import useAuth from "../../store/useAuth";
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import loginBackground from "../../img/loginScreen/login.jpg";

const MainLogin: React.FC = () => {

    const [showDescription, setShowDescription] = useState(true);

    const useStyles = makeStyles((theme) => ({
        root: {
            height: "100%",
            backgroundImage:`url(${loginBackground})`,
            backgroundSize:"cover"
        },
        topSpacer: {
            height: "20%"
        },
        middleSpacer: {
            height: "5%"
        },
        button: {
            width: "100%"
        },
        smallSpacer: {
            height: 10
        }
    }));

    const classes = useStyles();

    const auth = useAuth(state => state.auth)

    const signIn = () => {
        auth?.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return (
        <>
            <Container className={classes.root}>
                <div className={classes.topSpacer}></div>
                <Typography variant="h6">
                    Welcome to
                </Typography>
                <Typography variant="h2" align="center">
                    socialite
                </Typography>
                <Typography variant="subtitle2" align="center">
                    v0.1.0-alpha
                </Typography>
                <div className={classes.middleSpacer}></div>
                <Button
                    endIcon={<AccountCircleIcon />}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={signIn}>
                    Sign in with Google
                </Button>
                <div className={classes.smallSpacer}></div>
                <Button
                    endIcon={<InfoIcon />}
                    className={classes.button}
                    variant="contained"
                    disableElevation
                    onClick={()=>setShowDescription(!showDescription)}>
                    What is socialite?
                </Button>
                <div className={classes.smallSpacer}></div>
                <div hidden={showDescription}>
                    <Typography variant="subtitle2">
                        socialite is a new way to interact with your friends and colleagues. socialite brings a new, fresh take to group messaging, event planning, and social networking.
                    </Typography>
                </div>
            </Container>
        </>
    );
}

export default MainLogin;