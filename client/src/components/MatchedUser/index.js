import React from "react"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
   shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  large: {
      minHeight: "100px",
      minWidth: "100px"
  }
}));

const MatchedUser = props => {
const classes = useStyles();
return (
  <div className="match">
          <Avatar alt={props.name} src={props.imageLink} className={classes.large} />
          <div className="match-details-div">
              <span>{props.name}</span>
              <span>{props.symbol}</span>
          </div>
          <img alt={props.symbol} src={`/api/image/${props.symbol.toLowerCase()}`} />
  </div>
  )
}

export default MatchedUser
