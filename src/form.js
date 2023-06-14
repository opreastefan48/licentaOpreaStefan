import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import './App.css'

const randuri = [
  {
    value: '1',
    label: 'Randul 1',
  },
  {
    value: '2',
    label: 'Randul 2',
  },{
    value: '3',
    label: 'Randul 3',
  },{
    value: '4',
    label: 'Randul 4',
  },{
    value: '5',
    label: 'Randul 5',
  },
];

const plantatii = [
  {
    value: '1',
    label: 'Plantatia 1',
  },
  {
    value: '2',
    label: 'Plantatia 2',
  },{
    value: '3',
    label: 'Plantatia 3',
  },
]

export default function FormPropsTextFields() {
    const [rand, setRand] = React.useState('');

    const handleChangeRand = (event) => {
        setRand(event.target.value);
        
  };

  const [plantatie, setPlantatie] = React.useState('');

    const handleChangePlantatie = (event) => {
        setPlantatie(event.target.value);
        
  };

  return (

    <div className='form'>
      
      <div className='center1' >
        <TextField
          focused 
          required
          id="outlined"
          label="Nume culegator"
          
        />

        <div className='spatiu'></div>
        
        <TextField
          focused 
          required
          id="outlined-number"
          label="Cantitate"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>


      <div className='center2'>

        <TextField 
          select
          focused
          required
          label="Plantatia"
          value={plantatie}
          onChange={handleChangePlantatie}
          
          style ={{width: '11%'}}
            >
          {plantatii.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            ))}
         </TextField>
                            <div className='spatiu'></div>

        <TextField
            focused
            required
            label="Randul"
            style ={{width: '11%'}}
        >
        </TextField>
        
                        
      </div>

    </div>
  );
}
