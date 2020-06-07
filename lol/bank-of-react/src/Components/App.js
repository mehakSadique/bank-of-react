import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
    constructor() {
        super();
    
        this.state = {
          accountBalance: 14568.27
        }
      }
      mockLogIn = (logInInfo) => {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
      }
    
    //   const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    //   <Route exact path="/login" render={LogInComponent}/>

  render() {
      
    return (
        <Router>
          <Switch>
          <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
    );
  }
}


export default App;