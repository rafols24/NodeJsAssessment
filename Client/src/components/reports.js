import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';

class Reports extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    
        this.state = {
          locationManila: [],
          locationCebu:[],

          //for 2021 holder
      jan: [],
      feb:[],
      mar:[],
      apr:[],
      may:[],
      jun:[],
      jul:[],
      aug:[],
      sep:[],
      oct:[],
      nov:[],
      dec:[],

        //for 2020 holder
        jan1: [],
        feb1:[],
        mar1:[],
        apr1:[],
        may1:[],
        jun1:[],
        jul1:[],
        aug1:[],
        sep1:[],
        oct1:[],
        nov1:[],
        dec1:[],

        }
    }
        componentDidMount() {
            //getting users in Manila
            axios
              .get(`http://localhost:3400/viewReportsManila`)
              .then(res => {
                this.setState({
                  locationManila: res.data
                
                })
              })
        
              //getting users in Cebu
              axios
              .get(`http://localhost:3400/viewReportsCebu`)
              .then(res => {
                this.setState({
                  locationCebu: res.data
                
                })
              })
              
              ///FOR THE CALCULATION 2020
              axios
              .get(`http://localhost:3400/jan1`)
              .then(res => {
                this.setState({
                jan1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/feb1`)
              .then(res => {
                this.setState({
                feb1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/mar1`)
              .then(res => {
                this.setState({
                mar1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/apr1`)
              .then(res => {
                this.setState({
                apr1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/may1`)
              .then(res => {
                this.setState({
                may1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/jun1`)
              .then(res => {
                this.setState({
                jun1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/jul1`)
              .then(res => {
                this.setState({
                jul1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/aug1`)
              .then(res => {
                this.setState({
                aug1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/sep1`)
              .then(res => {
                this.setState({
                sep1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/oct1`)
              .then(res => {
                this.setState({
                oct1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/nov1`)
              .then(res => {
                this.setState({
                nov1:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/dec1`)
              .then(res => {
                this.setState({
                dec1:res.data       
                })
                    
              })   
        
              ///FOR THE CALCULATION 2021
              axios
              .get(`http://localhost:3400/jan`)
              .then(res => {
                this.setState({
                jan:res.data       
                })
            
              })   
              axios
              .get(`http://localhost:3400/feb`)
              .then(res => {
                this.setState({
                feb:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/mar`)
              .then(res => {
                this.setState({
                mar:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/apr`)
              .then(res => {
                this.setState({
                apr:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/may`)
              .then(res => {
                this.setState({
                may:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/jun`)
              .then(res => {
                this.setState({
                jun:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/jul`)
              .then(res => {
                this.setState({
                jul:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/aug`)
              .then(res => {
                this.setState({
                aug:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/sep`)
              .then(res => {
                this.setState({
                sep:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/oct`)
              .then(res => {
                this.setState({
                oct:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/nov`)
              .then(res => {
                this.setState({
                nov:res.data       
                })
                    
              })   
              axios
              .get(`http://localhost:3400/dec`)
              .then(res => {
                this.setState({
                dec:res.data       
                })
                    
              })   
          }
        


          render() {
    return (
       <div className="container">
       <br/>
        <div className="container">
        <br/>
        <Link to="/"> Back
        </Link>
        <br/>
        <br/>
        <h3>Reports</h3>
        <h4>Number of Registered Users in Manila:  {this.state.locationManila.length} </h4>
        <h4>Number of Registered Users in Cebu: {this.state.locationCebu.length}</h4>
        <br/> <br/>
        <table  className="table table-hover table-bordered border shadow table-responsive"  >
        <thead >
          <tr>
            <th scope="col"></th>
            <th scope="col">Jan</th>
            <th scope="col">Feb</th>
            <th scope="col">Mar</th>
            <th scope="col">Apr</th>
            <th scope="col">May</th>
            <th scope="col">Jun</th>
            <th scope="col">Jul</th>
            <th scope="col">Aug</th>
            <th scope="col">Sep</th>
            <th scope="col">Oct</th>
            <th scope="col">Nov</th>
            <th scope="col">Dec</th>
           
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>2020</td>
              <td>{this.state.jan1.length}</td>
              <td>{this.state.feb1.length}</td>
              <td>{this.state.mar1.length}</td>
              <td>{this.state.apr1.length}</td>
              <td>{this.state.may1.length}</td>
              <td>{this.state.jun1.length}</td>
              <td>{this.state.jul1.length}</td>
              <td>{this.state.aug1.length}</td>
              <td>{this.state.sep1.length}</td>
              <td>{this.state.oct1.length}</td>
              <td>{this.state.nov1.length}</td>
              <td>{this.state.dec1.length}</td>
              </tr>
              <tr>
              <td>2021</td>
              <td>{this.state.jan.length}</td>
              <td>{this.state.feb.length}</td>
              <td>{this.state.mar.length}</td>
              <td>{this.state.apr.length}</td>
              <td>{this.state.may.length}</td>
              <td>{this.state.jun.length}</td>
              <td>{this.state.jul.length}</td>
              <td>{this.state.aug.length}</td>
              <td>{this.state.sep.length}</td>
              <td>{this.state.oct.length}</td>
              <td>{this.state.nov.length}</td>
              <td>{this.state.dec.length}</td>
              
              </tr>
        </tbody>
      </table>
            <br/><br/>
        </div>
        </div>
    );
}
}

export default Reports;