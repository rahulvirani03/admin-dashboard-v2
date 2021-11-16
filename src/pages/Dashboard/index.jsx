import React from 'react'
import Component from '@components/DashboardContainer'
import { withContext } from '@components/hoc';

function Dashboard({ home }) {
    return (
        <>
            <Component home={home} />
        </>
    )
}
export default withContext(Dashboard)