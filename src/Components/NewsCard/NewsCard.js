import React, { Component } from 'react'
import "./NewsCard.css"
import {Container , Grid, Card , Image ,Header, Icon , Segment , Placeholder , Button } from 'semantic-ui-react'
import Img from 'react-image'

let arrayList = []
let artLength = ''
export default class NewsCard extends Component {

  
    render() {
        arrayList = []
      arrayList = [...this.props.resultNews]
      artLength = arrayList.length
        {console.log(arrayList)}
        let load = this.props.load
        return (

<Container >



<div style={{marginTop : '50px'}}>
{load ? 
 <Placeholder >
 <Placeholder.Header image>
   <Placeholder.Line />
   <Placeholder.Line />
 </Placeholder.Header>
 <Placeholder.Paragraph>
   <Placeholder.Line />
   <Placeholder.Line />
   <Placeholder.Line />
   <Placeholder.Line />
 </Placeholder.Paragraph>
</Placeholder>
:

<div>
{arrayList.length !== 0 ?
<div>
{arrayList.length > 3 ? 
<div>
<Grid columns="equal" stackable={true}  >

<Grid.Row stretched={true} stackable={true}>

<Grid.Column>
<Segment  raised >
    {/* <Image src={arrayList[0].urlToImage || '/images/noImage.jpg'} centered style={{height : '400px' , width:'100%' , marginBottom:'10px'}}  /> */}
    <Img src={[arrayList[0].urlToImage, '/images/noImage.jpg']} style={{height : '400px' , width:'100%' , marginBottom:'10px'}}  />

    <span>Source: {arrayList[0].source.name} </span>
<span>Published at: {arrayList[0].publishedAt}</span>
<Button animated='vertical' color="red" style={{float:"right"}}>
  <Button.Content visible>Fav</Button.Content>
  <Button.Content hidden>
    <Icon name='heart' />
  </Button.Content>
</Button>
    <h2 style={{fontSize : '35px'  }} >{arrayList[0].title}</h2>
    <h4 style={{fontSize : '25px' , marginBottom : '3px' }}>Description</h4>
    <p style={{fontSize : '20px' , marginBottom : '50px' }}>{arrayList[0].description}</p>
 
<a className="readMore" href={arrayList[0].url} >Read More</a>
</Segment>
</Grid.Column>

<Grid.Column >
<Segment  raised >
    {/* <Image src={arrayList[1].urlToImage || '/images/noImage.jpg'} centered style={{height : '170px' , width:'100%' , marginBottom:'10px'}}  /> */}
    <Img src={[arrayList[1].urlToImage, '/images/noImage.jpg']} style={{height : '170px' , width:'100%' , marginBottom:'10px'}} />

    <span>Source: {arrayList[1].source.name}</span>
<span>Published at: {arrayList[1].publishedAt}</span>
<Button animated='vertical' color="red" style={{float:"right"}}>
  <Button.Content visible>Fav</Button.Content>
  <Button.Content hidden>
    <Icon name='heart' />
  </Button.Content>
</Button>
    <h2 style={{fontSize : '20px'  }} >{arrayList[1].title}</h2>
    <h4 style={{fontSize : '15px' , marginBottom : '3px' }}>Description</h4>
    <p style={{fontSize : '13px'  , marginBottom : '50px' }}>{arrayList[1].description}</p>
 
    <a className="readMore" href={arrayList[1].url} >Read More</a>
</Segment>
<Segment  raised >
    {/* <Image src={arrayList[2].urlToImage || '/images/noImage.jpg'} centered style={{height : '170px' , width:'100%' , marginBottom:'10px'}}  /> */}
    <Img src={[arrayList[2].urlToImage, '/images/noImage.jpg']} style={{height : '170px' , width:'100%' , marginBottom:'10px'}} />
    <span>Source: {arrayList[2].source.name}</span>
<span>Published at: {arrayList[2].publishedAt}</span>
<Button animated='vertical' color="red" style={{float:"right"}}>
  <Button.Content visible>Fav</Button.Content>
  <Button.Content hidden>
    <Icon name='heart' />
  </Button.Content>
</Button>
    <h2 style={{fontSize : '20px'  }} >{arrayList[2].title}</h2>
    <h4 style={{fontSize : '15px' , marginBottom : '3px' }}>Description</h4>
    <p style={{fontSize : '13px' , marginBottom : '50px' }}>{arrayList[2].description}</p>
 
    <a className="readMore" href={arrayList[2].url} >Read More</a>
</Segment>
</Grid.Column>

</Grid.Row>

</Grid>

<Grid columns={3} stackable={true}  >

<Grid.Row stretched  >
    
{arrayList.slice(3,artLength).map((element , i) => (



<Grid.Column key={i} style={{marginTop : '20px'}}>
<Segment  raised  stackable>
    {/* <Image src={element.urlToImage || '/images/noImage.jpg'} centered style={{height : '250px' , width:'100%' , marginBottom:'10px'}}  /> */}
    <Img src={[element.urlToImage, '/images/noImage.jpg']} style={{height : '250px' , width:'100%' , marginBottom:'10px'}} />

<span className="spanNews">Source: {element.source.name}</span><br/>
<span className="spanNews">Published at: {element.publishedAt}</span>

<h2 style={{fontSize : '20px' , marginTop : '4px'  }} >{element.title}</h2>
    <h4 style={{fontSize : '15px' , marginBottom : '3px' }}>Description</h4>
<p style={{fontSize : '13px' , marginBottom : '50px' }}>{element.description}</p>
 
<a className="readMore" href = {element.url}>Read More</a>
<Button animated='vertical' className="favBottom" color="red">
  <Button.Content visible>Fav</Button.Content>
  <Button.Content hidden>
    <Icon name='heart' />
  </Button.Content>
</Button>
</Segment>
</Grid.Column>


))}

</Grid.Row>
</Grid>


</div>
:
<Grid columns={3} stackable={true}  >

<Grid.Row stretched={true}>

{arrayList.map((element ,i) => (
    <Grid.Column>
<Segment  raised >
    {/* <Image src={''} centered style={{height : '250px' , width:'100%' , marginBottom:'10px'}}  /> */}
    <Img src={[element.urlToImage, '/images/noImage.jpg']} style={{height : '250px' , width:'100%' , marginBottom:'10px'}} />
    
<span className="spanNews">Source: {element.source.name}</span><br/>
<span className="spanNews">Published at: {element.publishedAt}</span>

<h2 style={{fontSize : '20px' , marginTop : '4px'  }} >{element.title}</h2>
    <h4 style={{fontSize : '15px' , marginBottom : '3px' }}>Description</h4>
<p style={{fontSize : '13px' , marginBottom : '50px'  }}>{element.description}</p>
 
<a className="readMore"  href={element.url}>Read More</a>
<Button animated='vertical' color="red" style={{float:"right"}}>
  <Button.Content visible>Fav</Button.Content>
  <Button.Content hidden>
    <Icon name='heart' />
  </Button.Content>
</Button>
</Segment>
</Grid.Column>

))}

</Grid.Row>
</Grid>


}
 </div>
 
 :
    <h1>No Result Found</h1>
}
 
 </div>
    }
</div>
 
</Container>
        )
    }
}
