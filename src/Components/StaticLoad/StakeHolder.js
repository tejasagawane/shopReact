import React, { useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import { TextField } from "@mui/material";
import { UserContext } from "../../Login/Context/LoginContext";
const URL = "/api/v1/staticDropdown/stakeHolders/distinct";

function StakeHolder(props) {
  const [stakeHolders, setStakeHolders] = useState([]);
  const [user] = useContext(UserContext);
  useEffect(() => {
    axios
    .get(URL, {
      headers: {
        "Content-Type": "application/json",
       "Authorization" : "Bearer "+user
      },
    })
      .then((response) => {
        const data = response.data;
        setStakeHolders([...stakeHolders, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("Brands: ", brands);
  return (
    <div className="form_controls">
      {/* <label>Stake Holder : </label> */}
      <TextField
        id="outlined-select-currency"
        select
        label="StakeHolder :"
        onChange={props.onChangeStakeHolderFilter}
        helperText="Please select stakeHolder"
        size="small"
        fullWidth="true"
        SelectProps={{
          native: true,
        }}
        sx={{ m: 0.3, width: '37ch' }}
      >
        <option key="0"></option>
        {stakeHolders.map((stakeHolder) => (
          <option key={stakeHolder.id} value={stakeHolder.name}>
            {stakeHolder.name}
          </option>
        ))}
      </TextField>

      {/* <select onChange={props.onChangeStakeHolderFilter}>
        {stakeHolders.map((stakeHolder) => (
          <option key={stakeHolder.id} value={stakeHolder.id}>
            {stakeHolder.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default StakeHolder;
