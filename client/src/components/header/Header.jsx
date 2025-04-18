import { Link } from "react-router";

export default function Header() {
    return (
        <header className="bg-blue-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">
                        <Link to="/">BrandName</Link>
                    </h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    to="/"
                                    className="text-white hover:text-blue-200 transition duration-200"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className="text-white hover:text-blue-200 transition duration-200"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className="text-white hover:text-blue-200 transition duration-200"
                                >
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-white hover:text-blue-200 transition duration-200"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
