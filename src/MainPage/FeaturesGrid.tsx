import React from 'react';
import { Grid, Typography, Paper, makeStyles, IconButton, Theme } from '@material-ui/core';
import { AlteningDark } from '../theme/AlteningDark';

interface Feature {
    icon: JSX.Element;
    name: string;
    description: string;
}

interface Props {
    features: Feature[];
}

const useFeatureGridStyles = makeStyles((theme: Theme) => ({
    feature: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.background.paper : AlteningDark[500],
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: '100%',
        textAlign: 'center'
    }
}));

const FeaturesGrid: React.FC<Props> = (props: Props) => {
    const classes = useFeatureGridStyles();

    return (
        <Grid container spacing={2} justify='center' direction='row' alignItems='stretch'>
            {props.features.map((feature: Feature) => {
                return (
                    <Grid item xs key={feature.name}>
                        <Paper elevation={5} className={classes.feature}>
                            <IconButton>{feature.icon}</IconButton>
                            <Typography variant='h5' align='center'>
                                {feature.name}
                            </Typography>
                            <Typography variant='body1' align='center' color='textSecondary'>
                                {feature.description}
                            </Typography>
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default FeaturesGrid;
