import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import { UserContext } from "../../Login/Context/LoginContext";
import StakeHolderList from "../Fetch/StakeHolderList";
import StakeHolder from "../StaticLoad/StakeHolder";
import {
  Typography,
  Stack,
} from "@mui/material";
const URL = "/api/v1/staticDropdown/stakeHolders";

function StakeHolderSearch() {
      const [stakeHolder, setStakeHolder] = useState();
      const [user] = useContext(UserContext);
    
      const [data, setData] = useState("");
      const [retrived , setRetrived ] = useState(false);
    
    //   const changeHandler = (e) => {
    //     setStakeHolder(e.target.value);
    //   };

      const filterStakeHolderHandler = (e) => {
        //alert(e.target.value);
        setStakeHolder(e.target.value);
        //console.log(product);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        //let data = JSON.stringify({stakeHolder});
        axios
          .get(URL+"/"+stakeHolder, {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "Bearer "+user
            },
          })
          .then((response) => {
            const data1 = response.data;
            //console.log(data1);
            //alert("Retrived successfully.."+data1);
            setData(data1)
            setRetrived(true)
            //alert("Retrived successfully..");
          })
          .catch((error) => {
            console.log(error);
            //alert(error);
          });
      };
    
      return (
        // <div className="div_form">
        <Stack>
          
          { retrived ? <StakeHolderList data={data} /> : 
          <div>
          {/* <h2>StakeHolder Search by Name</h2> */}
          <Typography>Search StakeHolder</Typography>
          <form onSubmit={handleSubmit}>
            <div>
              {/* <TextField
                label="StakeHolder Name : "
                id="outlined-size-small"
                size="small"
                type="text"
                name="name"
                value={stakeHolder}
                onChange={changeHandler}
              />
              <p></p> */}
              <StakeHolder onChangeStakeHolderFilter={filterStakeHolderHandler} />
            </div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
          </div>
           }
        {/* </div> */}
        </Stack>
        
      );
    }
    

export default StakeHolderSearch