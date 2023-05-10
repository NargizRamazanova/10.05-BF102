import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './page/pages/home'
import Main from './page/pages/Main';
import Employees from './page/pages/employees';
import EmployeeDetail from './page/pages/employeeDetail';

import AdminMain from './admin/pages/Main';
import AdminEmployees from './admin/pages/employees';
import AdminEmployeeDetail from './admin/pages/employeeDetail';
import AdminEmployeeEdit from './admin/pages/editEmployee';
import AdminEmployeeAdd from './admin/pages/addEmployee';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/employees",
                element: <Employees />,
            },
            {
                path: "/employees/:id",
                element: <EmployeeDetail />,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminMain/>,
        children: [
            {
                path: "",
                element: <AdminEmployees/>
            },
            {
                path: "details/:id",
                element: <AdminEmployeeDetail/>
            },
            {
                path: "add",
                element: <AdminEmployeeAdd/>
            },
            {
                path: ":id/edit",
                element: <AdminEmployeeEdit/>
            },
           
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
