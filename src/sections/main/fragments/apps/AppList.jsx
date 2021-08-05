import React from 'react'
import { getApps } from '../../../../config/apps/AppDataManager'

export default function AppList({ list }) {
    return (
        <div className="h-96">
            {
                getApps(list)
            }
        </div>
    )
}
