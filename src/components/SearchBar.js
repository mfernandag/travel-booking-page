import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import Input from "@material-ui/core/Input";
//import InputLabel from "@material-ui/core/InputLabel";
//import InputAdornment from "@material-ui/core/InputAdornment";
//import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

//import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import DayPickerInput from "./DayPickerInput";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SearchBar = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <div className="inputsWrapper">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Flying from?" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Destination" />
          </Grid>
        </Grid>
      </div>
      <DayPickerInput date="Depart" />
      <DayPickerInput date="Return" />
      <TextField
        id="standard-number"
        label=""
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default SearchBar;
