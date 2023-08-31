import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            className="hover:bg-sky-600"
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <div className="md:max-w-md w-full">
        <Dialog open={open} onClose={handleClose} className="w-full">
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This will be main Item to create a fully new TODO item
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="item"
              label="Main Header"
              placeholder="e.g Travel, Home, Office...."
              type="text"
              required
              fullWidth
              variant="standard"
            />
            <ToggleButtonGroup
              value={alignment}
              color="primary"
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenterIcon />
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRightIcon />
              </ToggleButton>
              <ToggleButton value="justify" aria-label="justified">
                <FormatAlignJustifyIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} startIcon={<LibraryAddIcon />}>
              Add Item
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}
