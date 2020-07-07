import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RemoveFromQueueOutlinedIcon from '@material-ui/icons/RemoveFromQueueOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import LineStyleOutlinedIcon from '@material-ui/icons/LineStyleOutlined';
import Paper from "@material-ui/core/Paper";
import ComingSoon from '../ComingSoon';
import Board from './Board'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function SecondLableTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
 
      <Paper className={classes.root}>
         <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
           
          >
            <Tab  className="ashish" label="List" icon={<RemoveFromQueueOutlinedIcon />} {...a11yProps(0)} />
            <Tab  className="ashish" label="Gantt" icon={<AssessmentOutlinedIcon />} {...a11yProps(1)} />
            <Tab  className="ashish" label="Board" icon={<DeveloperBoardOutlinedIcon />} {...a11yProps(2)} />
            <Tab  className="ashish" label="Calendar" icon={<EventNoteIcon />} {...a11yProps(3)} />
            <Tab  className="ashish" label="Pivot" icon={<TableChartOutlinedIcon />} {...a11yProps(4)} />
            <Tab  className="ashish" label="Process" icon={<LineStyleOutlinedIcon />} {...a11yProps(5)} />
          </Tabs>
        </AppBar>
      <TabPanel value={value} index={0}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ComingSoon />
        </TabPanel>
       <TabPanel value={value} index={2}>
          <Board />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ComingSoon />
        </TabPanel> 
      </Paper>
 

  );
}
