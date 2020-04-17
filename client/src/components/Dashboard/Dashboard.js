import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from '../Store/Store'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: 'center',
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    padding: '20px',
    width: "%",
    height: "300px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

function Dashboard() {
  const classes = useStyles();

//CTX store
const {allChats, sendChatAction, user} = React.useContext(CTX)
console.log({allChats})
const topics = Object.keys(allChats)

const [activeTopic, changeActiveTopic] = React.useState(topics[0])
const [textValue, changeTextValue] = React.useState('')


  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat Room
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>

              {
              
                topics.map((topic) => (
                <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))
              
              }

            </List>
          </div>
          <div className={classes.chatWindow}>
          {

             allChats[activeTopic].map((chat, i) => (
                  <div className={classes.flex} key={i}>
                      <Chip avatar={<Avatar>M</Avatar>} label={chat.from} />
                <Typography varient="body1" gutterBottom>{chat.msg}</Typography>
                </div>
                
              ))
              
          }

          </div>
        </div>
        <div className={classes.flex}>

             
            <TextField
          onChange={(e) => changeTextValue(e.target.value)}
          value={textValue}
          label="Send a chat"
          className={classes.chatBox}
          style={{ margin: 8 }}
          placeholder="Hello!"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button 
        variant="contained" 
        color="primary" 
        className={classes.button} 
        onClick={() => {
            sendChatAction({from: user, msg: textValue, room: activeTopic });
            changeTextValue('');
        }}
        >
              send
        </Button>
        </div>
      </Paper>
    </>
  );
}

export default Dashboard;
