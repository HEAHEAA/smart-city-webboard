import './_style/App.css'
import {Route, Routes} from "react-router-dom";
import {Login} from "./page/login/Login.jsx";
import {Signup} from "./page/signup/Signup.jsx";
import {Main} from "./Main/Main.jsx";
function App() {
    return (
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dashboard" element={<Main/>}/>
            </Routes>
    )
}

export default App
