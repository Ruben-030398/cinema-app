import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@/shared/providers/theme-provider.tsx'

import ReactQueryProvider from '@/shared/providers/react-query-provider'

import './globals.css'
import ReactRouterProvider from './shared/providers/react-router-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <React.StrictMode>
        <ReactRouterProvider />
      </React.StrictMode>
    </ThemeProvider>
  </ReactQueryProvider>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
