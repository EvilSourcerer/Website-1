import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ConstructTheme } from './theme/ThemeFactory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Free from './Free/Free';
import AlteningBar from './AlteningBar/AlteningBar';

const App: React.FC = () => {
    const theme = ConstructTheme('dark');

    return (
        <ThemeProvider theme={theme}>
            <div className='RootContainer'>
                <CssBaseline />
                <BrowserRouter>
                    <AlteningBar />
                    <Switch>
                        <Route exact path='/'>
                            <MainPage />
                        </Route>
                        <Route exact path='/free'>
                            <Free />
                        </Route>
                        <Route exact path='/dashboard/:panel'></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
};

export default App;
