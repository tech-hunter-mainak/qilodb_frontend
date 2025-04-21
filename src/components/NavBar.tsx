import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
function NavBar() {
    const navigate = useNavigate()
    const handleDownloadClick = () => {
        navigate('/download')
    }
    const [hasShadow, setHasShadow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setHasShadow(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return (
        <div>
            <section className={`w-full px-8 text-gray-700 bg-white fixed z-50 ${hasShadow ? '!shadow-2xl' : '!shadow-none'} transition-all duration-300 ease-in-out`}>
                <div className="container flex flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="flex flex-row items-center justify-between lg:justify-start gap">
                        <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <img src="favicon.ico" alt="" className='w-28 -m-4 -p-2' />
                        </Link>
                        <nav className="md:flex sm:flex-wrap bg-white md:items-center md:relative absolute text-base md:mb-0 md:ml-8 md:border-l md:border-gray-200 left-0 top-0 w-auto flex flex-col items-start md:flex-row pt-10 md:pt-0 pl-4 md:pl-0">
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 !px-2" onClick={()=>{navigate('/'); document.getElementById('top')?.scrollIntoView({
                                behavior: 'smooth'
                            })}}>Home</button>
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 !px-2" onClick={()=>{navigate('/'); document.getElementById('features')?.scrollIntoView({
                                behavior: 'smooth'
                            })}}>Features</button>
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 !px-2" onClick={()=>navigate('/docs')}>Docs</button>
                            <button className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 !px-2" onClick={handleDownloadClick}>Download</button>
                        </nav>
                    </div>
                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <Link to="https://github.com/tech-hunter-mainak/dbms" target='_blank' className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Contribute
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavBar