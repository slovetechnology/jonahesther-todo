import DarkFooter from '@/components/general/DarkFooter'
import SearchHeader from '@/components/general/SearchHeader'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
           <SearchHeader />
            {children}
            <DarkFooter />
        </div>
    )
}

export default layout