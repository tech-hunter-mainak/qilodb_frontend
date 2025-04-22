import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const [hasShadow, setHasShadow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDownloadClick = () => {
        navigate('/download');
        setMenuOpen(false); // close menu on mobile after click
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        navigate('/');
        setMenuOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
            });
        }, 100);
    };

    return (
        <div>
            <section className={`w-full px-6 text-gray-700 bg-white fixed z-50 ${hasShadow ? 'shadow-2xl' : 'shadow-none'} transition-all duration-300 ease-in-out`}>
                <div className="container flex flex-wrap items-center justify-between py-5 mx-auto max-w-7xl">
                    {/* Logo and Toggle */}
                    <div className="flex justify-between w-full md:w-auto items-center">
                        <Link to="/" className="flex items-center font-medium text-gray-900">
                            <img src="favicon.ico" alt="Logo" className='w-28 -m-4 -p-2' />
                        </Link>
                        <button 
                            className="md:hidden text-gray-700 focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen ? 'true' : 'false'}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className={`flex-col md:flex-row md:flex md:items-center md:static absolute top-full left-0 w-full md:w-auto bg-white transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'flex' : 'hidden'}`}>
                        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900" onClick={() => handleNavClick('top')}>Home</button>
                        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900" onClick={() => handleNavClick('features')}>Features</button>
                        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900" onClick={() => { navigate('/docs'); setMenuOpen(false); }}>Docs</button>
                        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900" onClick={handleDownloadClick}>Download</button>
                    </nav>

                    {/* Contribute Button */}
                    <div className="hidden md:inline-flex items-center space-x-6">
                        <Link to="https://github.com/tech-hunter-mainak/dbms" target='_blank' className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Contribute
                        </Link>
                    </div>
                </div>

                {/* Mobile-only contribute button */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4">
                        <Link to="https://github.com/tech-hunter-mainak/dbms" target='_blank' className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-500 rounded-md shadow hover:bg-indigo-500">
                            Contribute
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
}

export default NavBar;
