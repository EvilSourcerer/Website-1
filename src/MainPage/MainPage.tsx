import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Fab, Theme } from '@material-ui/core';
import {
    ViewCompact as DashboardIcon,
    MoneyOff as FreeIcon,
    Loop,
    Code,
    Info,
    Fingerprint,
    Favorite,
    Call
} from '@material-ui/icons';

import topography from './topography.svg';
import { AlteningDark } from '../theme/AlteningDark';
import FeaturesGrid from './FeaturesGrid';
import { useHistory } from 'react-router-dom';

const mainPageStyles = makeStyles((theme: Theme) => ({
    jumbotron: {
        backgroundImage: `url(${topography})`,
        backgroundColor: theme.palette.type === 'light' ? theme.palette.background.default : AlteningDark[600],
        backgroundBlendMode: theme.palette.type === 'light' ? 'difference' : undefined,
        clipPath: 'polygon(0 0, 1600px 0, 1600px 87%, 0 100%)',
        height: '800px',
        width: '100%'
    },
    moreInfo: {
        paddingTop: theme.spacing(2),
        paddingLeft: '30%',
        paddingRight: '30%',
        textAlign: 'center',
        paddingBottom: '100px',
        clipPath: 'polygon(0 0, 1600px 0, 1600px 87%, 0 100%)'
    },
    features: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.background.default : AlteningDark[600],
        paddingTop: theme.spacing(2),
        paddingLeft: '15%',
        paddingRight: '15%'
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
    },
    featureIcon: {
        fontSize: 'auto'
    }
}));

const MainPage: React.FC = () => {
    const classes = mainPageStyles();
    const history = useHistory();

    const openDashboard = () => {
        history.push('/dashboard');
    };

    const openFree = () => {
        history.push('/free');
    };

    return (
        <>
            <div className={classes.jumbotron}>
                <div className={classes.jumboTitle}>
                    <Typography variant='h1'>The Altening</Typography>
                    <Typography variant='h2'>A Free Minecraft Account Generator</Typography>
                    <div className={classes.jumboButtons}>
                        <Fab
                            variant='extended'
                            color='primary'
                            size='large'
                            className={classes.jumboButton}
                            onClick={openDashboard}
                        >
                            <DashboardIcon className={classes.fabIcon} />
                            Open Dashboard
                        </Fab>
                        <Fab
                            variant='extended'
                            color='secondary'
                            size='large'
                            className={classes.jumboButton}
                            onClick={openFree}
                        >
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
            <div className={classes.features}>
                <FeaturesGrid
                    features={[
                        {
                            icon: <Loop className={classes.featureIcon} />,
                            name: 'Unlimited Alts',
                            description: 'You can make a ridiculous amounts of unique alts every day.'
                        },
                        {
                            icon: <Code className={classes.featureIcon} />,
                            name: 'Alt Checking',
                            description: 'Each account is checked before being generated.'
                        },
                        {
                            icon: <Info className={classes.featureIcon} />,
                            name: 'Alt Information',
                            description:
                                'When generating an alt you will be provided with such information as Username, Skin and Capes (if any). In the future we will also provide ban information.'
                        },
                        {
                            icon: <Fingerprint className={classes.featureIcon} />,
                            name: 'Private Alts',
                            description:
                                'Premium users can mark up to 10 alts as private, meaning they will not be generated to anybody else.'
                        },
                        {
                            icon: <Favorite className={classes.featureIcon} />,
                            name: 'Favorite Alts',
                            description:
                                'Premium users can mark up to 10 alts as favorite, meaning they will not expire.'
                        },
                        {
                            icon: <Call className={classes.featureIcon} />,
                            name: 'Support',
                            description: 'We have extremely fast support via discord if you ever need assistance.'
                        }
                    ]}
                />
            </div>
        </>
    );
};

export default MainPage;
