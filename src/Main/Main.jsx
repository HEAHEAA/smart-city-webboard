import {InnerContainer} from "./InnerContainer.jsx";
import {DarkTheme, LightTheme} from "../_style/theme/mui-theme.jsx";
import {ThemeProvider} from "@mui/material";
import SideBar from "../components/sidebar/SideBar.jsx";

export const Main = () => {
    return (
      <div>
          <ThemeProvider theme={DarkTheme}>
              <SideBar>
                  <InnerContainer/>
              </SideBar>
          </ThemeProvider>
      </div>
    )
}
