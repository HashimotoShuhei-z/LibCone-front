import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/router'
import { Provider } from './components/ui/provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider>
      <Router />
    </Provider>
  </BrowserRouter>
)

reportWebVitals()
