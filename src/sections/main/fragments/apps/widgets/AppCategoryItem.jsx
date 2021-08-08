import React from 'react'
import { useHistory } from 'react-router-dom';
import { getAppCount } from '../../../../../config/apps/AppDataManager'

export default function AppItem({ list }) {
    let history = useHistory();

    function previewApp(categoryId, appId) {
        history.push(`/preview/:${categoryId}/:${appId}`);
    }

    console.log(list)
    return (
        <div className="my-4 bg-gray-100 shadow rounded">
            {/* Category details here... */}
            <div className="p-2 border-b-2">
                <div className="text-gray-500 font-bold text-lg">
                    {list.categoryName}
                </div>
                <div className="text-gray-400">
                    {getAppCount(list.apps.length, list.categoryType)}
                </div>
            </div>

            <div className="p-4">
                {/* Apps display here... */}
                {
                    list.apps.map((item, index) => {
                        console.log(item.appIcon);
                        return (
                            <div key={index}
                                className="m-4 bg-white w-48 rounded shadow cursor-pointer"
                                onClick={() => previewApp(list.categoryId, item.appId)}>

                                {/* App image here... */}
                                <div className="w-full flex justify-center bg-red-100 rounded">
                                    <img
                                        className="h-32 w-32 m-4 rounded-md"
                                        src={item.appIcon} alt="appIcon" />
                                </div>

                                {/* App name here... */}
                                <div className="">
                                    <div className="px-4 font-medium">
                                        {item.appName}
                                    </div>
                                    <div className="flex justify-end">
                                        <a href={item.links.appStore}>
                                            <img
                                                className="w-24 m-4"
                                                src="./img/g-play.png" alt="play store" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
