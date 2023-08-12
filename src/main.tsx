import React from 'react'
import ReactDOM from 'react-dom/client'
import Document from './Document.tsx'
import {PDFViewer} from '@react-pdf/renderer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="w-full h-screen">
      <PDFViewer className="w-full h-full">
        <Document />
      </PDFViewer>
    </div>
  </React.StrictMode>,
)
