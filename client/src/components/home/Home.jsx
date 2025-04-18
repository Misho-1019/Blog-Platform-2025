import { Link } from "react-router";

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-600 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
                <p className="mt-4 text-xl">Your go-to place for insightful articles and stories</p>
                <Link
                    to="/register"
                    className="mt-6 inline-block px-8 py-3 text-lg bg-blue-800 hover:bg-blue-700 rounded-lg text-white"
                >
                    Join Us Today
                </Link>
            </section>

            {/* Blog Posts Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Blog Post 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">Blog Post Title 1</h3>
                            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                            <Link
                                to="/post/1"
                                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Blog Post 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">Blog Post Title 2</h3>
                            <p className="mt-2 text-gray-700">Quisque sit amet est velit. Donec volutpat magna ut...</p>
                            <Link
                                to="/post/2"
                                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Blog Post 3"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">Blog Post Title 3</h3>
                            <p className="mt-2 text-gray-700">Sed at magna in neque ullamcorper malesuada ut...</p>
                            <Link
                                to="/post/3"
                                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white text-center py-8">
                <p>&copy; 2025 Blog Platform | All Rights Reserved</p>
            </footer>
        </div>
    );
}
