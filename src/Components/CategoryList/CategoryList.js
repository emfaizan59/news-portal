import React, { Component } from 'react'
import {List , Image , Container, Segment } from 'semantic-ui-react'
import "./CategoryList.css"
export default class CategoryList extends Component {
   state = {
       categoryName : 'general'
   }
   timeout = null;
   onChangeCat = (e) => {
       this.setState({categoryName : e.target.name})


    //    this.props.callback(this.state.categoryName)

    
    this.timeout = setTimeout(() => {
             this.props.callback(this.state.categoryName)
    }, 100);
   }
   
    render() {
        return (
        <Container fluid>
        <Segment raised stacked textAlign="center" inverted>
<List horizontal relaxed divided size="large">
<List.Item className={this.state.categoryName == "general"? "activeItem" : ""}>
      <Image avatar src='/images/all.png' />
      <List.Content>
      <a className="linkHeader"  name="general"   onClick={this.onChangeCat} >General</a>
      </List.Content>
    </List.Item>
    
    <List.Item className={this.state.categoryName == 'business' ? "activeItem" : ""}>
      <Image avatar src='/images/business.png' />
      <List.Content>
      <a className="linkHeader" name="business"  onClick={this.onChangeCat} >Business</a>
      </List.Content>
    </List.Item>
    <List.Item className={this.state.categoryName == 'entertainment' ? "activeItem" : ""}>
      <Image avatar src='/images/entertainment.png' />
      <List.Content>
      <a className="linkHeader" name="entertainment"  onClick={this.onChangeCat} >Entertainment</a>
      </List.Content>
    </List.Item >

    <List.Item className={this.state.categoryName == 'health' ? "activeItem" : ""}>
      <Image avatar src='/images/health.png' />
      <List.Content>
      <a className="linkHeader" name="health"  onClick={this.onChangeCat} >Health</a>
      </List.Content>
    </List.Item>
    <List.Item className={this.state.categoryName == 'sports' ? "activeItem" : ""}>
      <Image avatar src='/images/sports.png' />
      <List.Content>
      <a className="linkHeader" name="sports"  onClick={this.onChangeCat} >Sports</a>
      </List.Content>
    </List.Item>
    <List.Item  className={this.state.categoryName == 'science' ? "activeItem" : ""}>
      <Image avatar src='/images/science.png' />
      <List.Content>
      <a className="linkHeader" name="science"   onClick={this.onChangeCat} >Science</a>
      </List.Content>
    </List.Item>


    <List.Item className={this.state.categoryName == 'technology' ? "activeItem" : ""}>
      <Image avatar src='/images/technology.png' />
      <List.Content>
      <a className="linkHeader" name="technology"   onClick={this.onChangeCat} >Technology</a>
      </List.Content>
    </List.Item>
    
  </List>
  </Segment>
  </Container>
        )
    }
}
