import { router } from '../routes'
import { RouterProvider } from 'react-router-dom'

function ReactRouterProvider() {
  return (
    <RouterProvider router={router} />
  )
}

export default ReactRouterProvider