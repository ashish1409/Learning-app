
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TaskAssignUi from '../Calender/TaskAssignUi';
import ListItem from './ListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Utilization() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} xl={8}  lg={8}>
          <Paper className={classes.paper}>
            <TaskAssignUi />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
          <Paper className={classes.paper}>
            <ListItem />
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}


