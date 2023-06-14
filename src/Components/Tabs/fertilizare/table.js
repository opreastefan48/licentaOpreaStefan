import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Table } from 'react-bootstrap';
import './table.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Fertilizare() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Fertilizare DUKE" {...a11yProps(0)} />
          <Tab label="Fertilizare Eliot" {...a11yProps(1)} />
          <Tab label="Stropit DUKE" {...a11yProps(2)} />   
          <Tab label="Stropit Eliot" {...a11yProps(3)} />   


        </Tabs>
      </Box>
    
      <TabPanel value={value} index={0}>

          <Table bordered >
          <thead >
          <tr className="p-3 mb-2 bg-secondary text-black ">
          <th rowSpan={2}>Nume Fertilizant</th>  
          <th colSpan={3} className="text-center">Aprilie</th>
          <th colSpan={4} className="text-center">Mai</th>
          <th colSpan={4} className="text-center">Iunie</th>
          <th colSpan={4} className="text-center">Iulie</th>
          <th colSpan={3} className="text-center">August</th>
          </tr>
            <tr className=" p-3 mb-2 bg-secondary text-black">
              <th>Sapt. 14</th>
              <th>Sapt. 15</th>
              <th>Sapt. 16</th>
              <th>Sapt. 17</th>
              <th>Sapt. 18</th>
              <th>Sapt. 19</th>
              <th>Sapt. 20</th>
              <th>Sapt. 21</th>
              <th>Sapt. 22</th>
              <th>Sapt. 23</th>
              <th>Sapt. 24</th>
              <th>Sapt. 25</th>
              <th>Sapt. 26</th>
              <th>Sapt. 27</th>
              <th>Sapt. 28</th>
              <th>Sapt. 29</th>
              <th>Sapt. 30</th>
              <th>Sapt. 31</th>


            </tr>
            
          </thead>

          <tbody  className="bg-info text-black text-center">

            <tr >
              <td>Fulvicert 30-10-10</td>
              <td> </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> </td>
              <td> 6 </td>         
              <td> 6 </td>
              <td> 6 </td>
              <td> 6 </td>
              <td>  </td>
            </tr>

            <tr >
              <td>Fulvicert 8-10-30</td>
              <td> </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 12 </td>
              <td> 16 </td>
              <td> 16 </td>
              <td> 16 </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> 16 </td>
              <td> 6 </td>         
              <td> 6 </td>
              <td> 6 </td>
              <td> 6 </td>
              <td>  </td>

            </tr> 


            <tr>
              <td>Fulvicert 3-8-40</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 20 </td>
              <td> 20 </td>
              <td> 20 </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>

            </tr> 

            <tr>
              <td>Fulvicert 15-30</td>
              <td> </td>
              <td> </td>
              <td> 15  </td>
              <td> </td>
              <td>  15 </td>
              <td> </td>
              <td>  15 </td>
              <td>   </td>
              <td>  15 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>

            </tr>

            <tr>
              <td>Sulfat de Magneziu</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>         
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td>  </td>

            </tr>

            <tr>
              <td>Sulfat de Zinc</td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>         
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td>  </td>

            </tr>


            <tr>
              <td>Acid Boric</td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>         
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td>  </td>

            </tr>

            <tr>
              <td>Ferro-Chel</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>         
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>

            </tr>


            <tr>
              <td>Phos-Ram</td>
              <td>  </td>
              <td> 2 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 2 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>

            </tr>

            <tr className="p-3 mb-2 bg-warning text-dark">
              <td >Nitro-Cal L</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>         
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td>  </td>
            </tr>

          </tbody>
        </Table>

        


      </TabPanel>

      <TabPanel value={value} index={1}>

      <Table bordered>
          <thead>
          <tr className="p-3 mb-2 bg-secondary text-black">
          <th rowSpan={2}>Nume Fertilizant</th>  
          <th colSpan={3} className="text-center">Aprilie</th>
          <th colSpan={4} className="text-center">Mai</th>
          <th colSpan={4} className="text-center">Iunie</th>
          <th colSpan={4} className="text-center">Iulie</th>
          <th colSpan={4} className="text-center">August</th>
          <th colSpan={2} className="text-center">Septembrie</th>

          </tr >
            <tr className="p-3 mb-2 bg-secondary text-black">
              <th>Sapt. 14</th>
              <th>Sapt. 15</th>
              <th>Sapt. 16</th>
              <th>Sapt. 17</th>
              <th>Sapt. 18</th>
              <th>Sapt. 19</th>
              <th>Sapt. 20</th>
              <th>Sapt. 21</th>
              <th>Sapt. 22</th>
              <th>Sapt. 23</th>
              <th>Sapt. 24</th>
              <th>Sapt. 25</th>
              <th>Sapt. 26</th>
              <th>Sapt. 27</th>
              <th>Sapt. 28</th>
              <th>Sapt. 29</th>
              <th>Sapt. 30</th>
              <th>Sapt. 31</th>
              <th>Sapt. 32</th>
              <th>Sapt. 33</th>
              <th>Sapt. 34</th>
            </tr>
          </thead>

          <tbody className="text-center p-3 mb-2 bg-info text-black">

            <tr>
              <td>Fulvicert 30-10-10</td>
              <td> </td>
              <td> 7 </td>
              <td> 7 </td>
              <td> 7 </td>
              <td> 7 </td>
              <td> 7 </td>
              <td> 7 </td>
              <td> 7 </td>
              <td> 9.5 </td>
              <td> 9.5 </td>
              <td> 9.5 </td>
              <td> 9.5 </td>
              <td> 9.5 </td>
              <td> 9.5 </td>         
              <td> 9.5 </td>
              <td> 9.5 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 7 </td>
              <td> 7 </td>
            </tr>

            <tr >
              <td>Fulvicert 8-10-30</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td> 8.5 </td>
              <td> 8.5 </td>
              <td> 8.5 </td>
              <td> 8.5 </td>
              <td> 8.5 </td>
              <td> 15 </td>
              <td> 15 </td>
              <td> 15 </td>
              <td> 15 </td>
              <td> 15 </td>
              <td> 15 </td>         
              <td> 15 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 8.5 </td>
              <td> 8.5 </td>
            </tr> 


            <tr>
              <td>Fulvicert 3-8-40</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td> 17 </td>
              <td> 17 </td>
              <td> 17 </td>
              <td> 17 </td>
              <td>  </td>
              <td>  </td>
            </tr> 

            <tr>
              <td>Fulvicert 15-30</td>
              <td> </td>
              <td> 15 </td>
              <td>  </td>
              <td> 15 </td>
              <td>  </td>
              <td> 15 </td>
              <td>  </td>
              <td>  </td>
              <td>  15 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr>
              <td>Sulfat de Magneziu</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>         
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
              <td> 6 </td>
              <td>  </td>
            </tr>

            <tr>
              <td>Sulfat de Zinc</td>
              <td>  </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>         
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              
            </tr>


            <tr>
              <td>Acid Boric</td>
              <td>  </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>         
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
              <td>  </td>
              <td> 0.7 </td>
            </tr>

            <tr>
              <td>Ferro-Chel</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>         
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>


            <tr>
              <td>Phos-Ram</td>
              <td>  </td>
              <td> 2 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 2 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr className="p-3 mb-2 bg-warning text-dark">
              <td >Nitro-Cal L</td>
              <td>  </td>
              <td> 12 </td>
              <td>  </td>
              <td> 12 </td>
              <td>  </td>
              <td> 12 </td>
              <td>  </td>
              <td> 12 </td>
              <td>  </td>
              <td> 12 </td>
              <td>  </td>
              <td> 12 </td>
              <td>  </td>
              <td> 12 </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

          </tbody>
        </Table>

      </TabPanel>

      <TabPanel value={value} index={2}>

        <Table bordered>
          <thead>
          <tr className="p-3 mb-2 bg-secondary text-black">
          <th className='text-center' rowSpan={2}>Nume Fertilizant</th>  
          <th colSpan={4} className="text-center">Aprilie</th>
          <th colSpan={4} className="text-center">Mai</th>
          <th colSpan={4} className="text-center">Iunie</th>
          <th colSpan={4} className="text-center">Iulie</th>
          <th colSpan={4} className="text-center">August</th>
          <th colSpan={4} className="text-center">August</th>

          </tr>
            <tr className="p-3 mb-2 bg-secondary text-black">
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
              <th>21</th>
              <th>22</th>
              <th>23</th>
              <th>24</th>
              <th>25</th>
              <th>26</th>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
              <th>31</th>
              <th>32</th>
              <th>33</th>
              <th>34</th>
              <th>35</th>
              <th>36</th>
              <th>37</th>
            </tr>
          </thead>

          <tbody className="text-center p-3 mb-2 bg-info text-black">

            <tr>
              <td>Plantagrow</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td> 0.5 </td>
              <td> 0.5 </td>
              <td> 0.5 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr >
              <td>FoliarCombi</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.3 </td>
              <td> 0.3 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr> 


            <tr>
              <td>Phos Ram</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.5 </td>
            </tr> 

            <tr>
              <td>Fertigema</td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr>
              <td>Phos Phytos</td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr>
              <td>K Force</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>


            <tr>
              <td>Nitrocal</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td> 1 </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            

          </tbody>
        </Table>

        

      </TabPanel>
      



      <TabPanel value={value} index={3}>

      <Table bordered>
          <thead>
          <tr className="p-3 mb-2 bg-secondary text-black">
          <th className='text-center' rowSpan={2}>Nume Fertilizant</th>  
          <th colSpan={4} className="text-center">Aprilie</th>
          <th colSpan={4} className="text-center">Mai</th>
          <th colSpan={4} className="text-center">Iunie</th>
          <th colSpan={4} className="text-center">Iulie</th>
          <th colSpan={4} className="text-center">August</th>
          <th colSpan={4} className="text-center">August</th>

          </tr>
            <tr className="p-3 mb-2 bg-secondary text-black">
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
              <th>21</th>
              <th>22</th>
              <th>23</th>
              <th>24</th>
              <th>25</th>
              <th>26</th>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
              <th>31</th>
              <th>32</th>
              <th>33</th>
              <th>34</th>
              <th>35</th>
              <th>36</th>
              <th>37</th>
            </tr>
          </thead>

          <tbody className="text-center p-3 mb-2 bg-info text-blacks">

            <tr>
              <td>Plantagrow</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr>
              <td>FoliarCombi</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.3 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>         
              <td>  </td>
              <td> 0.3 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr> 


            <tr>
              <td>Phos Ram</td>
              <td> </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> </td>
              <td> </td>
              <td>  </td>         
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.5 </td>
            </tr> 

            <tr>
              <td>Fertigema</td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.5 </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr>
              <td>Phos Phytos</td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
            </tr>

            <tr>
              <td>K Force</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td> 0.8 </td>
              <td> 0.8 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 0.8 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>


            <tr>
              <td>Nitrocal</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td> 1 </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
            </tr>

            

          </tbody>
        </Table>


      </TabPanel>

    </Box>
  );
}
