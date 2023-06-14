import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './cules.css'
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import plantatii from '../plantantii'
import randuri from '../randuri';


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


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function FormCules() {
  const [nume, setNume] = React.useState('');

  const [rand, setRand] = React.useState('');

  const [plantatie, setPlantatie] = React.useState('');

  let [Kilograme, setKilograme] = useState('');

  const handleChangeNume = (event) => {
    setNume(event.target.value);
};

  const handleChangeRand = (event) => {
      setRand(event.target.value);
};

  const handleChangePlantatie = (event) => {
      setPlantatie(event.target.value);
};

const handleChangeKG = (event) => {
  setKilograme(event.target.value);
}

const submit = (event) => {
  event.preventDefault();
  const payload = {
    nume: nume,
    kilograme: Kilograme,
    plantatie: plantatie,
    rand: rand
  };
  setKilograme('');
  setNume('');
  setPlantatie('');
  setRand('');

  axios({
    url: 'https://licentastefanoprea.onrender.com/api/save',
    method: 'POST',
    data: payload
  })
  .then(() =>{
    console.log('Data has been set');
  })
  .catch(()=> {
    console.log('error')
  });;
}
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//console.log('Nume ',nume ,' Kilograme: ', Kilograme, ' Plantatia: ',plantatie, ' Rand: ', rand);

const [new_name, setNew_Name] = React.useState('');

const handleChangeNewName = (event) => {
  setNew_Name(event.target.value);
}

//console.log("newname: ",new_name);

const addName = (event) => {
  event.preventDefault();
  const payload = {
    nume: new_name,
    total: 0,
  };
  setNew_Name('');
  axios({
    url: 'https://licentastefanoprea.onrender.com/api/save_names',
    method: 'POST',
    data: payload
  })
  .then(() =>{
    console.log('Data has been set');
    window.location.reload(); // Refresh the page
  })
  .catch(()=> {
    console.log('error')
  });;
}


    const [culegatori_list, getCulegatori_list] = useState([])
    const URL = 'https://licentastefanoprea.onrender.com/api/names';
    useEffect(() => {
        fetchData()
    }, [])
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                //console.log(response);
                getCulegatori_list(response);
            })
    }
    //console.log(culegatori_list);

    const [open_snackbar, setOpenSnackbar] = React.useState(false);

    const handleClickSnackbar = () => {
      setOpenSnackbar(true);
    };
  
    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };




  return (
    <div>
      <form onSubmit={submit}>
        <div className='center1' >

            <TextField 
            select
            required
            label="Culegator"
            value={nume}
            onChange={handleChangeNume}
              >
            {culegatori_list.map((option) => (
              <MenuItem key={option.id} value={option.nume}>
                {option.nume}
              </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              id="outlined-number"
              label="Cantitate"
              placeholder='Cantitate'
              type="number"
              autoComplete='off'
              value={Kilograme}
              onChange={handleChangeKG}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </div>

            <div className='center2'>
            <TextField 
            select
            required
            label="Plantatia"
            value={plantatie}
            onChange={handleChangePlantatie}

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
            value={rand}
            onChange={handleChangeRand}
              >
            {randuri.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
            </TextField>

                          
            </div>
            <button onClick={handleClickSnackbar} className='submit_button'> Submit </button>

      </form>
            <div className='fab_add'>
            <Fab variant="extended" color="secondary" aria-label="add" onClick={handleOpen}>
              <AddIcon  sx={{ mr: 1}} />
              Adauga Culegator
            </Fab>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
            >
              <Box sx={style}>
              <form onSubmit={addName}>

              <TextField
              required
              id="outlined-number"
              label="Adauga Nume"
              type="text"
              autoComplete='off'
              value={new_name}
              onChange={handleChangeNewName}
              InputLabelProps={{
                shrink: true,
              }}
            />
                <button onClick={handleClickSnackbar} className='submit_button'> Submit </button>
              </form>
              </Box>
            </Modal>
            <Snackbar open={open_snackbar} autoHideDuration={8000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                      Datele au fost adaugate cu succes!!
                    </Alert>
            </Snackbar>
            
    </div>
  );
}
