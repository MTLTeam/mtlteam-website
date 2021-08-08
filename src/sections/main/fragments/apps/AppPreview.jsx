import React from 'react'
import { getApp } from '../../../../config/apps/AppDataManager'

export default function AppPreview(props) {

    let list = props.match.params.list;
    list = list.slice(1, list.length)

    let app = props.match.params.app;
    app = app.slice(1, app.length)

    let application = getApp(list, app)

    console.log(application);

    function getPath(path) {
        let p = path.slice(1, path.length);
        return "../.." + p;
    }

    return (
        <div className="w-full sm:grid sm:grid-cols-7 pb-6">
            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

            <div className="sm:col-span-5">

                {/* App Things here... */}
                <div className="sm:my-12 flex justify-center">

                    {/* App icon here... */}
                    <img
                        className="h-28 w-28 sm:h-48 sm:w-48 m-4 sm:m-6 sm:mr-12 rounded-2xl"
                        src={getPath(application.appIcon)} alt="appIcon" />

                    {/* Title, Punch line, Download button here... */}
                    <div className="pt-6">
                        <div className="font-bold text-xl sm:text-4xl text-gray-900">
                            {application.appName}
                        </div>
                        <div className="mt-4 font-bold text-md text-gray-500">
                            {application.appPunchLine}
                        </div>

                        <img className="w-28 sm:w-40 m-4"
                            src="../../img/g-play-button.png" alt="play store" />
                    </div>
                </div>

                {/* App screenshots here... */}
                <div className="mt-8">
                    <div className="py-2 px-5 font-bold text-xl text-gray-600">
                        Screenshots
                    </div>

                    <div className="flex overflow-x-scroll">
                        {
                            application.appScreenShots.map((ssImage, index) => {
                                return (
                                    <div key={index}
                                        className="inline-blocks m-3">
                                        <div className="w-40 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                            <img className="w-full h-full"
                                                src={getPath(ssImage.image)} alt="play store" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Descriptions here... */}
                <div className="mt-8">
                    <div className="py-2 px-5 font-bold text-xl text-gray-600">
                        Descriptions
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-500">
                            {application.appShortDescription}
                        </div>
                        <div className="mt-8 font-medium text-gray-500">
                            {application.appLongDescription}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

        </div>
    )
}
