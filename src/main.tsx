import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/style/style.ts'
import { HashRouter } from 'react-router-dom'
import { App } from './App.tsx'
import { DebugMenu, DebugPortalContextProvider } from './components/DebugMenu.tsx'

const element = document.getElementById('root')
if (!element) {
  throw new Error('Application error.')
}

createRoot(element).render(
  <StrictMode>
    <DebugPortalContextProvider>
      <HashRouter>
        <App />
        <DebugMenu />
      </HashRouter>
    </DebugPortalContextProvider>
  </StrictMode>,
)
