// importing libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'
// importing components
import Publish from '../app-publishing/Publish'
import About from './fragments/about/About'
import AppList from './fragments/apps/AppList'
import Contact from './fragments/contact/Contact'
import Home from './fragments/home/Home'
import PP from './fragments/pp/PP'
// importing styles or resources
// importing actions or operations or function
import useQuery from '../../hooks/useQuery'
import AppPreview from './fragments/apps/AppPreview'

export default function Main() {
    let query = useQuery();

    console.log("display: ", query.get("list"));

    return (
        <div className="mx-1 my-4 p-4 rounded shadow-lg bg-gray-200">
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/apps'>
                    <AppList
                        list={query.get("list")} />
                </Route>
                <Route path='/preview/:list/:app' component={AppPreview} />
                {/* <Route path='/apps?list=quizs' exact component={AppList} />
                    <Route path='/apps?list=puzzles' exact component={AppList} /> */}
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/publish' exact component={Publish} />
                <Route path='/privacy-policy' exact component={PP} />
            </Switch>

        </div>
    )
}

