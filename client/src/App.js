import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/textField'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {green, orange} from '@material-ui/core/colors'
import './App.css';
import 'fontsource-roboto'
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px'
  }
})

const theme = createMuiTheme({
  palette:{
    primary:{
      main:green[500],
    },
    secondary:{
      main:orange[500],
    },
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true)
  return (

    <FormControlLabel
      control={
        <Checkbox
          icon={<DeleteIcon color="secondary" />}
          checkedIcon={<SaveIcon />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
      }
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Typography>
        Welcome to MUI
      </Typography>
      <ButtonStyled />
      <TextField
        variant="filled"
        // variant ="outlined"
        color="secondary"
        type="email"
        // type="date"
        // type="time"
        label="The Time"
        placeholder="test@test.com"
      />
      <CheckBoxExample />
      <ButtonGroup>
        <Button
          startIcon={<SaveIcon />}
          // endIcon={<SaveIcon />}
          //  style={{
          //   fontSize: "20px"
          //  }}
          size="large"
          href="#"
          onClick={() => alert('Hello')}
          variant="contained"
          color="primary">
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          size="large"
          href="#"
          onClick={() => alert('Hello')}
          variant="contained"
          color="secondary">
          Discard
        </Button>
      </ButtonGroup>
    </div>
    </ThemeProvider>
  );
}

export default App;
