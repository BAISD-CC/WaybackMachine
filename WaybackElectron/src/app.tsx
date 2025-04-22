import React from 'react'
import * as ReactDOM from 'react-dom/client';

// pages

import Public from './pages/Public';

// default
const App = () => (

   <>

      {/* WRAPPER */}
      <div className="font-codedojofont text-2xl">

         {/* BACKGROUND */}
         <div className="bg-zinc-950 w-screen h-screen fixed -z-10"></div>

         {/* PAGE */}
         <Public />

      </div>

   </>
);

function render() {
   const root = ReactDOM.createRoot(document.getElementById("app"));
   root.render(<App />);
}

render();
