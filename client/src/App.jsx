import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout"
import { UserProvider } from "./providers/UserProvider"
import AuthGuard from "./components/guards/AuthGuard"

function App() {

    return (
        <UserProvider>
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<AuthGuard />}>
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </UserProvider>
    )
}

export default App
