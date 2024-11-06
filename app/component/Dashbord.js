
import React from 'react';

import Navbar from './Navbar';
import Saidbar from './Saidbar';
import Chat from './Chat';
import Transactions from './Transactions';
import StatsCard from './StatsCard';
import Customers from './Customers';
import Overview from './Overview';
import Footer from './Footer';
const Dashbord = () => {
    return (
<>

<div>
<Navbar/>
  <div className="flex overflow-hidden bg-white pt-16">
   <Saidbar/>
    <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop" />
    <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
      <main>
        <div className="pt-6 px-4">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
           <Chat/>
           <Transactions/>
          </div>
          <StatsCard/>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
           <Customers/>
            <Overview/>
          </div>
        </div>
      </main>
    <Footer/>
    </div>
  </div>
</div>

</>

    );
};

export default Dashbord;