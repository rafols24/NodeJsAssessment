import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { DataGrid } from '@mui/x-data-grid';
import { FaEye, FaPencilAlt, FaTimes } from 'react-icons/fa';


class showContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3400/')
      .then(res => {
        this.setState({
          contacts: res.data
        })
      })
      .catch(err => {
        console.log('Error from Contact List');
      })
  }



  render() {
    return (

      <div className="container" >
        <div  className="container">
          <div className="">
            <center >Contact List</center><br />
            <Link to="/add"  id="showContactList">
            Add Contact
           </Link>&nbsp;&nbsp;
           <Link to="/reports" id="showContactList">
           View Reports
          </Link><br/>
            <div style={{ height: 400 }}>
              <DataGrid style={{ color: 'black' }}
                rows={this.state.contacts}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row._id}
                disableSelectionOnClick
              />
            </div>
          </div></div>
      </div>
    );
  }
}

//Creating Column
const columns = [
  { field: '_id', headerName: 'ID', width: 150 },
  {
    field: 'fullname',
    headerName: 'Full Name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    width: 200,
  },
  {
    field: 'number',
    headerName: 'Contact Number',
    width: 200,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Registered Date',
    width: 150,
    
  },
  {
    field: '',
    headerName: 'Action',
    width: 150,
  


    renderCell: (params) => {
        
      const onDelete = async () => {
        axios
          .delete(`http://localhost:3400/delete/${params.row._id}`)
          .then(() => {
            console.log(params.row.id);
          })
          Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have deleted a contact!'
        }) 
       
      };
    
      return (
        <>
          <Link exact to={`/view/${params.row._id}`}><FaEye onClick={(params.row._id)} className="editIcon" /></Link>&nbsp;&nbsp;
          <Link exact to={`/EditContacts/${params.row._id}`}><FaPencilAlt onClick={(params.row._id)} className="editIcon" /></Link>&nbsp;&nbsp;
          <FaTimes onClick={() => onDelete(params.row._id)} className="delIcon" /> &nbsp;
        </>
      );
    }
  }
];


export default showContact;