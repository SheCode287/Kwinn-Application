import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function Sidebars() {
  return (
    <Sidebar style={{ paddingBottom: '12px', height: '100vh', margin: '0px', display: 'flex ', borderColor: "grey" }} >
      <Box sx={{ padding: "10px", m: '10px' }}>
        <Typography
          variant="h3"
          color="grey"
          fontWeight="bold"
          sx={{ m: "10px 0 20px 0" }}
        >
          Kwinn
        </Typography>
      </Box>

      <Box sx={{ paddingBottom: '40px', paddingTop: '40px', marginTop: '40px' }}>
        <Menu >

          <MenuItem
            active={false}
            title="Registration Form"
          >
            <Link style={{ textDecoration: 'none' }} textDecoration={'none'} to="/">Registration Form</Link>

          </MenuItem>

          <MenuItem
            active={false}
            title="view"
          >
            <Link style={{ textDecoration: 'none' }} to="/view">View</Link>

          </MenuItem>
        </Menu>
      </Box>
    </Sidebar>
  );
}

export default Sidebars;
