import {Dashboard} from "../page/dashboard/Dashboard.jsx";

export const InnerContainer = () => {
    return(
        <div>
            {
                window.location.pathname === "/dashboard" ? <Dashboard/> : null
            }
        </div>
    )
}
