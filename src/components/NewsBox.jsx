import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class NewsBox extends Component {
  constructor(props) {
    // It is called when an object of NewsBox will be formed
    super(props); // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    // Creating a state for articles because they will gonna change dynamically    
    this.state = {
      articles: [],
      loading: false,
      page: 1,    
    };   
  }

  async componentDidMount() { // call only once for the first render if u want to call after every render componentDidUpdate is used        
    try {
      let url =
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fccd4de5b6564c639006eaebda4cc663&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log("Mounted in newsbox")      

      this.setState({loading : true})
      let data = await fetch(url);
      let finalData = await data.json();     
      !this.state.loading && this.setState({
        articles: finalData.articles,        
        page : 1,     
        totalPages : finalData.totalResults   
      });
    } catch (error) {
      console.log("ERROR ",error)
    }
    this.setState({loading : false})
  }

  async componentDidUpdate(prevProps){
    // console.log(prevProps)
    if(prevProps.category !== this.props.category){
      try {
        let url =
          `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fccd4de5b6564c639006eaebda4cc663&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log(url)      
  
        this.setState({loading : true})
        let data = await fetch(url)
        let finalData = await data.json()  
        (!this.state.loading)&&this.setState({
          articles: finalData.articles,          
          page : 1,     
          totalPages : finalData.totalResults   
        });
      } catch (error) {
        console.log("ERROR ",error)        
      }
      this.setState({loading : false})
    }
  }

  async componentWillUnmount(){
    console.log("unmounting from newsbox")
    try {
      let url =
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fccd4de5b6564c639006eaebda4cc663&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log("Mounted in newsbox")      

      this.setState({loading : true})
      let data = await fetch(url);
      let finalData = await data.json();     
      this.setState({loading : false})
      !this.state.loading && this.setState({
        articles: finalData.articles,        
        page : 1,     
        totalPages : finalData.totalResults   
      });
    } catch (error) {
      console.log("ERROR ",error)
    }
  }

  handlePrevious = async()=>{    
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fccd4de5b6564c639006eaebda4cc663&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    this.setState({loading : true})
    let data = await fetch(url);
    let finalData = await data.json();            
    this.setState({
      articles: finalData.articles,      
      page: this.state.page - 1,
    }, () => {
        // Callback function to be executed after state has been updated
        window.scrollTo({top: 0, behavior: "smooth"});
    });
    this.setState({loading : false})
  }

  handleNext = async()=>{        
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fccd4de5b6564c639006eaebda4cc663&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    this.setState({loading : true})
    let data = await fetch(url);
    let finalData = await data.json();      
    // If there is data to display then only navigate to next page    
    if(finalData.articles.length > 0){
      // console.log(finalData.articles)
      this.setState({
        articles: finalData.articles,        
        page : this.state.page+1
      },
        // Callback function to be executed after state has been updated
        () => {
          window.scrollTo({top:0,behavior:"smooth"})
        }
      )
    this.setState({loading : false})
    }      
    else{
      // console.log(finalData.articles)
      this.setState({        
        page : this.state.page,        
      })
    }    
  }
    
  render() {      
    // console.log("NewsBox: ",this.props.category)
    return (
      <>        
        {this.state.loading && <Spinner/>}
        <h1 id="headline" className="text-4xl my-6 text-center tracking-widest text-white underline underline-offset-8 decoration-orange-600">NEWS 360 TOP HEADLINES - <span className="text-orange-600 underline underline-offset-8 decoration-white">{this.props.category.toUpperCase()}</span></h1>
        <div className="flex flex-wrap bg-[#171717] text-white h-max">          
          {/* Titles, description are such things which are not gonna change dynamically they are simply passed as props */}
          {!this.state.loading && this.state.articles.map((article) => {            
            return (
               article && article.title!=='[Removed]' &&
              <NewsItem
                key={article.url}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                date={article.publishedAt}
              />
            );
          })}
        </div>
                
        
        {!this.state.loading && <div className="page text-white flex justify-between m-4">
          <button disabled={this.state.page<=1?true:false} className={`bg-orange-700 rounded p-1 ${this.state.page<=1?'invisible':""}`} onClick={this.handlePrevious}>← PREV</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalPages/this.props.pageSize)?true:false} className={`bg-orange-700 rounded p-1 ${this.state.page>=Math.ceil(this.state.totalPages/this.props.pageSize)?"invisible":""}`} onClick={this.handleNext}>NEXT →</button>
        </div>}
      </>
    );
  }
}


