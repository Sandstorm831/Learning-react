import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";


function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
    <EvenRenderer />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  console.log("re-rendering is happening in buttons")
  return <div>
    <button onClick={()=>{setCount(c => c+1)}}>Increase</button>
    <button onClick={()=>{setCount(c => c-1)}}>Decrease</button>
  </div>
}

function EvenRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    { count%2 === 0? "It is even":""}
  </div>
}

export default App
