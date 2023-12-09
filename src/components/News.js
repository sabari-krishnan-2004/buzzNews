import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [

  ]
  constructor() {
    super();
    console.log("i am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1

    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=230a226b99dd42dea358e64ea7909a5b&page=1pageSize=20"
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults })
  }
  handlenext = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=230a226b99dd42dea358e64ea7909a5b&page=${this.state.page + 1}&pageSize=20`
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({ articles: parseddata.articles })

      this.setState({
        page: this.state.page + 1,
      })
    }
  }
  handleprev = async () => {
    console.log("prev")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=230a226b99dd42dea358e64ea7909a5b&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({ articles: parseddata.articles })

    this.setState({
      page: this.state.page - 1,
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>breaking BuzzNews</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}


        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} class="btn btn-dark" onClick={this.handleprev}>&larr; prev page</button>
          <button type="button" class="btn btn-dark" onClick={this.handlenext}>Next page &rarr;</button>
        </div>
      </div>
    )
  }
}
