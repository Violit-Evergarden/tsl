import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import {renderRoutes } from 'react-router-config'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
