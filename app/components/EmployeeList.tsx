'use client'
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { log } from 'console';
interface Employee {
  id: number;
  employeeName: string;
  dateOfBirth: string;
  image: string;
  email: string;
}
const EmployeeList = () => {
  const [employees, setEmployees] = useState<any[]>([]); 
    useEffect(() => {
        axios.get("http://localhost:3000/api/employees")
            .then((response) => {
                setEmployees(response.data); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, [employees]);
    const handleDelete=(id:string)=>{
        axios.delete(`http://localhost:3000/api/employees/${id}`)
        .then((response) => {
           setEmployees(response.data.employees);
        })
        .catch((error)=>{
            console.log(error);    
        })
    }
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">STT</th>
            <th className="py-2 px-4 border-b">Tên nhân viên</th>
            <th className="py-2 px-4 border-b">Ngày sinh</th>
            <th className="py-2 px-4 border-b">Hình ảnh</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{employee.name}</td>
              <td className="py-2 px-4 border-b">{employee.date}</td>
              <td className="py-2 px-4 border-b">
                <img src={employee.image} alt={employee.employeeName} className="h-10 w-10 rounded-full" />
              </td>
              <td className="py-2 px-4 border-b">{employee.email}</td>
              <td className="py-2 px-4 border-b">
                <button onClick={()=>{handleDelete(employee.id)}} className="bg-red-500 text-white px-4 py-1 rounded">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeList;
