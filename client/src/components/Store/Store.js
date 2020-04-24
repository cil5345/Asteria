import React from "react";
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
  Ira: [{ from: "Ira", msg: "Hey Cutie" }],
  Pamela: [{ from: "Pamela", msg: "Hi" }],

};

function reducer(state, action) {
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from: action.payload.from,
            msg: action.payload.msg,
          },
        ],
      };
    default:
      return state;
  }
}

function sendChatAction(value) {
  socket.emit("SEND_MESSAGES", value);
}

//
let socket;
function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);
  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", function (msg) {
      dispatch({ type: "RECIEVE_MESSAGE", payload: msg });
      if(initState[msg.room]) {
        initState[msg.room].push({from: msg.from, msg:msg.msg})
      }else{
        initState[msg.room] = [{from: msg.from, msg:msg.msg}]
      }
    });
  }

  let user = "users"

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user}}>
      {props.children}
    </CTX.Provider>
  );
}

export default Store;