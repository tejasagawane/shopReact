import React, { useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import { TextField } from "@mui/material";
import { UserContext } from "../../Login/Context/LoginContext";
const URL = "/api/v1/staticDropdown/categories";

function Category(props) {
  const [categories, setCategories] = useState([]);
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
        setCategories([...categories, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("Brands: ", brands);
  return (
    <div className="form_controls">
      {/* <label>Category : </label>

      <select onChange={props.onChangeCategoryFilter}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select> */}
      <TextField
        id="outlined-select-currency"
        select
        label="Category :"
        onChange={props.onChangeCategoryFilter}
        helperText="Please select category"
        size="small"
        fullWidth="true"
        SelectProps={{
          native: true,
        }}
      >
        <option key="0"></option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}

export default Category;
