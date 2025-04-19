import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { useState } from "react"
import { UserContext } from "./context/UserContext"
import Logout from "./components/logout/Logout"
import { UserProvider } from "./providers/UserProvider"

function App() {

    return (
        <UserProvider>
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </UserProvider>
    )
}

export default App
