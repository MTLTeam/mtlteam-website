// importing libraries
// importing components
import React from 'react'
// importing styles or resources
// importing actions or operations or function
import { constants } from '../../config/constants'

export default function BotPart() {
    return (
        <div className="grid grid-cols-5">

            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

            <div className="col-span-5 sm:col-span-3 border-t pt-4 flex items-center justify-center text-center text-white">
                {
                    constants.copy_write.clam_message
                }
            </div>

            <div className="sm:col-span-1">
                {/* Empty */}
            </div>
        </div>
    )
}
