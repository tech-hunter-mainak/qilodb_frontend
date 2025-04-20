import { Link } from "react-router-dom"
import apple from "./apple.svg"
import linux from "./ubuntu.svg"
import windows from "./windows.svg"
function Download() {
    return (
        <div className="bg-white !py-24 text-black">
            <div className="flex flex-col items-center justify-center w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center w-full max-w-2xl text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">Download QiloDB</h2>
                    <p className="mt-4 text-lg text-gray-500">Get started with QiloDB by downloading the latest version. It's free and open-source!</p>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <a href="/" className="flex flex-col gap-4 items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-neutral-300 border border-transparent rounded-md shadow-sm hover:!bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:!ring-indigo-500">
                            <img src={windows} alt="" className="w-20" />
                            <div className="ml">Download for Windows</div>
                        </a>
                        <a href="/" className="flex flex-col gap-4 items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-neutral-300 border border-transparent rounded-md shadow-sm hover:!bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img src={apple} alt="" className="w-20" />
                            <div className="ml2">Download for Mac</div>
                        </a>
                        <a href="/" className="flex flex-col gap-4 items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-neutral-300 border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img src={linux} alt="" className="w-20" />
                            <div className="ml2">Download for Linux</div>
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">Need help? Check out our <Link to="/docs" className="font-medium text-indigo-600 hover:text-indigo-500">documentation</Link> or <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">community forum</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Download