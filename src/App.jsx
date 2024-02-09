import './App.css'
import MainArea from './components/MainArea'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className='flex w-screen'>
      <SideBar/>
      <MainArea/>
    </div>
  )
}

export default App
