import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   articles=[
   
   ]
    constructor(){
        super();
        console.log("i am a constructor");
        this.state={
            articles:this.articles,
            loading:false

        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=230a226b99dd42dea358e64ea7909a5b"
        let data =await fetch(url);
        let parseddata=await data.json();
        console.log(parseddata);
        this.setState({articles:parseddata.articles})
    }
  render() {
    return (
      <div className='container'>
        <h1>breaking BuzzNews</h1>
        <div className='row'>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
            
           
        </div>
        
      </div>
    )
  }
}
