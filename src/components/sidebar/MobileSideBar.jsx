import {useState} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ExitToApp, LaptopChromebookTwoTone, Widgets} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MobileSideBar(){
    /*모바일 메뉴바*/
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return(
        <div>
            {/*모바일 메뉴바*/}
            <div className="mobile-menu">
                <div className="mobile-menu-top-bar">
                    <Button onClick={toggleDrawer(true)}>
                        <Widgets className="mobile-menu-toggle-btn"/>
                    </Button>
                    KIMJIHEE
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <Box sx={{width: 250}} role="presentation">
                        <List>
                            <div>
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
                            </div>
                        </List>
                        <Divider/>
                        <ListItem disablePadding onClick={()=>{
                            navigate('/');
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ExitToApp/>
                                </ListItemIcon>
                                <ListItemText primary="로그아웃" />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Drawer>
            </div>
        </div>
    )
}
export default MobileSideBar;
