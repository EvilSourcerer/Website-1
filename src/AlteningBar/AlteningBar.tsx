import React, { useState, useEffect } from 'react';
import { AppBar, Button, Toolbar, Theme, makeStyles, Typography, ButtonBase } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { RemoveRedEye as ViewerIcon } from '@material-ui/icons';

const useAlteningBarStyles = makeStyles((theme: Theme) => ({
    alteningBar: {
        background: 'rgba(0, 0, 0, 0.4)'
    },
    barSpacer: {
        flex: 1
    },
    alteningLink: {
        marginRight: theme.spacing(1)
    }
}));

const AlteningBar: React.FC = () => {
    const [viewers, setViewers] = useState<number>(0);
    const classes = useAlteningBarStyles();
    const history = useHistory();

    useEffect(() => {
        axios.get('https://api.thealtening.com/socialproof/stats').then((response) => {
            if (typeof response.data['value'] === 'number' && response.data['group'] === 1) {
                setViewers(response.data['value']);
            }
        });
    }, []);

    const openDashboard = () => {
        history.push('/dashboard');
    };

    const openFree = () => {
        history.push('/free');
    };

    const openIndex = () => {
        history.push('/');
    };

    return (
        <AppBar position='static' className={classes.alteningBar}>
            <Toolbar>
                <ButtonBase>
                    <Typography variant='h6' onClick={openIndex}>
                        The Altening
                    </Typography>
                </ButtonBase>
                <div className={classes.barSpacer} />
                <Button className={classes.alteningLink} onClick={openDashboard}>
                    Dashboard
                </Button>
                <Button className={classes.alteningLink} onClick={openFree}>
                    Free Generator
                </Button>
                <ViewerIcon className={classes.alteningLink} />
                <Typography variant='h6'>{viewers || '?'}</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AlteningBar;
