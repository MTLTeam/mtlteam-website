// importing libraries
// importing components
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Publish from '../app-publishing/Publish'
import About from './fragments/about/About'
import AppList from './fragments/apps/AppList'
import Contact from './fragments/contact/Contact'
import Home from './fragments/home/Home'
import PP from './fragments/pp/PP'
// importing styles or resources
// importing actions or operations or function

export default class MainPage extends Component {
    render() {
        return (
            <div className="mx-1 my-4 p-4 rounded shadow-lg bg-gray-200">

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/apps' exact component={AppList} />
                    <Route path='/apps' exact component={AppList} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/publish' exact component={Publish} />
                    <Route path='/privacy-policy' exact component={PP} />
                </Switch>

            </div>
        )
    }
}
