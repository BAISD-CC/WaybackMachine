import * as ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

// pages

import Public from './pages/Public';
import Contributors from './pages/Contributors';
import Credits from './pages/Credits';

// default
const App = () => (

   <>

      <HashRouter>

         {/* WRAPPER */}
         <div className="font-codedojofont text-2xl overflow-hidden" id="wayback-root">

            {/* BACKGROUND */}
            <div className="bg-zinc-950 w-screen h-screen fixed -z-10"></div>

            {/* PAGE */}
            <Routes>
               <Route path="/" element={<Public />} />
               <Route path="/contributors" element={<Contributors />} />
               <Route path="/credits" element={<Credits />} />
            </Routes>
         </div>

      </HashRouter>

   </>
);

function render() {
   const root = ReactDOM.createRoot(document.getElementById("app"));
   root.render(<App />);
}

render();
