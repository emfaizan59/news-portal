import React, { Component } from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'
import NewsSection from '../NewsSection/NewsSection'

export default class Home extends Component {
    render() {
        return (
<div>
            <Header />
            <Carousel />

            <NewsSection />
            </div>
        )
    }
}
