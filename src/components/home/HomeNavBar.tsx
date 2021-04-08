import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    makeStyles
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";



const HomeNavBar: React.FC = () => {

    const useStyles = makeStyles((theme) => ({
        grow: {
            flexGrow: 1
        }
    }));
    
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Socialite</Typography>
                <div className={classes.grow}></div>
                <div>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default HomeNavBar;