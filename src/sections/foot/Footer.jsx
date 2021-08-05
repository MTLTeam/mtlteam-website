// importing libraries
// importing components
import React, { Component } from 'react'
import BotPart from './BotPart'
import TopPart from './TopPart'
// importing styles or resources
// importing actions or operations or function

export default class Footer extends Component {
    render() {
        return (
            <footer className="m-1 bg-indigo-600 rounded py-8 sm:py-8">
                <TopPart/>
                <BotPart />
            </footer>
        )
    }
}
