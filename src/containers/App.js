import React, {Component} from 'react';
import './App.css';
import UserList from "../components/UserList";
import SearchBox from "../components/SearchBox";
import MDSpinner from 'react-md-spinner';
import Table from '../components/Table';
import Form from '../components/Form';


class App extends Component {
  constructor(props) {
      super(props);  
      this.state = { 
          users: [],
          characters: [],
          searchUser: '',
          loading: true,
          error: null,
      };
  }
  removeCharacter = index => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i)=> {
        return i !==index;
      })
    });
  }
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }
  
  componentDidMount(){
      fetch('https://reqres.in/api/users?per_page=20')
      .then((res)=> res.json())
      .then(data=> {
          this.setState({
            users: data.data,
            loading: false}) 
            //console.log(data.data);
      })
      .catch(error => {console.log(error)
        this.setState({error, isLoading: false})})
    }
  handleInput = (e) => {
    this.setState({searchUser: e.target.value})
  }
  

  render() {
    
    if(!this.state.users.length) {
      return <MDSpinner className="spinner"/>
    }
    const filteredUsers = this.state.users.filter((user) => {
      return user.first_name.toLowerCase().includes(this.state.searchUser.toLocaleLowerCase());
    })
    const {characters} = this.state;
    return (
            <React.Fragment>
              <nav>
                <div className="nav-wrapper">
                  <div className="brand-logo center">Our Users</div>
                  <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
                </div>
              </nav>
              <div>
                <SearchBox handleInput={this.handleInput} />  
                <UserList filteredUsers={filteredUsers}/>
                <h4>Add New User</h4>
                <Table 
                  characterData={characters} 
                  removeCharacter= {this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
              </div>
            </React.Fragment>
    );
  }
}

export default App;
