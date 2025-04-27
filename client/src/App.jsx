import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout"
import { UserProvider } from "./providers/UserProvider"
import AuthGuard from "./components/guards/AuthGuard"
import GuestGuard from "./components/guards/GuestGuard"
import Catalog from "./components/catalog/Catalog"
import SpotifyCallback from "./components/callback/SpotifyCallback"
import SearchPage from "./components/search/SearchPage"
import SongDetails from "./components/details/SongDetails"

function App() {

    return (
        <UserProvider>
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<AuthGuard />}>
                            <Route path="/songs" element={<Catalog />} />
                            <Route path="/callback" element={<SpotifyCallback />} />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/:songId/details" element={<SongDetails />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                        <Route element={<GuestGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </UserProvider>
    )
}

export default App
