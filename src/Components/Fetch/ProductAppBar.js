import React, { useState,useContext } from "react";
import {
  AppBar,
  backdropClasses,
  Tabs,
  Toolbar,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AdbIcon from '@mui/icons-material/Adb';
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StoreIcon from "@mui/icons-material/Store";
import { Tab } from "@material-ui/core";
import ProductList1 from "./ProductList1";
import ProductForm from "../Forms/ProductForm";
import BrandForm from "../Forms/BrandForm";
import StakeHolderForm from "../Forms/StakeHolderForm";
import ColorForm from "../Forms/ColorForm";
import CategoryForm from "../Forms/CategoryForm";
import SoldProductList from "./SoldProductList";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import StakeHolderSearch from "../Forms/StakeHolderSearch";
import { UserContext } from "../../Login/Context/LoginContext";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// import myshop from "../../myshop.jpg";

function ProductAppBar() {
  const [user, setUser] = useContext(UserContext);  
  const [value, setValue] = useState();
  const [addStock, setAddStock] = useState(false);
  const [updateStock, setUpdateStock] = useState(false);
  const [addBrand, setAddBrand] = useState(false);
  const [addStakeHolder, setAddStakeHolder] = useState(false);
  const [searchStakeHolder, setSearchStakeHolder] = useState(false);
  const [addColor, setAddColor] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [soldProduct, setSoldProduct] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleCloseNavMenuAddStock = (e) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(true);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  };

  const handleCloseNavMenuUpdateStock = (e) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(false);
    setUpdateStock(true);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  };

  const handleCloseNavMenuSell = (e) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(true);
    setSearchStakeHolder(false);
  };

  const handleCloseNavMenuStakeHolder = (e) => {
    e.preventDefault();
    setAnchorElNav(null);
    setSearchStakeHolder(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
  };

  const handleCloseUserMenuStakeHolder = (e) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddStakeHolder(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleCloseUserMenuBrand = (e) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddBrand(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleCloseUserMenuColor = (e) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddColor(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleCloseUserMenuCategory = (e) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddColor(false);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddCategory(true);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleCloseUserMenuLogOut = (e) => {   
    setAnchorElUser(null);
    setUser();
  }

  const handleOnChangeUserMenu = (e) => {
   
    setValue(e.target.innerText)
    alert(value);
   
    //e.preventDefault();
    //setAnchorElUser(null);
   if(e.target.innerHTML = 'Add Stock') {
    
      setAddStock(true);
      setUpdateStock(false);
      setAddStakeHolder(false);
      setAddBrand(false);
      setAddColor(false);
      setAddCategory(false);
      setSoldProduct(false);
    } else if(e.target.innerHTML = 'Update Stock') {
      setUpdateStock(true);
      setAddStock(false);
      setAddStakeHolder(false);
      setAddBrand(false);
      setAddColor(false);
      setAddCategory(false);
      setSoldProduct(false);
    } else if(e.target.innerHTML = 'Sell') {
      setSoldProduct(true);
      setAddStock(false);
      setUpdateStock(false);
      setAddStakeHolder(false);
      setAddBrand(false);
      setAddColor(false);
      setAddCategory(false);
    } else if(e.target.innerHTML = 'StakeHolder') {
      setAddStakeHolder(true);
      setAddStock(false);
      setUpdateStock(false);
      setAddBrand(false);
      setAddColor(false);
      setAddCategory(false);
      setSoldProduct(false);
    } else if(e.target.innerHTML = 'Brand') {
      setAddBrand(true);
      setAddStock(false);
      setUpdateStock(false);
      setAddStakeHolder(false);
      setAddColor(false);
      setAddCategory(false);
      setSoldProduct(false);
    } else if(e.target.innerHTML = 'Color') {
      setAddColor(true);
      setAddStock(false);
      setUpdateStock(false);
      setAddStakeHolder(false);
      setAddBrand(false);
      setAddCategory(false);
      setSoldProduct(false);
    } else if(e.target.innerHTML = 'Category') {
      setAddCategory(true);
      setAddStock(false);
      setUpdateStock(false);
      setAddStakeHolder(false);
      setAddBrand(false);
      setAddColor(false);
      setSoldProduct(false);
    } else if(e.target.innerHTML = 'Logout') {
      //setUser();
    }
  };

  return (
    <Stack>
      <Stack>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <CurrencyRupeeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/> */}
          <BusinessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            SUBHASH SHOES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenuAddStock}>
                  <Typography textAlign="center">Add Stock</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenuUpdateStock}>
                  <Typography textAlign="center">Update Stock</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenuSell}>
                  <Typography textAlign="center">Sell</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenuStakeHolder}>
                  <Typography textAlign="center">StakeHolder</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <BusinessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SUBHASH SHOES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
             <Button
                onClick={handleCloseNavMenuAddStock}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Add Stock
              </Button>
              <Button
                onClick={handleCloseNavMenuUpdateStock}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Update Stock
              </Button>
              <Button
                onClick={handleCloseNavMenuSell}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sell
              </Button>
              <Button
                onClick={handleCloseNavMenuStakeHolder}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                StakeHolder
              </Button>              

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Subhash shoes" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem onClick={handleCloseUserMenuStakeHolder} >
                  <Typography textAlign="center">StakeHolder</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuBrand} >
                  <Typography textAlign="center">Brand</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuColor} >
                  <Typography textAlign="center">Color</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuCategory} >
                  <Typography textAlign="center">Category</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuLogOut} >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>        
      </Container>
    </AppBar>
    </Stack>
    <Stack>
    {addStock ? <ProductForm /> : null}
    {updateStock ? <ProductList1 /> : null}
    {soldProduct ? <SoldProductList /> : null}
    {addBrand ? <BrandForm /> : null}
    {addStakeHolder ? <StakeHolderForm /> : null}
    {addCategory ? <CategoryForm /> : null}
    {addColor ? <ColorForm /> : null}
    {searchStakeHolder ? <StakeHolderSearch /> : null}
    </Stack>
    </Stack>
    
  );
};

export default ProductAppBar;