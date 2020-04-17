import React, { Component } from 'react'
import {Container , Dropdown, Header, Icon , Button , Grid, Loader , Image} from 'semantic-ui-react'
import firebase from '../../firebase'
import {Link, Redirect } from 'react-router-dom'
import "./Header.css"

export default class HeaderNav extends Component {
    state= {
        displayName : 'Guest' , 
        displayImg : '' ,
        load : true
    }
    
    componentDidMount = () => {
const a = localStorage.getItem("tokenLogin")
        
    console.log(a)
    if(a !== null)
    {
    firebase.database().ref("user/"+a).on('value', (snapshot) => {
        const userObj = snapshot.val();
       console.log(userObj.displayName)
       this.setState({displayName : userObj.displayName , displayImg : userObj.photoURL , load: false , loggedIn : true})
      })
      
    }
    else 
    {
        this.setState({displayName : "Guest" , load: false , loggedIn : false})
    } 
}

// getUserData = (uid) => {
//             // console.log(  firebase.database().ref("user").child(check) )
//             firebase.database().ref("user/"+uid).on('value', (snapshot) => {
//               const userObj = snapshot.val();
//              console.log(userObj.displayName)
//              this.setState({displayName : userObj.displayName})
//             });
//           }

logOut = () => {
    console.log("logout")
    localStorage.removeItem("tokenLogin")
    window.location.reload();

}

profile = () => {
    console.log("Profile")
    window.location.href = "/register"
}

render() {
    const {displayName , displayImg,  load , loggedIn} = this.state    

//  if(load == false && loggedIn == false)
//  {
//      return <Redirect to="/login" />
//  }
// else
// { 

    return (

            <Container className="mainHeader" fluid = {true}>
<Container >
  <Grid verticalAlign='middle'>
    <Grid.Column floated='left' width={11}>
        <div className="links">
            <a>Home</a>
            <a>My Favourite News</a>
            <a>Contact us</a>
        </div>
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
     
     {load ? 
        <div>
            <Loader active />
        </div>
:
    <div className="account">
      {loggedIn ? 
 <div style={{display : 'flex'}} >
    <h4>Welcome {displayName}</h4> 

    <Image className="avatarImg" src={displayImg || '/images/elliot.jpg'} avatar />

  <Dropdown text='' >
    <Dropdown.Menu>
      <Dropdown.Item text='Profile'   onClick={this.profile}  />
     <Dropdown.Item text='Logout'    onClick={this.logOut} />  
 
    </Dropdown.Menu>
  </Dropdown>
        </div>
         :
        <div>
            <Link to="/login"><a>Login</a></Link>
           <Link to="/register"><a>Register</a></Link>
            </div>
}
    </div>
}
 </Grid.Column>
  </Grid>
      
  </Container>  
            </Container>
        )
    }
}

// }
