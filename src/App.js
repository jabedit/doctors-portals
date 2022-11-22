
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=" md:w-[1340px] mx-auto">
      <RouterProvider  router={router}/>
      <Toaster />
    </div>
  );
}

export default App;
