import { Link, useNavigate } from 'react-router-dom'
function NavBar() {
    const navigate = useNavigate()
    const handleDownloadClick = () => {
        navigate('/download')
    }
    return (
        <div>
            <section className="w-full px-8 text-gray-700 bg-white fixed z-50">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <img src="favicon.ico" alt="" className='w-28 -m-4' />
                        </Link>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={()=>navigate('/')}>Home</button>
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={()=>navigate('/#features')}>Features</button>
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={()=>navigate('/docs')}>Docs</button>
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900" onClick={handleDownloadClick}>Download</button>
                        </nav>
                    </div>

                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <a href="/" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Sign in
                        </a>
                        <a href="/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Sign up
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavBar