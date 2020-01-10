import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Fab, Theme } from '@material-ui/core';
import { ViewCompact as DashboardIcon, MoneyOff as FreeIcon } from '@material-ui/icons';

import topography from './topography.svg';
import { AlteningDark } from '../theme/AlteningDark';

const mainPageStyles = makeStyles((theme: Theme) => ({
    jumbotron: {
        backgroundImage: `url(${topography})`,
        backgroundColor: AlteningDark[600],
        clipPath: 'polygon(0 0, 1600px 0, 1600px 87%, 0 100%)',
        height: '800px',
        width: '100%'
    },
    moreInfo: {
        paddingTop: theme.spacing(2),
        paddingLeft: '30%',
        paddingRight: '30%',
        textAlign: 'center'
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
            <div className={classes.moreInfo}>
                <Typography variant='h3'>About</Typography>
                <Typography variant='body1'>
                    <b>How Is The Altening Unique?</b>
                </Typography>
                <Typography variant='body1' color='textSecondary'>
                    TheAltening is one of the best minecraft account generators on the market.
                    <br />
                    <br />
                    <b>
                        It's not like a regular minecraft alt generator and uses a special system called “Tokens” which
                        differentiate from most generators giving you just the email:password of an alt.
                    </b>
                    <br />
                    Using our system, you’ll be able to generate Tokens which you can use in your minecraft client to
                    login to the accounts.
                    <br />
                    <br />
                    Note: you won’t be provided with an email:password but instead with a Token which is a much better
                    form of authentication.
                </Typography>
                <br />
                <br />
                <Typography variant='body1'>
                    <b>Why Are Tokens Superior?</b>
                </Typography>
                <br />- A Simpler format, you can use any password
                <br />- Each account is checked before being generated
                <br />- No more dead alts
                <br />- No more mojang blocks
                <br />- Allows us to give out more accounts
                <br />
                <br />
                <Typography variant='body1'>
                    <b>
                        TheAltening currently only supports Windows operating systems, and won’t be available for Mac or
                        Linux based OS’s.
                    </b>
                    To use TheAltening without API-based applications, you will need to download our
                    <b> custom authenticator and switch to our servers.</b> From there you will be able to enter the
                    Tokens into your Minecraft launcher just like a normal login and it will let you use your new alt!
                </Typography>
            </div>
        </>
    );
};

export default MainPage;
