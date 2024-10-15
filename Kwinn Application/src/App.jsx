import { Routes, Route } from "react-router-dom"
import RegistrationForm from "./Pages/RegistrationForm"
import View from "./Pages/view"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="view" element={<View />} />
      </Routes>

    </>
  )
}

export default App
