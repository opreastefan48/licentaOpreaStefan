import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MuiAlert from '@mui/material/Alert';
import Table from 'react-bootstrap/Table'
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { Button, Modal } from 'react-bootstrap';
import './probleme.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import plantatii from '../plantantii'
import randuri from '../randuri';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};




export default function Probleme() {

  const [problems, setProblems] = useState([
    {
      problem:'',
      plantatie:'',
      rand:'',
      planta:''
    }
  ])

  const [Problem, setProblem] = useState(
    {
      problem:'  ',
      plantatie:'',
      rand:'',
      planta:''
    }
  )
  useEffect(() => {
    getDataFromDb()
  }, [])

  async function getDataFromDb(){
    await axios.get('https://licentastefanoprea.onrender.com/api/problems')
    .then(async function (response) {
      setProblems(response.data)
    })
  }
  
  function handleChange(e) {
    const {name, value} = e.target;
    setProblem(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }

  function addProblem(e) {
    e.preventDefault();
  
    if (!Problem.problem || !Problem.plantatie || !Problem.rand || !Problem.planta) {
      alert("Please fill in all fields.");
      return;
    }
  
    console.log("Problem added");
    const newProblem = {
      problem: Problem.problem,
      plantatie: Problem.plantatie,
      rand: Problem.rand,
      planta: Problem.planta
    };
  
    setProblem('');
    axios.post('https://licentastefanoprea.onrender.com/api/savepb', newProblem);
    handleClickSnackbarAdd();
    setTimeout(refreshPage, 1000);
  }
  

  function refreshPage() {
    window.location.reload(false);
  }

  function DeleteUser(id) {
    axios.delete('https://licentastefanoprea.onrender.com/api/deletePB/' + id);
    console.log(id, " deleted");
    handleClickSnackbarDelete();
    setTimeout(refreshPage, 1000);

  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openSnackbarAdd, setOpenSnackbarAdd] = React.useState(false);

  const handleClickSnackbarAdd = () => {
    setOpenSnackbarAdd(true);
  };

  const handleCloseSnackbarAdd = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbarAdd(false);
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

  const [show, setShow] = useState(null);

  const handleCloseModal = () => setShow(false);
  function handleShowModal(index) {
    setShow(index);
  }
  return (

    <div >

      <form>
            <div className='center2'>
            <TextField 
            select
            required
            name='plantatie'
            label="Plantatie"
            value={Problem.plantatie}
            onChange={handleChange}

              >
            {plantatii.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField 
            select
            required
            label="Rand"
            name = 'rand'
            value={Problem.rand}
            onChange={handleChange}
              >
            {randuri.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

            <TextField 
            required
            type="number"
            autoComplete='off'
            name = 'planta'
            label="Planta"
            value={Problem.planta}
            onChange={handleChange}
              >
            </TextField>

            </div>

            <TextareaAutosize
              onChange={handleChange}
              minRows={4}
              required
              name = 'problem'
              value={Problem.problem}
              placeholder="  Scrie problema"
              style={{ width: 350 }}
            />
            <button onClick={addProblem} className='submit_button'> Submit </button>
              <Snackbar open={openSnackbarAdd} autoHideDuration={6000} onClose={handleCloseSnackbarAdd}>
                <Alert onClose={handleCloseSnackbarAdd} severity="success" sx={{ width: '100%' }}>
                  Problema adaugata cu succes!!!
                </Alert>
              </Snackbar>
      </form>
      <div className='center-table'>
        <Table striped bordered hover>
          <thead>
            <tr >
              <th align='center'>Plantatia</th>
              <th align='center'>Randul</th>
              <th align='center'>Planta</th>
              <th align="center">Problema</th>
              <th align='center'>Sterge</th>
            </tr>
          </thead>
          <tbody>

            {problems.map((problem, i) => (
                    <tr key={i} >
                      <td align="center">{problem.plantatie}</td>
                      <td align="center">{problem.rand}</td>
                      <td align="center">{problem.planta}</td>
                      <td align="left">{problem.problem}</td>
                      <td align="center" onClick={handleClickOpen} > 
                        <button onClick={() => handleShowModal(i)} type="button" className="btn btn-danger btn-sm">Delete</button> 
                          
                        <Modal show={show === i} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                              <Modal.Title>Confirmare stergere</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>A fost rezolvata problema?</Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleCloseModal }>
                                NU INCA!
                              </Button>
                              <Button variant="danger" onClick={() => DeleteUser(problem._id) }>
                                DA, PROBLEMA A FOST REZOLVATA!
                              </Button>
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

          </tbody>
        </Table>
      </div>
            
    </div>
  );
}
