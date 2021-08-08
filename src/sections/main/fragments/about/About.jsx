import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="sm:grid sm:grid-cols-7 pb-6">
                <div className="sm:col-span-1">
                    {/* Empty */}
                </div>

                {/* Privacy policy */}
                <div className="sm:col-span-7">
                    <div className="w-full flex justify-center text-gray-800 text-xl sm:text-3xl font-bold">
                        About us
                    </div>
                    <div className="mt-8 text-gray-600">
                        MTLTeam is a mobile development and publishing company, located in India.
                    </div>

                    <div className="mt-8 text-gray-600">
                        The company was founded in 2020 and we work closely with some of the top companies from the gaming industry and have a portfolio of over 50+ mobile apps and games that have been downloaded more than 100M times. MTLTeam is a privately held, bootstrapped company, meaning it operates on its own profits without external investors up to date.
                    </div>
                </div>

                <div className="sm:col-span-1">
                    {/* Empty */}
                </div>

            </div>
        )
    }
}
