import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import Model from "../components/model"
import Create from "../components/Create"
import Button from '@mui/material/Button';
import {  fetchData, deleteTodo } from '../Services/users.services'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import Loader from "../components/loader"

export default function App() {
  
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
     
      width: '100px'
    },
    {
      name: 'Image',
      cell: row => <img src={row.avatar} width={50} alt={row.first_name}></img>,
      selector: row => row.coverimage,
      width: '100px'
    },
    {
      name: 'Last Name',
      selector: row => row.last_name,
      width: '200px'
    },
    {
      name: 'First Name',
      selector: row => row.first_name,
      width: '200px',

    },
    {
      name: 'Email',
      selector: row => row.email,
      width: '500px'
    },
    {
      name: 'Delete',
      cell: row => <Button  variant="outlined"  size="small" onClick={(e) => deleteTodo(row.id, e)}><DeleteForeverIcon  onClick={(e) => setOpen3(true)}/></Button >,
    
      width: '100px'
    },
    {
      name: 'Update',
      cell: row => <Button variant="contained" color="success" size="small" onClick={(e) => Updatetodo(row)}><UpdateIcon /></Button>,
      width: '100px'
    },
  ];

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [update, setUpdate] = useState('');
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  useEffect(() => {
    getData(1, perPage);
  }, [perPage])


  const Updatetodo = (row) => {
    try {
      setUpdate(row);
      console.log(row);
      setOpen(true);
      console.log("open value",open3);
    }
    catch (ex) {
      console.log('Not Updated!', ex);
    }
  };
  const getData = (page, per_page) => {
    setOpen3(true);
    fetchData(page, per_page)
      .then(
        (result) => {
          // handle success
          console.log('result', result);
          setIsLoaded(true);
          setItems(result.data.data);
          setTotalRows(result.data.total);
          
        }
        )
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error.config);
        
      });
  };



  // const fetchData = async (page, per_page) => {
  //   fetch(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result.data);
  //         setTotalRows(result.total);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }

  const handlePageChange = page => {
    
    getData(page, perPage);
    setOpen3(true);
    
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Please w8t...
    </div>;
  } else {
    return (
      <>
        {/* using props to send data to another component*/}
        {/* props hmehsa same rhye ga  */}
        <Loader open={open3} setOpen={setOpen3} />
        <Model  open={open} setOpen={setOpen} update={update} />
        <div>
          <DataTable
            columns={columns}
            data={items}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
          />
          <Create open={open2} setOpen={setOpen2} />
        </div>
        
      </>

    );
  }
}

