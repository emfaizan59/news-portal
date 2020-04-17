import React from 'react'
import {Container, Grid , Input , Icon} from 'semantic-ui-react'
import './SearchBar.css'
class SearchBar extends React.Component {
    state = {
        searchValue : ''
    }

    timeout = null;
    doChange = (event) => {
        this.setState({ searchValue : event.target.value  })
  
        clearTimeout(this.timeout)
    
       this.timeout = setTimeout(() => {
           this.props.callback(this.state.searchValue)
       }, 800);

 
       } 
    render(){
        return(
            <Container fluid>
                <div className='searchBar'>
                <Grid centered={true}>
                    <Grid.Row>
                <Grid.Column width={8} >
                <Input placeholder="Search for News"  
                fluid
                loading = {this.state.searchValue === '' ? false : true}
                icon='search' 
                onChange={this.doChange}
                style={{ height:'55px' , borderRadius :'10px' , 
                backgroundColor:'transparent' ,  
               marginTop : '10px',
               color : 'black' , 
               outline : 'none',
               paddingLeft : '10px'
            }} />
                </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </Container>
        )
    }
}


export default SearchBar