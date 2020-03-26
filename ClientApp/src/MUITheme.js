import { createMuiTheme } from '@material-ui/core';

const styles = createMuiTheme({
    palette: {
        type: "light",
        primary: { main: "#CC3333" },
        secondary: { main: "#0D79F2" },
        background: {
            default: "#EBEBEB"
        }
    },
    typography: {
        useNextVariants: true,
        color: "blue",
        body1: {
            color: "black",
        },
        body2: {
            color: "black"
        }
    },
    overrides: {
        MuiAppBar: {
            root: {
                position: 'relative'
            }
        },
        MuiToolbar: {
            root: {
                display: 'flex',
                justifyContent: 'space-between'
            }
        },
        MuiCard: {
            root: {
                padding: "24px;",
                boxShadow: "24"
            }
        },
        // MuiDialog: {
        //     root: {
        //         backgroundColor: "#121212"
        //     }
        // },
        // MuiInputBase: {
        //     root: {
        //         color: "white"
        //     }
        // },
        // MuiFormLabel: {
        //     root: {
        //         color: "white"
        //     }
        // },
        MuiInputLabel: {
            root: {
                marginLeft: "16px"
            }
        },
        // MuiPaper: {
        //     root: {
        //         backgroundColor: "#121212"
        //     }
        // },
        MuiButton: {
            root: {
                fontWeight: "500",
                //marginTop: "12px"
            }
        },
        MuiInput: {
            root: {
                margin: "16px"
            }
        }
    }
});

export default styles;