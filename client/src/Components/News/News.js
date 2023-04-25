import React, { Component } from 'react';
import "./News.css";


const json = require('../../jsons/test.json')


class News extends Component {
    render() {
        return (
            <div className="news-container">
                <h2 className="news-heading">Latest news</h2>
                <table className="news-table">
                    <tr className="news-headers">
                        <th>Title</th>
                        <th>URL</th>
                        <th>Source</th>
                    </tr>
                    {json.map((article, key) => {
                        return (
                            <tr className="news-values" key={key}>
                                <td>{article.title}</td>
                                <td><a href={article.url} className="orange-link">{article.url}</a></td>
                                <td>{article.source}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default News;



/*
class News extends Component {
    render() {
        return (
            <div>

                <h2>Latest news</h2>
                <table>

                    <tr className="Headers">

                    </tr>

                    {json.map((article, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>{article.title}</td>
                                <td><a href={article.url}> {article.url} </a> </td>
                                <td>{article.source}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        )
    }
}
export default News;
*/