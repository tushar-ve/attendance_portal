import React from 'react';
import { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './employees.css'
const Employees = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Dummy data for employees
  const dummyEmployees = [
    {
      id: 1,
      employeeID: 'EMP001',
      name: 'John Doe',
      position: 'Software Engineer',
      email: 'john.doe@example.com',
      schedule: '9:00 AM - 5:00 PM',
      memberSince: '2020-01-15',
    },
    {
      id: 2,
      employeeID: 'EMP002',
      name: 'Jane Smith',
      position: 'UI/UX Designer',
      email: 'jane.smith@example.com',
      schedule: '10:00 AM - 6:00 PM',
      memberSince: '2019-11-20',
    },
    {
      id: 3,
      employeeID: 'EMP003',
      name: 'Alice Johnson',
      position: 'Marketing Manager',
      email: 'alice.johnson@example.com',
      schedule: '8:00 AM - 4:00 PM',
      memberSince: '2020-03-10',
    },
    {
      id: 4,
      employeeID: 'EMP004',
      name: 'Bob Williams',
      position: 'Accountant',
      email: 'bob.williams@example.com',
      schedule: '9:30 AM - 5:30 PM',
      memberSince: '2019-09-05',
    },
    {
      id: 5,
      employeeID: 'EMP005',
      name: 'Emily Brown',
      position: 'Human Resources Manager',
      email: 'emily.brown@example.com',
      schedule: '8:30 AM - 4:30 PM',
      memberSince: '2018-12-18',
    },
  ];

  return (
    <div className='admin-body'>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <div className='employee-container'>
          <h2>Employees</h2>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Schedule</th>
                <th>Member Since</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyEmployees.map((employee, index) => (
                <tr key={employee.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{employee.employeeID}</td>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.email}</td>
                  <td>{employee.schedule}</td>
                  <td>{employee.memberSince}</td>
                  <td className='in-line'>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
