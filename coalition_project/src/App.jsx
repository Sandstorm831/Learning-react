import { RecoilRoot } from "recoil"
import Navbar from "./components/navbar"
import "./output.css"
import PatientsPalette from "./components/patients"
import DiagnosisHistory from "./components/diagnosisHistory"
import DiagnosticList from "./components/diagnosisList"
import ProfilePalette from "./components/ProfilePalette"
import LabResults from "./components/labResult"
function App() {

  return (
    <RecoilRoot>
      <div className="flex flex-col bg-[#F6F7F8] h-full">
        <div className="m-5">
          <Navbar />
        </div>
        <div className="flex justify-between">
          <div className="bg-white w-[367px] h-full rounded-xl mx-5"> <PatientsPalette /> </div>
          <div className="w-[1066px] mx-5 h-full flex flex-col overflow-scroll"> 
            <DiagnosisHistory /> 
            <DiagnosticList />
          </div>
          <div className="w-[367px] mx-5 "> 
            <ProfilePalette />
            <LabResults />
          </div>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
