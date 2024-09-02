import Sidebar from "../components/sidebar/Sidebar"
import Messagecontainer from "../components/Message/Messagecontainer"
import { useContext } from "react"




const Home = () => {
  
  
  return (
    <div className='flex w-screen h-screen bg-sky-200 overflow-clip'>
      <div className='w-screen md:max-2xl:basis-1/4'><Sidebar /></div>
      <div className=' w-0 md:max-2xl:basis-3/4 bg-sky-100'><Messagecontainer /></div>
      
      
    </div>
  )
}

export default Home