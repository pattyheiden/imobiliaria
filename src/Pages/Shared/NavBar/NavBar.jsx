import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.svg';
import { Menu } from '@headlessui/react';
import { RiCustomerService2Fill, RiWhatsappLine, RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <header className="py-3 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link to='/'><img src={Logo} alt="" /></Link>
                {/* buttons */}
                <div className='flex items-center'>
                    <Menu as="div" className="dropdown relative">
                        <Menu.Button /*onClick={() => setIsOpen(!isOpen)}*/ className='flex h-[64px] items-center px-[18px] w-full text-left'>
                            <RiWhatsappLine className="text-2xl mr-[18px] trans ition text-primary hover:text-slate-600" />     
                            <RiFacebookCircleFill className="text-2xl mr-[18px] trans ition text-primary hover:text-slate-600" />
                            <RiInstagramFill className="text-2xl mr-[18px] trans ition text-primary hover:text-slate-600" />        
                            <RiCustomerService2Fill className="text-2xl mr-[18px] trans ition text-primary hover:text-slate-600" />                   
                        </Menu.Button>
                    </Menu>

                    {/* <Link to='/login' className='relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group'>
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-purple-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-purple-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-purple-600 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span>
                    </Link>

                    <Link to='/register' className='rounded relative inline-flex group items-center justify-center px-3.5 py-[6px] ms-2 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white'>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                        <span className="relative">Register</span>
                    </Link> */}
                </div>
            </div>
        </header>
    )
}

export default Navbar