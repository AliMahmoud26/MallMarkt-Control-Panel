'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/logo.png';
import { FaChevronLeft, FaChartBar, FaShoppingCart, FaUsers, FaCog, FaComments, FaShieldAlt, FaQuestionCircle, FaCompass, FaHome, FaRegChartBar } from 'react-icons/fa';
// import Logout from '../[login]/logout';
import Link from 'next/link';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('Dashboard');

    const menuItems = [
        {
            name: "Dashboard",
            icon: <FaHome />,
            href: '/dashboard'
        },
        {
            name: "Analytics",
            icon: <FaChartBar />,
            href: '/dashboard/analytics'
        },
        {
            name: "Explore",
            icon: <FaCompass />,
            href: '/dashboard/explore'
        },
        {
            name: "Shop",
            icon: <FaShoppingCart />,
            href: '/dashboard/shop'
        },
        {
            name: "Customers",
            icon: <FaUsers />,
            href: '/dashboard/customers'
        },
        {
            name: "Chat",
            icon: <FaComments />,
            href: '/dashboard/chat'
        },
        {
            name: "Settings",
            icon: <FaCog />,
            href: '/dashboard/settings'
        },
        {
            name: "Help",
            icon: <FaQuestionCircle />,
            href: '/dashboard/help'
        },
        {
            name: "Privacy",
            icon: <FaShieldAlt />,
            href: '/dashboard/privacy'
        },
    ]

    const handleItemClick = (item) => {
        setActiveItem(item)
    }

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <aside className={`h-screen ${isCollapsed ? 'w-[80px]' : 'w-[250px]'}`}>
            <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                <div className="flex justify-between items-center p-[20px] border-b-2 mb-[30px] cursor-pointer">
                    <Link href='/dashboard' className="flex items-center gap-1">
                        <Image src={Logo} alt="Logo" width={40} height={40} className={`${isCollapsed ? 'hidden' : ''}`} />
                        {!isCollapsed && <span className='text-xl'>MallMarkt</span>}
                    </Link>
                    <button onClick={toggleSidebar} className='p-2 rounded-lg text-sky-500 bg-gray-100 hover:bg-gray-200'>
                        <FaChevronLeft className={`${isCollapsed ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                <ul className='sidebar flex flex-col ms-[10px] flex-1 px-3'>
                    {
                        menuItems.map((item) => (
                                <Link
                                href={item.href}
                                key={item.name}
                                className={`text-xl mb-3 p-2 cursor-pointer font-semibold rounded-lg duration-500 flex items-center gap-3
                                ${activeItem == item.name ? 'bg-sky-500 text-white translate-x-[5px]' : 'text-gray-700 hover:text-sky-500 hover:bg-gray-200 hover:translate-x-[5px]'}
                                ${isCollapsed ? 'w-[40px]' : 'w-[200px]'} overflow-hidden transition-all duration-300`}
                                onClick={() => handleItemClick(item.name)}
                                >
                                    <span>{item.icon}</span>
                                    <span className={`${isCollapsed ? 'hidden' : 'whitespace-nowrap'}`}>{item.name}</span>
                                </Link>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar