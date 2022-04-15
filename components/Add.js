import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import Model from "../components/model"
import Create from "../components/Create"
import Button from '@mui/material/Button';
import { AddTodo, fetchData, deleteTodo } from '../Services/users.services'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DataGrid } from '@mui/x-data-grid';
import UpdateIcon from '@mui/icons-material/Update';

export default function App() {
  const columns = [
    {
      name: 'id',
      selector: row => row.id,
      width: '100px'
    },
    {
      name: 'avatar',
      cell: row => <img src={row.avatar} width={50} alt={row.first_name}></img>,
      selector: row => row.coverimage,
      width: '100px'
    },
    {
      name: 'last_name',
      selector: row => row.last_name,
      width: '200px'
    },
    {
      name: 'first_name',
      selector: row => row.first_name,
      width: '200px',

    },
    {
      name: 'email',
      selector: row => row.email,
      width: '500px'
    },
    {
      name: 'Delete',
      cell: row => <Button  variant="outlined"  size="small" onClick={(e) => deleteTodo(row.id, e)}><DeleteForeverIcon /></Button >,
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
  const [Add, setAdd] = useState('');
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  useEffect(() => {

    getData(1, perPage);
  }, [perPage])


  const Updatetodo = (row) => {
    try {
      setUpdate(row);
      console.log(row);
      console.log('before', open);
      setOpen(true);
      console.log('after', open);
    }
    catch (ex) {
      console.log('Not Updated!', ex);
    }
  };
  const getData = (page, per_page) => {
    fetchData(page, per_page)
      .then(
        (result) => {
          // handle success
        
          console.log('result', result);
          setIsLoaded(true);
          setItems(result.data.data);
          setTotalRows(result.data.total);
        })
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
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Please w8t...</div>;
  } else {
    return (
      <>
        {/* using props to send data to another component*/}
        <Model id="change" open={open} setOpen={setOpen} update={update} />
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
        </div>
        <Create open={open2} setOpen={setOpen2} />
      </>

    );
  }
}