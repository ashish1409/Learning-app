import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SecondLableTab from './SecondLableTab'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import Paper from "@material-ui/core/Paper";
import ComingSoon from '../ComingSoon';


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
        <div div={3}>
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
    flexGrow: 1,
    backgroundColor:'red'
  },
  Paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FirstLableTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
            <Tab label="Task" icon={<AssignmentOutlinedIcon />} {...a11yProps(0)} />
            <Tab label="Conversaction" icon={<QuestionAnswerOutlinedIcon />} {...a11yProps(1)} />
            <Tab label="File" icon={<FileCopyOutlinedIcon />} {...a11yProps(2)} />
            <Tab label="Resources" icon={<ContactMailOutlinedIcon />} {...a11yProps(3)} />
            <Tab label="Status" icon={<DoneAllOutlinedIcon />} {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <SecondLableTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ComingSoon />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ComingSoon />
        </TabPanel> 
      </Paper>

  );
}
