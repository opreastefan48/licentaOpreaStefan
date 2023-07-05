import React, { useState, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import './cules.css'
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button as Button_bootstrap } from 'react-bootstrap';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);
  var total = 0;
  const [data, getData] = useState([])

  async function getDataFromDB() {
    try {
      const response = await axios.get('https://licentastefanoprea.onrender.com/api/culegator');
      const responseData = response.data;
      getData(responseData);
    } catch (error) {
      // Handle the error
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getDataFromDB();
  }, [])
  //console.log("DATA: ", data)

  
const getTable = (item) => {
  if (item.nume === row.nume) 
  {
    return item;
  }else{
    return '';

  }
};

const [show, setShow] = useState(null);

  const handleCloseModal = () => setShow(false);
  function handleShowModal(index) {
    setShow(index);
  }
  const IfDelete = (item,i) => {
    if (item.nume === row.nume) {
      return (
        <button onClick={() => handleShowModal(i)} type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      );
    } else {
      return null;
    }
  };


const [openSnackbarDelete, setOpenSnackbarDelete] = React.useState(false);

  const handleClickSnackbarDelete = () => {
    setOpenSnackbarDelete(true);
  };

  const handleCloseSnackbarDelete = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbarDelete(false);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  function DeleteUser(id) {
    axios.delete('https://licentastefanoprea.onrender.com/api/deleteCules/' + id);
    console.log("Problem deleted");
    handleClickSnackbarDelete();
    setTimeout(refreshPage, 1000);

  }

  function getTotal(){
    for (var i = 0; i < data.length; i++) {
      if (data[i].nume === row.nume) 
      { 
      total = parseInt(total) + parseInt(data[i].kilograme);
      //console.log('total', total);
      }
    }
  }
getTotal();

  const [openCheckDelete, setOpenCheckDelete] = React.useState(false);

  const handleClickOpenCheckDelete = () => {
    setOpenCheckDelete(true);
  };

  const handleCloseCheckDelete = () => {
    setOpenCheckDelete(false);
  };

  
  return (
    <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
  
          <TableCell component="th" scope="row" >
          {row.nume}
          </TableCell>

          <TableCell align='center' component="th" scope="row" >
            {total}
          </TableCell>

        </TableRow>

        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h5" gutterBottom component="div">
                Detalii
              </Typography>
              <Table size="small" aria-label="purchases">

                <TableHead>
                  <TableRow>

                    <TableCell align="center" > Data si ora salvarii cantitatii </TableCell>
                    <TableCell align="center"> Cantitate culeasa </TableCell>
                    <TableCell align="center"> Plantatia </TableCell>
                    <TableCell align="center"> Randul </TableCell>
                    <TableCell  align="center"> X </TableCell>

                  </TableRow>
                </TableHead>

                <TableBody>

                {data.map((item, i) => (
                    <tr key={i} >
                      <td>{getTable(item).date}</td>
                      <td align="center">{getTable(item).kilograme }</td>
                      <td align="center">{getTable(item).plantatie}</td>
                      <td align="center">{getTable(item).rand}</td>
                      <td align="center"> {IfDelete(item,i)} 
                      <Modal show={show === i} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmare stergere</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sunteti sigur ca doriti sa stergeti inregistrarea??</Modal.Body>
          <Modal.Footer>
            <Button_bootstrap variant="secondary" onClick={handleCloseModal}>
              NU STERGE!!
            </Button_bootstrap>
            <Button_bootstrap variant="danger" onClick={() => DeleteUser(item._id)}>
              DA, STERGE!!
            </Button_bootstrap>
          </Modal.Footer>
        </Modal>
                      <Snackbar open={openSnackbarDelete} autoHideDuration={6000} onClose={handleCloseSnackbarDelete}>
                        <Alert onClose={handleCloseSnackbarDelete} severity="error" sx={{ width: '100%' }}>
                          Problema stearsa cu succes!
                        </Alert>
                      </Snackbar>
      </td>
                        
                    </tr>
                    
                ))}
                
                </TableBody>

              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      
    </React.Fragment>
  );
}

export default function Total_cules() { 


    const [culegatori_list, getCulegatori_list] = useState([])
    const URL_names = 'https://licentastefanoprea.onrender.com/api/names';
    const [data, getData] = useState([])
    var total = 0;

  useEffect(() => {
    fetch('https://licentastefanoprea.onrender.com/api/culegator')
    .then((res) =>
        res.json())

    .then((response) => {
        getData(response);
    })
    fetchData_names()
  }, [])


  const fetchData_names = () => {
      fetch(URL_names)
          .then((res) =>
              res.json())

          .then((response) => {
              getCulegatori_list(response);
          })
    }

    function getTotalForName(j, item){
      total = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].nume === item.nume) 
        { 
        total = parseInt(total) + parseInt(data[i].kilograme);
        }
      }
      if(total)
        return (<Row key={j} row={item} />)
      

    }

    // const NotZero = (item) => {
    //   if (item.nume === row.nume) 
    //   {
    //     return item;
    //   }else{
    //     return '';
    
    //   }
    // };


  return (

        <Box className='center-table'>
          <TableContainer component={Paper} >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow className='table_row'>
                  <TableCell />
                  <TableCell>Nume culegator</TableCell>
                  <TableCell align="center">Total (kg)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                  {culegatori_list.map((lista_nume,i) => (
                    getTotalForName(i,lista_nume)
                  ))}

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
                
    
  );
}
