import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId='fq8BDsw6iTEah_nfIi6Y4U4CGzwa'
      baseUrl='https://api.asgardeo.io/t/reactdemoproject'>
      <App />
    </AsgardeoProvider>
  </StrictMode>
)
