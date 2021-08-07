import React from 'react'
import { getApp } from '../../../../config/apps/AppDataManager'

export default function AppPreview(props) {

    let list = props.match.params.list;
    list = list.slice(1, list.length)

    let app = props.match.params.app;
    app = app.slice(1, app.length)

    let application = getApp(list, app)

    console.log("app: ", application);

    return (
        <div>
            Preview
        </div>
    )
}
