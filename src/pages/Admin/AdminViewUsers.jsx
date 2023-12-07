import { useState, useEffect } from 'react'
import { ViewUsers } from '../../services/api'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserRoundX, UserRoundCog } from "lucide-react";
import AdminNav from './Layout/AdminLeftbar';

const AdminViewUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = () => {
        ViewUsers().then((res) => {
            setUsers(res.data);
        });
    };
    const handleDeleteUser = (id, name) => {
        console.log(name);
    }
    
    return (
        <>
            <div className='game-x-main'>
                <AdminNav />
                <div className='game-actions'>
                    <h1 className="game-page-title">Users</h1>
                    <div className='game-x-data'>
                        <div>
                            <div className="tbl-header">
                                <table cellPadding={0} cellSpacing={0} border={0}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="tbl-content">
                                <table cellPadding={0} cellSpacing={0} border={0}>
                                    <tbody>
                                        {Array.isArray(users) && users.length > 0 ? (
                                            users.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>{user.phone}</td>
                                                    <td>
                                                        <Link to={`/Admin/user/edit/${user.id}`}>
                                                            <button className="game-x-edit-btn">
                                                                <span> <UserRoundCog size={28}/></span>
                                                            </button>
                                                        </Link>
                                                        <button
                                                            className="game-x-delete-btn"
                                                            onClick={() => handleDeleteUser(user.id, user.username)}>
                                                            <span><UserRoundX size={28} /></span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='sub-loader-x no-size-loader'>
                                                        <div className="loader-max">
                                                            <span className="load-max"></span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </>
    )
}

export default AdminViewUsers