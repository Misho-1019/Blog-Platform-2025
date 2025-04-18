import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { useState } from "react"
import { UserContext } from "./context/UserContext"

function App() {
    const [authData, setAuthData] = useState({})

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    return (
        <UserContext.Provider value={{...authData, userLoginHandler}}>
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </UserContext.Provider>
    )
}

export default App
