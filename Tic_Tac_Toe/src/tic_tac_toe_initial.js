import { useState } from "react";

let totclicks = 0;

let gameStates = [[], [], [], [], [], [], [], [], [], []];
gameStates[0] = ["","","","","","","","","",""]


function Renderbox(prop){
  if(gameStates[9].length != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 7)}}>go to step 7</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 8)}}>go to step 8</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 9)}}>go to step 9</button>
      </>
    );
  }
  else if(gameStates[8].length != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 7)}}>go to step 7</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 8)}}>go to step 8</button>
      </>
    );
  }
  else if(gameStates[7] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 7)}}>go to step 7</button>
      </>
    );
  }
  else if(gameStates[6] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 6)}}>go to step 6</button>
      </>
    );
  }
  else if(gameStates[5] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 5)}}>go to step 5</button>
      </>
    );
  }
  else if(gameStates[4] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 4)}}>go to step 4</button>
      </>
    );
  }
  else if(gameStates[3] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 3)}}>go to step 3</button>
      </>
    );
  }
  else if(gameStates[2] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 2)}}>go to step 2</button>
      </>
    );
  }
  else if(gameStates[1] != 0){
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 1)}}>go to step 1</button>
      </>
    );
  }
  else {
    return (
      <>
      <button className="gamed" onClick={() => {resetGame(prop.tabl, prop.func,  prop.winr, prop.tostop, 0)}}>reset</button>
      </>
    );
  }
}

export default function Board() {
  const dict = ["", "", "" , "", "", "", "", "", ""];
  const [tables, setTable] = useState(dict);
  const [nextSymbol, setNextSymbol] = useState("X");
  const [winner, setWinner] = useState("");
  return ( 
    <>
      <p>{tables}</p>
      <p>{winner}</p>
      <div className="status">Next player: {nextSymbol}</div>
      <Renderbox func = {setNextSymbol} tabl = {setTable} winr = {setWinner} tostop = {winner}/>
      <div className="board-row">
        <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {0} winr  = {setWinner} tostop = {winner}/>
        <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {1} winr  = {setWinner} tostop = {winner}/>
        <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {2} winr  = {setWinner} tostop = {winner}/>
      </div>
      <div className="board-row">
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {3} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {4} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {5} winr  = {setWinner} tostop = {winner}/>
      </div>
      <div className="board-row">
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {6} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {7} winr  = {setWinner} tostop = {winner}/>
      <Square func = {setNextSymbol} tabl = {setTable} tables = {tables} index = {8} winr  = {setWinner} tostop = {winner}/>
      </div>
    </>
  )
}

function resetGame(setTable, setNextSymbol, setWinner, toStop, state){
  // if(state == 0){
  //   const ntb = ["", "", "", "", "", "", "", "", ""];
  //   totclicks = 0;
  //   console.log(gameStates);
  //   for(let i=0; i<gameStates.length; i++){
  //     gameStates[i].length = 0;
  //   }
  //   return setTable(ntb), setNextSymbol("X"), setWinner("");
  // }
  const ntb = gameStates[state];
  let isWinner = winnerFinder(ntb);
  totclicks = state;
  // for(let i=state+1; i<gameStates.length; i++){
  //   gameStates[i].length=0;
  // }
  if(state%2 == 0){
    if(isWinner){
      return setTable(ntb), setNextSymbol("X"), setWinner("O");
    }
    else {
      return setTable(ntb), setNextSymbol("X"), setWinner("");
    }
  }
  else{
    if(isWinner){
      return setTable(ntb), setNextSymbol("O"), setWinner("X");
    }
    else {
      return setTable(ntb), setNextSymbol("O"), setWinner("");
    }
  }
}

function winnerFinder(newArray){
  for(let i=0; i<3; i++){
    if(newArray[3*i] === newArray[3*i + 1] && newArray[3*i] === newArray[3*i + 2] && newArray[3*i] != ""){
      return true;
    }
    else if(newArray[i] === newArray[i+3] && newArray[i] === newArray[i+6] && newArray[i] !== ""){
      return true;
    }
    else if(newArray[0] === newArray[4] && newArray[0] === newArray[8] && newArray[0] !== ""){
      return true;
    }
    else if(newArray[2] === newArray[4] && newArray[4] === newArray[6] && newArray[4] !== ""){
      return true;
    }
  }
  return false;
}

function handleClick(setNextSymbol, setTable, tables, index, setWinner){
  // alert("clicked");
  totclicks++;
  const newArray = [...tables];
  if(totclicks%2 == 0){
    newArray[index] = "O";
    gameStates[totclicks] = newArray;
    for(let i=totclicks+1; i<gameStates.length; i++){
      gameStates[i].length=0;
    }
    let isWinner = winnerFinder(newArray);
    // console.log("winnerfinder invoked for if");
    if (isWinner){
      return setNextSymbol("X"), setTable(newArray), setWinner("O");
    }
    else {
      return setNextSymbol("X"), setTable(newArray);
    }
  }
  newArray[index] = "X";
  gameStates[totclicks] = newArray;
  for(let i=totclicks+1; i<gameStates.length; i++){
    gameStates[i].length=0;
  }
  let isWinner = winnerFinder(newArray);
  // console.log("winnerfinder invoked for else");
  if(isWinner){
    return setNextSymbol("O"), setTable(newArray), setWinner("X");
  }
  else {
    return setNextSymbol("O"), setTable(newArray);
  }
}

function nxtSymbol({nextSymbol, setNextSymbol}){
  if(totclicks%2 == 0) {
    setNextSymbol("X");
    return nextSymbol; 
  }
  setNextSymbol("O");
  return nextSymbol;
}

function Square(prop){
  if(prop.tostop == false && prop.tables[prop.index] == "") {
    return <button className="square" onClick={() => {handleClick(prop.func, prop.tabl, prop.tables, prop.index, prop.winr)}}>{prop.tables[prop.index]}</button>;
  }
  else{
    return <button className="square">{prop.tables[prop.index]}</button>;
  }
}