import React from 'react';
import { makeStyles } from '@material-ui/styles';
import topography from './topography.svg';

const mainPageStyles = makeStyles({
    jumbotron: {
        backgroundImage: `url(${topography})`,
        height: '100vh',
        width: '100vw'
    }
});

const MainPage: React.FC = () => {
    const classes = mainPageStyles();

    return <div className={classes.jumbotron}></div>;
};

export default MainPage;
