import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import React from 'react'
import { ReactNode } from 'react'

// interface Props {
//   children: ReactNode | ReactNode[]
// }

const BaseLayout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='w-full overflow-y-scroll'>
          <Topbar />
          {children}
      </div>
    </div>
  )
}

export default BaseLayout