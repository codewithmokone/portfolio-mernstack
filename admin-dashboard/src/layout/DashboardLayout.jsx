import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function DashboardLayout({children}) {
  return (
    <div className='flex h-screen bg-gray-50'>
        <Sidebar />
        <div className='flex flex-col flex-1 overflow-hidden'>
            <Header />
            <main className='flex-1 overflow-y-auto p-4 md:p-6'>{children}</main>
        </div>
    </div>
  )
}

export default DashboardLayout