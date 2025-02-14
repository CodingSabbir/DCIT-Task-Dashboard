
'use client'
import React, { useState, useEffect } from 'react';

const Transactions = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>
                        <span className="text-base font-normal text-gray-500">This is a list of latest transactions</span>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="overflow-x-auto rounded-lg">
                        <div className="align-middle inline-block min-w-full">
                            <div className="shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Transaction
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Zipcode
                                            </th>
                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {users.slice(0, 7).map((user, index) => (
                                            <tr key={user.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                    Payment from <span className="font-semibold">{user.name}</span>
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                    {user.address.zipcode}
                                                </td>
                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                    ${user.address.geo.lng} 
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
