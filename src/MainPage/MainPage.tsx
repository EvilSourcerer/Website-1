import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Fab, Theme } from '@material-ui/core';
import { ViewCompact as DashboardIcon, MoneyOff as FreeIcon } from '@material-ui/icons';

import topography from './topography.svg';

const mainPageStyles = makeStyles((theme: Theme) => ({
    jumbotron: {
        backgroundImage: `url(${topography})`,
        clipPath: 'polygon(0 0, 1600px 0, 1600px 87%, 0 100%)',
        height: '800px',
        width: '100%'
    },
    jumboTitle: {
        paddingTop: '80px',
        paddingLeft: '40px'
    },
    jumboButtons: {
        marginTop: theme.spacing(3)
    },
    jumboButton: {
        marginRight: theme.spacing(2)
    },
    fabIcon: {
        marginRight: theme.spacing(1)
    }
}));

const MainPage: React.FC = () => {
    const classes = mainPageStyles();

    return (
        <>
            <div className={classes.jumbotron}>
                <div className={classes.jumboTitle}>
                    <Typography variant='h1'>The Altening</Typography>
                    <Typography variant='h2'>A Free Minecraft Account Generator</Typography>
                    <div className={classes.jumboButtons}>
                        <Fab variant='extended' color='primary' size='large' className={classes.jumboButton}>
                            <DashboardIcon className={classes.fabIcon} />
                            Open Dashboard
                        </Fab>
                        <Fab variant='extended' color='secondary' size='large' className={classes.jumboButton}>
                            <FreeIcon className={classes.fabIcon} />
                            Free Generator
                        </Fab>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
