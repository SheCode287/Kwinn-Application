import Dashboard from '../src/pages/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import Side from './components/sidebars/Side'
// import TableGraph from './pages/reports/TableGraph'


function App() {

  return (
    <>
     <Navbar />
        {/* <Setting /> */}
        {/* <Tables /> */}
        <Side />
       <Dashboard /> 
        {/* <TableGraph/> */}
        
    </>
  )
}

export default App
