import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,newsUrl,imageUrl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/12/0/0/durango-casino-vegas.gif?ve=1&tl=1":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='card-title'>{title}</h5>
                            <p className="card-text">{!description?"the description of the news is not availabe , click to see more about this news" :description}...</p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}
