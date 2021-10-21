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
            </div> <br />
            <div className="rounded col-md-8 m-auto border border-dark " id="format">
              <br />
              <p className="lead text-center">
                This Your Contact
              </p><br/>
              <p className="lead text-center">
              FullName: {this.state.fullname}
              </p><br/>
              <p className="lead text-center">
              Email Address: {this.state.email}
              </p><br/>
              <p className="lead text-center">
              Contact Number: {this.state.number}
              </p><br/>
              <p className="lead text-center">
              Location: {this.state.location}
              </p><br/>
              <p className="lead text-center">
              Registered Date: {this.state.date}
              </p>

             
            </div>
          </div>
        </div >



      </div >
    );
  }
}


export default editContact;