import React, { Component } from 'react'
import CategoryList from '../CategoryList/CategoryList'
import SearchBar from '../SearchBar/SearchBar'
import NewsCard from '../NewsCard/NewsCard'
var arrayNews = []
let url = ''
let previousTitle = ''
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
export default class NewsSection extends Component {
 
    state = {
        load : true , 
        searchTerm  : '' ,
        catName : 'general' , 
        newsResults : [] , 
        artLength : 0
    }

    componentDidMount = () => {
        
        console.log("Mount")
        // if(this.state.catName == '')
        // {
        //   url =   `https://newsapi.org/v2/top-headlines?q=${this.state.searchTerm}&category=general&apiKey=8ede2e78e9ad4dd1b744a17218d23def`
        // }
        // else
 url = `https://newsapi.org/v2/top-headlines?pageSize=100&q=${this.state.searchTerm}&category=${this.state.catName}&apiKey=8ede2e78e9ad4dd1b744a17218d23def`
        


        this.fetchItem(url)
    }

    fetchItem = (url) => {
        
        fetch(url)
        .then(result => result.json())
        .then(result => {
          

            this.state.newsResults = []
            arrayNews = []

            for(var i =0 ; i<result.articles.length ;i++)
            {
                
                var a = lngDetector.detect( result.articles[i].description ? result.articles[i].description : result.articles[i].content    , 1)
            
                if(a.length == 1 && a[0][0] == 'english' && a[0][1] > 0.2 && (result.articles[i].title !== previousTitle) &&
              ( result.articles[i].description !== null && result.articles[i].description !== "") && ( result.articles[i].author !==null && result.articles[i].author !=="" ) && (result.articles[i].source.name !==null && result.articles[i].source.name !=="") && 
              (result.articles[i].content !== "" && result.articles[i].content !== null )&&
               (result.articles[i].url !=="" && result.articles[i].url !==null)  && (result.articles[i].urlToImage !== "" && result.articles[i].urlToImage !== null)  
                )
                {
                  
                    // dataArray[index] = {...result.articles[i]}
                    // if(index == 6)
                    // {
                    //   this.setState({load  : false})
                    // }
  
                    // break

                    previousTitle = result.articles[i].title
                    arrayNews.push(result.articles[i])
                }
                
                
            }


            // console.log(arrayNews)
            this.setState({newsResults : [...this.state.newsResults , ...arrayNews] , load:false})
            
            // console.log(this.state.newsResults)
        })
    }
 
    searchItems = (searchTerm) =>{
 
        this.setState({  
            load : true,
            searchTerm : searchTerm
        })
   
        console.log(this.state.searchTerm)
       this.fetchItem(`https://newsapi.org/v2/top-headlines?pageSize=100&q=${this.state.searchTerm}&category=${this.state.catName}&apiKey=8ede2e78e9ad4dd1b744a17218d23def`)
    }
 
    categoryName = (catName) => {
        this.setState({  
            load : true,
            catName : catName
        })
        console.log(this.state.catName)
       this.fetchItem(`https://newsapi.org/v2/top-headlines?pageSize=100&q=${this.state.searchTerm}&category=${this.state.catName}&apiKey=8ede2e78e9ad4dd1b744a17218d23def`)

    }

    render() {
        return (
            <div>
                <CategoryList callback={this.categoryName} />
                <SearchBar callback={this.searchItems} />
                <NewsCard resultNews={this.state.newsResults} load = {this.state.load}  />
            </div>
        )
    }
}
