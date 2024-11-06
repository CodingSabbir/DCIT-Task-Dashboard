'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        
        const fetchCustomer = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchCustomer();
    }, []);
    return (
        <div>
             <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
                <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {
                        customers.map((customer)=>(
                            <li key={customer.id} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                
                            <Image className="h-8 w-8 rounded-full" src="/img/neil-sims.png" alt="Neil image" width={400} height={400} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                 {customer.username}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[{customer.email}]</a>
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                ${customer.address.geo.lat}
                              </div>
                            </div>
                          </li>
                        ))
                    }
                 
                 
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Customers;