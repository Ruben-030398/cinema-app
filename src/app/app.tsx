import Navigation from '@/widgets/nav-bar/ui/navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='mt-20'>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
