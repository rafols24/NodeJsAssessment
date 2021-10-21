import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

class editContact extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      fullname: '',
      email: '',
      number: '',
      location: '',
      date: '',
    };
  }

  //this is for CONTACT NUMBER LIMITS
  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {

    const cons_id = this.props.match.params.id;

    axios
      .get(`http://localhost:3400/view/${cons_id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          fullname: res.data.fullname,
          email: res.data.email,
          number: res.data.number,
          location: res.data.location,
          date: res.data.date

        })

      })

  }


  onSubmit = e => {
    e.preventDefault();


    const cons_id = this.props.match.params.id;

    const data = {
      fullname: this.state.fullname,
      email: this.state.email,
      number: this.state.number,
      location: this.state.location,
      date: this.state.date,
    };

    console.log(data);

    axios
      .put(`http://localhost:3400/update/${cons_id}`, data)
      .then(() => {
        this.setState({
          fullname: '',
          email: '',
          number: '',
          location: '',
          date: '',
        })
        this.props.history.push('/');

      })
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You successfully edited this contact!'
    })
  };



  render() {
    return (
      <div className="addContact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/">
                Back
              </Link>
            </div><br />
            <div className="rounded col-md-8 m-auto border border-dark " id="format">
              <br />
              <p className="lead text-center">
                Edit contact
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group row'>
                  <label for="fullnameLabel" class="col-sm-2 col-form-label">Fullname :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="fullnameLabel" disabled
                      type='text'
                      placeholder='Edit full name '
                      name='fullname'
                      className='form-control'
                      value={this.state.fullname}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <br />
                <div className='form-group row'>
                  <label for="emailLabel" class="col-sm-2 col-form-label">Email Add :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="emailLabel" maxLength="45"
                      type='text'
                      placeholder='Edit email '
                      name='email'
                      className='form-control'
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className='form-group row'>
                  <label for="contactLabel" class="col-sm-2 col-form-label">Contact # :</label>
                  <div class="col-sm-10">
                    <input required class="form-control" id="contactLabel" maxLength="11" onInput={this.maxLengthCheck}
                      type='number'
                      placeholder='Edit number '
                      name='number'
                      className='form-control'
                      value={this.state.number}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <br />
                <div className='form-group row'>
                  <label for="locationLabel" class="col-sm-2 col-form-label">Location :</label>
                  <div class="col-sm-10">
                    <select class="form-select" class="form-control" id="locationLabel" name='location' className='form-control' aria-label="Default select example" value={this.state.location}
                      onChange={this.onChange}>
                      <option selected>Choose location</option>
                      <option value="Manila">Manila</option>
                      <option value="Cebu">Cebu</option>
                    </select>
                  </div></div>
                  <br/>
                  <div className='form-group row'>
                  <label for="registeredLabel" class="col-sm-2 fs-bolder col-form-label">Reg-Date:</label>
                  <div class="col-sm-10">
                    <input required class="form-control" disabled
                      type='date'
                      placeholder='Enter registeredDate '
                      name='date' class="form-control" id="registeredLabel"
                      className='form-control'
                      value={this.state.date}
                      onChange={this.onChange}
                    />
                  </div></div>

                <input
                  type="submit"
                  onClick={this.onSubmit}
                  className="btn btn-outline-primary btn-block mt-4"
                /> <br />
              </form>
            </div>
          </div>
        </div >



      </div >
    );
  }
}


export default editContact;