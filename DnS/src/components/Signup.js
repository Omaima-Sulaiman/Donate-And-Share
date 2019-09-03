import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios'

export default class Singup extends Component{
  state = {
    users: {
      firstName: '',
      lastName:'',
      username:'',
      phone:'',
      email:'',
      // birthday: new Date(),
      birthday:'',
      password:'',
    }
  }

  onChange = (e) => {
    if(e.target.name === 'user'){

    }
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange = date => {
    this.setState({
      birthday: date
    });
  };

  onClick = (newuser) => {
    axios.post('http://localhost:9000/signup/users', newuser)
    .then(res => {
      console.log(res.data)
      this.setState({users: res.data})
    } )
  }
  onClick2 = (user) => {
    axios.get(`http://localhost:9000/signup/users/${user}`)
    .then(res => {
      console.log(res.data)
      this.setState({users: res.data})
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    // ${this.state.username}
  }

  render(){
      return(
          <>
            <form onSubmit={this.onSubmit} style={{margin: '0 auto', width: '50%'}}>
              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">First Name</label>
                  <div class="col-sm-8">
                    <input onChange={this.onChange} class="form-control" name ='firstName' placeholder='First Name' type='text' ></input>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">Last Name</label>
                  <div class="col-sm-8">
                    <input onChange={this.onChange} name ='lastName' placeholder='Last Name' type='text' ></input>
                    </div>
              </div>
              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">Last Name</label>
                  <div class="col-sm-8">
                    <input onChange={this.onChange} name ='username' placeholder='Username' type='text' ></input>
                    </div>
              </div>
              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">Phone Number</label>
                  <div class="col-sm-8">
                    <input onChange={this.onChange} name ='phone' placeholder='Phone Number' type='number' ></input>
                    </div>
              </div><div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                  <div class="col-sm-8">
                    <input onChange={this.onChange} name ='email' placeholder='email@example.com' type='email' ></input>
                  </div>
              </div><div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">Date og Birth</label>
                  <div class="col-sm-8">
                    <DatePicker selected={this.state.birthday} onChange={this.handleChange} />
                  </div>
              </div><div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label">Password</label>
                  <div class="col-sm-8">
                    <input onChange={this.onChange} name ='password' placeholder='Password' type='password' ></input>
                  </div>
              </div>
                    <button class="btn btn-primary mb-2"  onClick={this.onClick.bind(this, this.state.users)} type='submit'>Signup</button>
                    {console.log(this.state.users)}
            </form>
              <button onClick={this.onClick2.bind(this, this.state.users.username)} >get users</button>
          </>
      )
  }
}
