import { Link } from 'react-router-dom';
import imgFront from '../assets/image_qilodb_front.jpg';
import { FaLink } from 'react-icons/fa6';
function Hero() {
    return (
        <div id='top' className='bg-white'>
            <div className="bg-white max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <section className="px-2 py-32 bg-white md:px-0">
                    <div className="items-center px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3">
                                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col">
                                        <div className="block xl:inline">QiloDB</div>
                                        <div className="block text-blue-600 xl:inline">Help You Store Data Faster.</div>
                                    </h1>
                                    <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">QiloDB offers a robust and user-friendly database management experience through a powerful command-line interface for advanced users and automation.</p>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <Link to="/download" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                                            Try It Free
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </Link>
                                        <Link to="/docs" className="flex items-center px-6 py-3 text-gray-700 bg-neutral-300 rounded-md hover:bg-gray-200 hover:text-gray-600">
                                            Documentation&nbsp;
                                            <FaLink />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="w-full h-80 overflow-hidden rounded-md shadow-xl sm:rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${imgFront})` }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero