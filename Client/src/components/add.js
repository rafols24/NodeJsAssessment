import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class add extends Component {
  constructor(props) {
    super(props); // assigning an object to this.state.
    console.log(props)

    this.state = {
      fullname: '',
      email: '',
      number: '',
      location: '',
      date: '',
      displayError: []
    };
  }
  //will change the provide value
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  returnHome = () => {
    this.props.history.push('/')
  }

  onSubmit = e => {
    e.preventDefault();

    //hold the current data
    const data = {
      fullname: this.state.fullname,
      email: this.state.email,
      number: this.state.number,
      location: this.state.location,
      date: this.state.date,
    };

    //Axios is used for adding data to MongoDB
    axios
      .post('http://localhost:3400/add', data)

      .then(res => {
        this.setState({
          fullname: '',
          email: '',
          number: '',
          location: '',
          date: '',
        })
      })
      .catch((error) => {
        this.setState({ displayError: error.response.data })
      })
      
      
  }


  render() {
    return (
      <div>
        <div className="addContact">
          <div className="container ">
            <div id="createContainer" className="row ">
              <br />
              <div className="col-md-8 m-auto " >
                <Link to="/">
                  Back
                </Link>
              </div>
              <br />
              <div className="rounded col-md-8 m-auto border bg-white border-dark " id="format">
                <br />
                <p id="titleCreate" className="lead text-center">
                  Create new contact
                </p>

                <form onSubmit={this.onSubmit}>
                  <div className='form-group  row'>
                    <label for="fullnameLabel" class="col-sm-2 fs-bolder col-form-label">Fullname :</label>
                    <div class="col-sm-10">
                      <input required class="form-control" id="fullnameLabel"
                        type='text'
                        placeholder='Lastname, Firstname, Middle Innitial'
                        name='fullname'
                        className='form-control'
                        value={this.state.fullname}
                        onChange={this.onChange}
                      />
                      <small id="fullname" className="form-text text danger">{this.state.displayError.fullname}</small>
                    </div>
                  </div><br />
                  <div className='form-group row'>
                    <label for="emailLabel" class="col-sm-2  fs-bolder col-form-label">Email Add</label>
                    <div class="col-sm-10">
                      <input required class="form-control" id="emailLabel" maxLength="45"
                        type='email'
                        placeholder='example@gmail.com'
                        name='email'
                        className='form-control'
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <small id="email" className="form-text text danger">{this.state.displayError.email}</small>
                    </div></div><br />
                  <div className='form-group row'>
                    <label for="contactLabel" class="col-sm-2 fs-bolder col-form-label">Contact #:</label>
                    <div class="col-sm-10">
                      <input required class="form-control" id="contactLabel"
                        type='number'
                        placeholder='99999999999'
                        name='number'
                        className='form-control'
                        value={this.state.number}
                        onChange={this.onChange}
                      />
                      <small id="number" className="form-text text danger">{this.state.displayError.number}</small>
                    </div></div><br />
                  <div className='form-group row'>
                    <label for="locationLabel" class="col-sm-2 fs-bolder col-form-label">Location:</label>
                    <div class="col-sm-10">
                      <select class="form-select" class="form-control" id="locationLabel" name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                        onChange={this.onChange}>
                        <option value="">Select your location:</option>
                        <option value="Manila">Manila</option>
                        <option value="Cebu">Cebu</option>
                      </select>
                      <small id="location" className="form-text text danger">{this.state.displayError.location}</small>
                    </div></div><br />

                  <div className='form-group row'>
                    <label for="registeredLabel" class="col-sm-2 fs-bolder col-form-label">Reg-Date:</label>
                    <div class="col-sm-10">
                      <input required class="form-control"
                        type='date'
                        placeholder='Enter registeredDate '
                        name='date' class="form-control" id="registeredLabel"
                        className='form-control'
                        value={this.state.date}
                        onChange={this.onChange}
                      />
                      <small id="date" className="form-text text danger">{this.state.displayError.date}</small>
                    </div></div>
                  <input
                    type="submit"
                    onClick={this.onSubmit}
                    className="btn btn-outline-white btn-info btn-block mt-4 "
                  />
                  <br />
                </form>
              </div>
            </div>
          </div><br />
        </div>
      </div>
    );
  }
}

export default add;