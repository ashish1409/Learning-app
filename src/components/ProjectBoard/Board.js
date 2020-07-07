import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OnTrack from './OnTrack';
import Delayed from './Delayed'
import OnHold from './OnHold'

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

export default function Board() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item  xs={12} sm={12} md={12} xl={4}  lg={4}>
          <Paper className={classes.paper}>
            <OnTrack />
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={12} md={12} xl={4}  lg={4}>
          <Paper className={classes.paper}>
            <Delayed />
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={12} md={12} xl={4}  lg={4}>
          <Paper className={classes.paper}>
            <OnHold />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
