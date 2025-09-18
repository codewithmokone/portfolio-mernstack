import React from 'react'
import { HomeIcon, GraduationCap, User, PanelsTopLeft,LogOutIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();
    const navigation = [
        {
            name: 'Dashboard',
            href: '/',
            icon: HomeIcon,
        },
        {
            name: 'About',
            href: '/about',
            icon: User,
        },
        {
            name: 'Skills',
            href: '/skills',
            icon: GraduationCap,
        },
        {
            name: 'Projects',
            href: '/projects',
            icon: PanelsTopLeft,
        }
    ];

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <aside className='hidden md:flex flex-col w-54 bg-[#262932] border-r border-gray-200'>
            <div className='flex items-center justify-center h-16'>
                <h2 className='text-2xl font-bold text-blue-500'>Portfolio</h2>
            </div>
            <div className='flex flex-col justify-between flex-1 overflow-y-auto'>
                <nav className='flex-1 px-2 py-4 space-y-1'>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`
                                flex items-center px-4 py-3 text-sm font-medium rounded-lg
                                ${isActive(item.href) ? 'bg-[#333645] text-blue-400' : 'text-gray-500 hover:bg-blue-50 hover:text-blue-700'}
                            `}
                        >
                            <item.icon
                                className={`mr-3 h-5 w-5 ${isActive(item.href) ? 'text-blue-400' : 'text-gray-400'}`}
                            />
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="px-2 py-4 space-y-1">
                    <button className="flex w-full items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-500">
                        <LogOutIcon className="mr-3 h-5 w-5 text-gray-400" />
                        Log out
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar