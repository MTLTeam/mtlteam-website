import React from 'react'
import { getApps } from '../../../../config/apps/AppDataManager'
import AppCategoryItem from './widgets/AppCategoryItem';

export default function AppList({ list }) {
    let appData = getApps(list);

    console.log(appData);

    return (
        <div className="grid sm:grid-cols-5 pb-6">
            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

            {/* Our portfolio */}
            <div className="sm:col-span-3">
                {
                    appData.appCategories.map((item, index) => {
                        return (
                            <AppCategoryItem
                                key={index}
                                list={item} />
                        )
                    })
                }
            </div>

            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

        </div>
    )
}
