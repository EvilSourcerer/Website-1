import React from 'react';
import { AppBar, Button, Toolbar, Theme, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useAlteningBarStyles = makeStyles((theme: Theme) => ({
    alteningBar: {
        background: 'rgba(0, 0, 0, 0.4)'
    },
    barSpacer: {
        flex: 1
    },
    alteningLink: {
        marginLeft: theme.spacing(1)
    }
}));

const AlteningBar: React.FC = () => {
    const classes = useAlteningBarStyles();
    const history = useHistory();

    const openDashboard = () => {
        history.push('/dashboard');
    };

    const openFree = () => {
        history.push('/free');
    };

    return (
        <AppBar position='static' className={classes.alteningBar}>
            <Toolbar>
                <Typography variant='h6'>The Altening</Typography>
                <div className={classes.barSpacer} />
                <Button className={classes.alteningLink} onClick={openDashboard}>
                    Dashboard
                </Button>
                <Button className={classes.alteningLink} onClick={openFree}>
                    Free Generator
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default AlteningBar;
