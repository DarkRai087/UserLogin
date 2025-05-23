import { BrowserRouter,Routes,Route } from "react-router-dom"
import Welcome_page from "./components/Welcome_page"
import Login_page from "./components/Login_page"
import Register_page from "./components/Register_page"
import AccountSettings from "./components/AccountSettings"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome_page/>}/>
           <Route path="/Login" element={<Login_page/>}/>
            <Route path="/Register" element={<Register_page/>}/>
             <Route path="/Account" element={<AccountSettings/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
