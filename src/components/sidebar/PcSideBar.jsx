import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {indigo} from "@mui/material/colors";
import {LaptopChromebookTwoTone,} from "@mui/icons-material";
import {InnerContainer} from "../../Main/InnerContainer.jsx";
import Logout from "../logout/Logout.jsx";

const drawerWidth = 240;

function PcSideBar() {
    return (
        <div className="pc-menu">
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    <Toolbar>

                        <div style={{float: "left"}}>
                            <Typography variant="h6" noWrap component="div">
                                KIMJIHEE
                            </Typography>
                        </div>

                        <Logout/>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: indigo[600]
                        },

                    }}
                >
                    <Toolbar/>
                    <Box sx={{overflow: 'auto'}}>
                        <List sx={{color: indigo[50]}}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LaptopChromebookTwoTone/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Dashboard
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider/>
                    </Box>
                </Drawer>

                <Box component="main" sx={{flexGrow: 1, p: 0}}>
                    <div className="web-contents">
                        <InnerContainer/>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default PcSideBar;
