
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className=" md:w-[1340px] mx-auto">
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
