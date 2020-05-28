import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './Carousel.css'
import { Grid , Loader} from 'semantic-ui-react';

const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

const arrayUrl = [ "https://newsapi.org/v2/top-headlines?pageSize=20&category=business&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    "https://newsapi.org/v2/top-headlines?pageSize=20&category=entertainment&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    "https://newsapi.org/v2/top-headlines?pageSize=20&category=general&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    "https://newsapi.org/v2/top-headlines?pageSize=20&category=health&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    "https://newsapi.org/v2/top-headlines?pageSize=20&category=science&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    "https://newsapi.org/v2/top-headlines?pageSize=20&category=sports&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    "https://newsapi.org/v2/top-headlines?pageSize=20&category=technology&apiKey=8ede2e78e9ad4dd1b744a17218d23def" ,
                    ]

const dataArray = []
const date = new Date()
const category = ["Category: Buisness","Category: Entertainment","Category: General","Category: Health","Category: Science",
"Category: sports" , "Category: technology"]
export default class Carousel extends Component {

  state={
    load : true
  }


  componentDidMount = () => {
    for(var i = 0 ; i< 7 ; i++)
    {
      this.fetchItem(arrayUrl[i],i)
    }
    
    console.log(dataArray)
  }



  fetchItem = (url , index) => {
   
      
      fetch(url)
      .then(result => result.json())
      .then(result => {
          
          // console.log(result.articles)
          
          for(var i =0 ; i<20 ;i++)
          {
        
              var a = lngDetector.detect( result.articles[i].description !== null && result.articles[i].description !== ""  ? result.articles[i].description : result.articles[i].content    , 1)
          
              if(a.length == 1 && a[0][0] == 'english' && a[0][1] > 0.2 &&
            ( result.articles[i].description !== null && result.articles[i].description !== "") && ( result.articles[i].author !==null && result.articles[i].author !=="" ) && (result.articles[i].source.name !==null && result.articles[i].source.name !=="") && 
            (result.articles[i].content !== "" && result.articles[i].content !== null )&&
             (result.articles[i].url !=="" && result.articles[i].url !==null)  && (result.articles[i].urlToImage !== "" && result.articles[i].urlToImage !== null)  
              )
              {
                
                  dataArray[index] = {...result.articles[i]}
                  if(index == 6)
                  {
                    this.setState({load  : false})
                  }

                  break
              }
              
          }

      })
  }
  render() {
      const settings =  {
        accessibility: false,
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true ,
        duration: 500
      };
      return (
<div>
    {this.state.load ? 
    
      <div className="carouselMain">
      <div>

      <div className="loadMain">

<h1 className="headlineLoad">TODAY HEADLINES</h1>

<h1 className="date">{date.toDateString()}</h1>


<Loader active />
</div>

       </div>
     </div >
:
       
        <div>
<Slider { ...settings }>
{dataArray.map( (element , i) => (

      <div  key={i}>
      <div  className="carouselMain"   >



    <Grid className="gridMain" columns='equal' >
      
        <Grid.Column style={{paddingLeft : '20px' , border : 'black'}} >
        <div className="childMain">

<h1 className="headline">TODAY HEADLINES</h1>

<h1 className="category">{category[i]}</h1>
<h1 className="title">{element.title}</h1>
<span>Author: {element.author} </span>
<span>Published at : {element.publishedAt}</span>
<p className="descHead">Description:</p>
<p className="desc">{element.description.substring(0,150)}...</p>
<a href={element.url} className="newsLink">Read More</a>

</div>
        </Grid.Column>
        <Grid.Column style={{
          border : 'black',
        background : 
        `linear-gradient(to left, rgba(0,0,0,0.0)
        0%, rgba(0,0,0,0.0)
           5%, rgba(0,0,0,0.10)
           10%, rgba(0,0,0,0.20)
           20%, rgba(0,0,0,0.30)
           30%, rgba(0,0,0,0.40)
           40%, rgba(0,0,0,0.50)
           50%, rgba(0,0,0,0.60)
           60%, rgba(0,0,0,0.70)
           70%, rgba(0,0,0,0.80)
           80%, rgba(0,0,0,0.85)
           100%
        ) ,url('${element.urlToImage}'), #1c1c1c` , backgroundRepeat : 'no-repeat' , backgroundPosition : 'top' , backgroundSize : '100% 100%'
    }}>

        </Grid.Column>
    </Grid>
     
       </div>
     </div >

    ))}
    


  
            {/* <div className="carouselMain">
         <div>
  
             <div className="childMain">
  
              <h1 className="headline">TODAY HEADLINES</h1>
  
             <h1 className="category">Sport News</h1>
              <h1 className="title">A Florida police chief is on leave after he was accused.</h1>
              <span>Author: Scottie Andrew, CNN </span>
              <span>Published at : 2020-04-14 - 02:32</span>
              <p className="desc">A Florida police chief was placed on leave over reports that he suggested a sheriff's deputy who died of coronavirus had gotten infected because he was gay.</p>
              
             </div>
              </div>
            </div >
            
  
            <div className="carouselMain">
         <div>
  
             <div className="childMain">
  
              <h1 className="headline">TODAY HEADLINES</h1>
  
             <h1 className="category">Sport News</h1>
              <h1 className="title">A Florida police chief is on leave after he was accused.</h1>
              <span>Author: Scottie Andrew, CNN </span>
              <span>Published at : 2020-04-14 - 02:32</span>
              <p className="desc">A Florida police chief was placed on leave over reports that he suggested a sheriff's deputy who died of coronavirus had gotten infected because he was gay.</p>
              
             </div>
              </div>
            </div >
            
  
  
            <div className="carouselMain">
         <div>
  
             <div className="childMain">
  
              <h1 className="headline">TODAY HEADLINES</h1>
  
             <h1 className="category">Sport News</h1>
              <h1 className="title">A Florida police chief is on leave after he was accused.</h1>
              <span>Author: Scottie Andrew, CNN </span>
              <span>Published at : 2020-04-14 - 02:32</span>
              <p className="desc">A Florida police chief was placed on leave over reports that he suggested a sheriff's deputy who died of coronavirus had gotten infected because he was gay.</p>
              
             </div>
              </div>
            </div >
            
  
  
            <div className="carouselMain">
         <div>
  
             <div className="childMain">
  
              <h1 className="headline">TODAY HEADLINES</h1>
  
             <h1 className="category">Sport News</h1>
              <h1 className="title">A Florida police chief is on leave after he was accused.</h1>
              <span>Author: Scottie Andrew, CNN </span>
              <span>Published at : 2020-04-14 - 02:32</span>
              <p className="desc">A Florida police chief was placed on leave over reports that he suggested a sheriff's deputy who died of coronavirus had gotten infected because he was gay.</p>
              
             </div>
              </div>
            </div >
            
  
  
            <div className="carouselMain">
         <div>
  
             <div className="childMain">
  
              <h1 className="headline">TODAY HEADLINES</h1>
  
             <h1 className="category">Sport News</h1>
              <h1 className="title">A Florida police chief is on leave after he was accused.</h1>
              <span>Author: Scottie Andrew, CNN </span>
              <span>Published at : 2020-04-14 - 02:32</span>
              <p className="desc">A Florida police chief was placed on leave over reports that he suggested a sheriff's deputy who died of coronavirus had gotten infected because he was gay.</p>
              
             </div>
              </div>
            </div >
            
  
  
            <div className="carouselMain">
         <div>
  
             <div className="childMain">
  
              <h1 className="headline">TODAY HEADLINES</h1>
  
             <h1 className="category">Sport News</h1>
              <h1 className="title">A Florida police chief is on leave after he was accused.</h1>
              <span>Author: Scottie Andrew, CNN </span>
              <span>Published at : 2020-04-14 - 02:32</span>
              <p className="desc">A Florida police chief was placed on leave over reports that he suggested a sheriff's deputy who died of coronavirus had gotten infected because he was gay.</p>
              
             </div>
              </div>
            </div > */}
            
                   </Slider>
                   </div>
          }
          </div>
      );
    }
  }