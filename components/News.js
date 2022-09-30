import React from 'react'
import NewsItem from './NewsItem'
import data from '../samplenews.json'

const News = () => {
    const articles = data.articles

    return (
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-3  h-screen place-items-center">
                    {articles.map((element) => {
                        return <div className="" key={element.id}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })};
                </div>
            </div>
    )
}

export default News