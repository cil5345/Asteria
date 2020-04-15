import React from "react";
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
  Ira: [{ from: "Ira", msg: "Hey Cutie" }],
  Antonio: [{ from: "Antonio", msg: "hello" }],
  Moe: [{ from: "Moe", msg: "hello" }],
  Casey: [{ from: "Casey", msg: "hello" }],
  Bob: [{ from: "Casey", msg: "hello" }],
};

function reducer(state, action) {
  switch (action.type) {
    case "RECIEVE_MESSAGE":
        const newState = {
            ...state,
            [action.payload.topic]: [
              ...state[action.payload.topic],
              {
                from: action.payload.from,
                msg: action.payload.msg,
              },
            ],
          };
          console.log(newState)
      return newState
    default:
      return state;
  }
}

function sendChatAction(value) {
  socket.emit("chat message", value);
}

let socket;

function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);
  if (!socket) {
    socket = io(":3002");
    socket.on("chat message", function (msg) {
      console.log({msg});
      dispatch({ type: "RECIEVE_MESSAGE", payload: msg });
    });
  }

  const user = "Chris" + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}

export default Store;
