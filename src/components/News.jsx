import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
{/*import InfiniteScroll from 'react-infinite-scroll-component'*/ }


class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pagesize: 6
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number
  }

  articles = []
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      totalResults: 38
    }
    document.title = `${this.props.category}-TBP News`
  }


  
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url)
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData)
    this.setState(
      {
        articles: parsedData.articles,
        totalResults: parsedData.totalResults, // Store totalResults
        loading: false // Stop spinner after data loads
       

      })
      this.props.setProgress(100);
  }

  /* fetchMoreData=async()=>{
     this.setState({page:this.state.page+1})
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d01e1ae5d1964eb181cf111e97e3689e&page=1&pagesize=${this.props.pagesize}`
     this.setState({loading:true})
     let data = await fetch(url)
     let parsedData = await data.json()
     console.log(parsedData)
     this.setState(
       {
         articles:this.state.articles.concat(parsedData.articles) ,
         totalResults: parsedData.totalResults, // Store totalResults
         loading: false // Stop spinner after data loads
 
 
       })
   }*/
  handlePrevClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url)
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData)
    this.setState(
      {
        page:this.state.page-1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults, // Store totalResults
        loading: false // Stop spinner after data loads


      })
      this.props.setProgress(100);
    
  }

  handleNextClick = async () => {
    if(this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pagesize)){
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
      this.setState({loading:true})
      let data = await fetch(url)
      this.props.setProgress(30);
      let parsedData = await data.json()
      this.props.setProgress(70);
      console.log(parsedData)
      this.setState(
        {
          page:this.state.page+1,
          articles: parsedData.articles,
          totalResults: parsedData.totalResults, // Store totalResults
          loading: false // Stop spinner after data loads
  
  
        })
        this.props.setProgress(100);
    }
   
    
   

  }

  render() {
    return (
    <div className="container-my3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>TBP News-Top Headlines category-{this.props.category}</h1>
        {this.state.loading && <Spinner/>} 

        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage ? element.urlToImage : ""} newsurl={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name}> </NewsItem>
              </div>
            })}
          </div>
          <div className="container  d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>

        </div>

        </div>


    )
  }
}


export default News