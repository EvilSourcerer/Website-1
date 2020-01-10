import { PaletteType, Theme, createMuiTheme } from '@material-ui/core';
import { AlteningGreen } from './AlteningGreen';
import { AlteningBlue } from './AlteningBlue';
import { AlteningDark } from './AlteningDark';

const white = '#FFFFFF';

export function ConstructTheme(type: PaletteType): Theme {
    return createMuiTheme({
        palette: {
            primary: {
                light: AlteningGreen[400],
                main: AlteningGreen[500],
                dark: AlteningGreen[600],
                contrastText: white
            },
            secondary: {
                light: AlteningBlue[400],
                main: AlteningBlue[500],
                dark: AlteningBlue[600],
                contrastText: white
            },
            background: {
                default: type === 'light' ? white : AlteningDark[500]
            },
            type
        }
    });
}
